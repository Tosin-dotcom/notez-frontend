import { Navigate } from "react-router-dom"
import { useGlobalContext } from "../../Context";
import AppRoutes from "../../routes/RouterConfig";

const ProtectedRoute = ({ children }) => {

    const { isAuthenticated } = useGlobalContext()

    if (!isAuthenticated) {
        return <Navigate to={AppRoutes.login} replace />;
      }
    
      return children;
}

export default ProtectedRoute