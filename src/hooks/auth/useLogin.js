import { useState } from "react";
import AuthServices from "../../services/AuthService";
import { useGlobalContext } from "../../Context";


const useLogin = () => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const { setErrorMessage, setIsAuthenticated, showSuccessMessage } = useGlobalContext()

  const login = async (loginObject) => {
    setLoading(true);
    try {
      const response = await AuthServices.login(loginObject);
      const { body } = response
      setData(body);
      setIsAuthenticated(true)
      localStorage.setItem("token", body.token);
      localStorage.setItem("user", JSON.stringify(body.user));
      showSuccessMessage("Login Successful")
      return true
    } catch (err) {
      setErrorMessage(err.body);
      return false
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, data };
};

export default useLogin;
