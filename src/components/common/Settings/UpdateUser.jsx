/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  TextField,
  Grid,
  CircularProgress,
  Alert,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";
import { useDispatch } from "react-redux";
import api from "../../../api/api";
import { updateUser } from "../../../features/authSlice";

function UpdateUserDistributor({ user }) {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone || "",
    address: user.address || "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitCompany = async () => {
    setLoading(true); // Iniciar la carga

    try {
      const response = await api.patch(`/distributor/${user.id}`, formData);
      const updatedUser = {
        ...user,
        email: response.data.email,
        name: response.data.name,
        phone: response.data.phone,
        address: response.data.address,
      };

      console.log("dskd");
      console.log(response);

      dispatch(updateUser(updatedUser));
      setSuccessMessage("User updated successfully");
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000); // Ocultar el mensaje de éxito después de 3 segundos
    } catch (error) {
      console.error("Error updating user:", error);
    } finally {
      setLoading(false); // Finalizar la carga
    }
  };

  return (
    <Box
      sx={{
        border: 1,
        padding: 2,
        borderRadius: 2,
        borderColor: "grey.500",
        boxShadow: 1,
        width: "100%",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            size="small"
            fullWidth
          />
        </Grid>

        <Grid item sx={6}>
          {successMessage && (
            <Alert severity="success" sx={{ marginLeft: 1 }}>
              {successMessage}
            </Alert>
          )}
        </Grid>
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 2,
        }}
      >
        <Button
          onClick={handleSubmitCompany}
          variant="contained"
          startIcon={<SaveIcon />}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Save"}
        </Button>
      </Grid>
    </Box>
  );
}

export default UpdateUserDistributor;
