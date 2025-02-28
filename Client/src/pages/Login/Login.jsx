import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormHook } from "../../hooks/useFormHook";
import { useDispatch} from "react-redux";
import { loginUser } from "../../actions/actions";
import { useAuth } from "../../context/useVerificationHook";
import "./Login.css";

export const Login = () => {
    const dispatch = useDispatch();
    const { login, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false); // Estado para evitar doble envío

    const initialForm = {
        email: "",
        password: ""
    };

    const { changeForm, email, password, handlerChange } = useFormHook(initialForm);

    const onSubmit = async (event) => {
        event.preventDefault();

        if (!email || !password) {
            alert("Contraseña y email vacíos");
            return;
        }

        setLoading(true); // Bloquea el botón mientras se envía la solicitud
        await dispatch(loginUser(changeForm, login, navigate));
        setLoading(false);
    };

    // 🔹 Redirige al usuario automáticamente si ya está autenticado
    useEffect(() => {
        if (isAuthenticated) {
            console.log("✅ Usuario autenticado, redirigiendo...");
            navigate("/home", { replace: true });
        }
    }, [isAuthenticated, navigate]);

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handlerChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlerChange}
                />
            </div>
            <NavLink to="/createUser">
                <button type="button">Create User</button>
            </NavLink>
            <button type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Submit"}
            </button>
        </form>
    );
};
