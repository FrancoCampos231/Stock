import { Navigate, Outlet} from "react-router-dom";
import { useAuth } from "../context/useVerificationHook";

const PrivateRoute = () => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <Outlet/> : <Navigate to="/login" />;
};

export default PrivateRoute;
