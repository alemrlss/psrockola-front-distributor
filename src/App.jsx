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
              <Route path="dashboard" element={<h2>dashboard </h2>} />
              <Route path="transactions" element={<Transactions />}></Route>

              <Route
                path="*"
                element={<Navigate to="/dashboard" />}
              />{" "}
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
