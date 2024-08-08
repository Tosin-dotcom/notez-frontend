import { useState } from "react";
import AuthService from "../../services/AuthService";
import { useGlobalContext } from "../../Context";


const useRegister = () => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const { setErrorMessage } = useGlobalContext()

  const register = async (registerObject) => {
    setLoading(true);
    try {
      const response = await AuthService.register(registerObject);
      const { body } = response
      setData(body)
      return true
    } catch (err) {
      setErrorMessage(err.body)
      return false
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, data };
};

export default useRegister;
