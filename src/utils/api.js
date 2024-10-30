import axios from "axios";
import { useNavigate } from "react-router-dom";
import AppRoutes from "../routes/RouterConfig";
const api = axios.create();

const configure = () => {
  api.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const navigate = useNavigate();
      if (error.code === "ERR_NETWORK") {
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate(AppRoutes.home);
      }
      if (error.response && error.response.status === 401) {
        localStorage.setItem("isAuthenticated", false);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate(AppRoutes.login);
      }

      return Promise.reject(error);
    }
  );
};

configure();

export default api;
