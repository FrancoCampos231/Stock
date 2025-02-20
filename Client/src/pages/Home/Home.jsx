import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar"
import { useAuth } from "../../hooks/useVerificationHook";

export const Home = () => {


    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); // 🔹 Borra el token
        navigate("/login"); // 🔹 Redirige al Login
    };

    return (
        <div>
            <Navbar/>
            <h1>Bienvenido al Home</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
