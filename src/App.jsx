import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import api from "./api/api";
import PublicRoute from "./components/Routes/PublicRoute";
import { useState } from "react";
import Login from "./views/Login/Login";
import Layout from "./components/Layout/Layout";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import Transactions from "./views/Transactions/Transactions";
import DashboardDistributor from "./views/Dashboard/Dashboard";
import CreateSubcompany from "./views/Subcompanies/Create/CreateSubcompany";
import ListSubcompanies from "./views/Subcompanies/List/ListSubcompany";
import Subscriptions from "./views/Subscriptions/Subscriptions";
import CancelDistributor from "./views/Subscriptions/Cancel";
import SubscriptionsSuccess from "./views/Subscriptions/Success";
import RockobitsSuccess from "./views/Rockobits/Success";
import RockobitsBuy from "./views/Rockobits/Buy";
import TransferToSubCompany from "./views/Rockobits/TransferToSubcompany";

const App = () => {
  const [sessionExpired, setSessionExpired] = useState(false);

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem("token"); // Elimina el token del localStorage
        localStorage.removeItem("user"); // Elimina el usuario del localStorage
        localStorage.removeItem("tokenExpiration"); // Elimina el tiempo de expiración del localStorage
        setSessionExpired(true);
      }
      return Promise.reject(error);
    }
  );

  return (
    <>
      <Router>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
          </Route>

          <Route path="/" element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route path="dashboard" element={<DashboardDistributor />} />
              <Route
                path="subscriptions/get"
                element={<Subscriptions />}
              ></Route>
              <Route
                path="subscriptions/cancel"
                element={<CancelDistributor />}
              ></Route>
              <Route
                path="subscriptions/success"
                element={<SubscriptionsSuccess />}
              ></Route>
              <Route path="rockobits/buy" element={<RockobitsBuy />}></Route>
              <Route
                path="rockobits/transfer"
                element={<TransferToSubCompany />}
              ></Route>
              <Route
                path="rockobits/success"
                element={<RockobitsSuccess />}
              ></Route>
              <Route path="transactions" element={<Transactions />}></Route>
              <Route
                path="subcompanies/create-subcompany"
                element={<CreateSubcompany />}
              ></Route>
              <Route
                path="subcompanies/list-subcompanies"
                element={<ListSubcompanies />}
              ></Route>
              <Route path="*" element={<Navigate to="/dashboard" />} />{" "}
            </Route>
          </Route>

          <Route path="unauthorized" element={<h2>Acceso no Autorizado</h2>} />
          <Route
            path="*"
            element={
              <h2 className="flex justify-center text-4xl">
                Te has perdido? Pagina para cuando un usuario tipee algo
                diferente a employees, companies o distributors. Recomiendo
                poner un boton de volver a inicio, o en su defecto un boton de
                volver atras. distributor
              </h2>
            }
          />
        </Routes>
      </Router>

      {sessionExpired && (
        <div
          className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50"
          style={{ zIndex: 9999 }}
        >
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-red-500 text-lg mb-4">
              Tu sesion ha expirado, por favor inicia sesion de nuevo
            </h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              Ir al Login
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
