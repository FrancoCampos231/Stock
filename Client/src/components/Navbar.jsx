import { useNavigate} from "react-router-dom"
import { useAuth } from "../context/useVerificationHook";

export const Navbar = () => {

    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); // 🔹 Borra el token
        navigate("/login"); // 🔹 Redirige al Login
    };

    return (
        <>
            <h1>Navbar</h1>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}
