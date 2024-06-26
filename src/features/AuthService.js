/* eslint-disable no-useless-catch */
import api from "../api/api";

// features/auth/authService.js
const authService = {
  async login(credentials) {
    try {
      // Realiza una solicitud al backend para iniciar sesión
      const response = await api.post("auth/login-distributor", {
        email: credentials.email,
        password: credentials.password,
      });

      if (response.status === 201) {
        localStorage.setItem("language", response.data.user.language);

        return {
          user: {
            id: response.data.user.id,
            name: response.data.user.name,
            email: response.data.user.email,
            type: response.data.user.type,
            balance: response.data.user.balance,
            wallet: response.data.user.wallet,
            membership: response.data.user.membership,
            enableCurrentPlaylist: response.data.user.enableCurrentPlaylist,
            companyId: response.data.user.companyId,
            address: response.data.user.address,
            phone: response.data.user.phone,
            language: response.data.user.language,
          },
          token: response.data.token,
          tokenExpiration: response.data.tokenExpiration,
        };
      } else {
        throw new Error("Error during login");
      }
    } catch (error) {
      console.log(error.response.data);
      if (error.response && error.response.data) {
        if (error.response.data.message === "PASSWORD_INCORRECT") {
          throw new Error("Password incorrect");
        } else if (error.response.data.message === "USER_IS_NOT_ACTIVE") {
          throw new Error("Distributor not active");
        } else {
          throw new Error("Connection error, try again later");
        }
      } else {
        throw new Error("Connection error, try again later");
      }
    }
  },
};

export default authService;
