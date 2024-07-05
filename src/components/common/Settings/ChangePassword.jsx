/* eslint-disable react/prop-types */
import { Box, Button, TextField, Divider, Grid, Alert, IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import CircularProgress from "@mui/material/CircularProgress";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import api from "../../../api/api";

function ChangePassword({ user }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChangePassword = async () => {
    if (newPassword === confirmPassword) {
      try {
        setLoading(true);
        setError(null); // Limpiar errores previos

        const response = await api.patch(`/auth/change-password-distributor/${user.id}`, {
          password: currentPassword,
          newPassword: newPassword,
        });

        console.log(response.data);

        setSuccessMessage(`Password changed successfully`); // Mostrar mensaje de éxito
        setConfirmPassword("");
        setCurrentPassword("");
        setNewPassword("");
        setLoading(false);

        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      } catch (error) {
        console.log(error);
        setLoading(false);
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          if (error.response.data.message === "PASSWORD_INCORRECT") {
            setError("Current password is incorrect");
          }
        } else {
          setError("An unexpected error occurred"); // Error genérico
        }

        setTimeout(() => {
          setError("");
        }, 3000);
      }
    } else {
      setError("Passwords do not match!");

      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  const handleCurrentPasswordChange = (event) => {
    setError("");
    setSuccessMessage("");
    setCurrentPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setError("");
    setSuccessMessage("");
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setError("");
    setSuccessMessage("");
    setConfirmPassword(event.target.value);
  };

  const handleClickShowCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const handleClickShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
      <TextField
        type={showCurrentPassword ? "text" : "password"}
        label="Current Password"
        fullWidth
        value={currentPassword}
        onChange={handleCurrentPasswordChange}
        sx={{ mb: 2 }}
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle current password visibility"
                onClick={handleClickShowCurrentPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Divider sx={{ mb: 2, borderColor: "grey.500" }} />

      <TextField
        type={showNewPassword ? "text" : "password"}
        label="New Password"
        fullWidth
        value={newPassword}
        onChange={handleNewPasswordChange}
        sx={{ mb: 2 }}
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle new password visibility"
                onClick={handleClickShowNewPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showNewPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        size="small"
        type={showConfirmPassword ? "text" : "password"}
        label="Confirm New Password"
        fullWidth
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        sx={{ mb: 2 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle confirm password visibility"
                onClick={handleClickShowConfirmPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Button
            onClick={handleChangePassword}
            variant="contained"
            startIcon={<SaveIcon />}
            disabled={loading}
          >
            {loading ? <CircularProgress size={20} /> : "Change"}
          </Button>
        </Grid>
        <Grid item>
          {error && (
            <Alert severity="error" sx={{ mb: 0 }}>
              {error}
            </Alert>
          )}
          {successMessage && (
            <Alert severity="success" sx={{ mb: 0 }}>
              {successMessage}
            </Alert>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default ChangePassword;
