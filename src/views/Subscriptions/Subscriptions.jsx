import { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { jwtDecode } from "jwt-decode";
import { useTranslation } from "react-i18next";
import { Switch, FormControlLabel } from "@mui/material";
import api from "../../api/api";
import CardDistributor from "../../components/Subscriptions/Card";
import CheckoutModalDistributor from "../../components/Subscriptions/CheckoutModal";

const stripePromise = loadStripe(
  "pk_test_51M4ShsFeiEj6y242YNiI1u9Kf1HZM4eHjMZYMeHYrTCHwRfSIA3JwC5znJfpmk0EZWlLbsvQ9wXQZbLAdJZsdhUD00dehK0IeW"
);

const Subscriptions = () => {
  const { t } = useTranslation();
  const [selectedMembership, setSelectedMembership] = useState(null);
  const [membership, setMembership] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [availableMemberships, setAvailableMemberships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  const [openModal, setOpenModal] = useState(false);

  const [filterInterval, setFilterInterval] = useState("month");

  useEffect(() => {
    const fetchMemberships = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          // Decodificar el token
          const decodedToken = jwtDecode(token);

          setUserId(decodedToken.id);
          // Verificar si la propiedad countryId está presente en el token
          if (decodedToken && decodedToken.countryId) {
            const countryId = decodedToken.countryId;

            const response = await api.get(
              `/distributor-membership/${countryId}`
            );
            setAvailableMemberships(response.data);
            console.log(response.data);
            setLoading(false);
          } else {
            console.error(
              "La propiedad countryId no está presente en el token"
            );
            setLoading(false);
          }
        } else {
          console.error("El token no está presente en el LocalStorage");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error al obtener las membresías:", error);
        setLoading(false);
      }
    };

    fetchMemberships();
  }, []);

  useEffect(() => {
    if (selectedMembership) {
      createCheckoutSession();
    }
  }, [selectedMembership]);

  const handleCardClick = async (membershipId) => {
    try {
      await createCheckoutSession();
      setSelectedMembership(membershipId);
      setOpenModal(true);

      // Crear la sesión de checkout cuando se hace clic en "Obtener"
    } catch (error) {
      console.error("Error al procesar el clic en la tarjeta:", error);
    }
  };

  const createCheckoutSession = async () => {
    try {
      const response = await api.post(
        "/stripe/create-checkout-session-subscription-distributor",
        {
          membershipId: selectedMembership,
          userId,
        }
      );

      console.log(response.data.sessionId);
      setSessionId(response.data.sessionId);
    } catch (error) {
      console.error("Error al crear la sesión de checkout:", error);
    }
  };

  const redirectToCheckout = async (sessionId) => {
    try {
      if (sessionId) {
        const stripe = await stripePromise;
        const result = await stripe.redirectToCheckout({
          sessionId,
        });

        if (result.error) {
          console.error("Error al redirigir a Checkout:", result.error);
        }
      }
    } catch (error) {
      console.error("Error al redirigir a Checkout:", error);
    }
  };
  const filteredMemberships = availableMemberships.filter(
    (membership) => membership.interval === filterInterval
  );
  if (loading) {
    return <p>Cargando membresías...</p>;
  }

  return (
    <div className="container mx-auto ">
      <div className="mb-4 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4">{t("view_memberships")}</h1>
        <div className="flex items-center">
          <span className="mr-4">{t("monthly_memberships")}</span>{" "}
          {/* Etiqueta "month" */}
          <FormControlLabel
            control={
              <Switch
                checked={filterInterval === "year"}
                onChange={() =>
                  setFilterInterval(
                    filterInterval === "year" ? "month" : "year"
                  )
                }
                sx={{
                  "& .MuiSwitch-track": {
                    backgroundColor:
                      filterInterval === "year" ? "#FFA500" : "#FFA500",
                  },
                  "& .MuiSwitch-thumb": {
                    backgroundColor: "#FFA500",
                  },
                  "& .Mui-checked + .MuiSwitch-track": {
                    backgroundColor: "#FFA500",
                  },
                  "& .MuiSwitch-thumb.Mui-checked": {
                    transform: "translateX(24px)",
                  },
                }}
              />
            }
            label="" // No hace falta poner un texto aquí, ya que se manejan por separado.
          />
          <span className="ml-4">{t("yearly_memberships")}</span>{" "}
          {/* Etiqueta "year" */}
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredMemberships.map((membership, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-8"
          >
            <CardDistributor
              membership={membership}
              onClick={() => handleCardClick(membership.id)}
              setMembership={setMembership}
            />
          </div>
        ))}
      </div>

      <CheckoutModalDistributor
        open={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={redirectToCheckout}
        sessionId={sessionId}
        selectedMembership={selectedMembership}
        membership={membership}
      />
    </div>
  );
};

const StripeWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
      <Subscriptions />
    </Elements>
  );
};

export default StripeWrapper;
