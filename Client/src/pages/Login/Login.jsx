
import { NavLink, useNavigate } from "react-router-dom"
import { useFormHook } from "../../hooks/useFormHook"
import './Login.css'
import { useDispatch } from "react-redux"
import { loginUser } from "../../actions/actions"
import { useAuth } from "../../hooks/useVerificationHook"
// import { useEffect } from "react"


export const Login = () => {

    const dispatch = useDispatch()
    const {login} = useAuth()
    const navigate = useNavigate()

    const initialForm = {
        email: '',
        password: ''
    }

    const { changeForm, email, password, handlerChange } = useFormHook(initialForm)

    const onSubmit = (event) => {
        event.preventDefault()

        if (!changeForm.email || !changeForm.password) {
            alert("contraseña y email vacios")
            return;
        }

        dispatch(loginUser(changeForm, login, navigate))
        
    }

    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     if (token) {
    //         console.log("Token encontrado, redirigiendo al home...");
    //         navigate("/home", {replace: true});
    //     }
    // }, [navigate]);

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor='email'>Email: </label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handlerChange}
                />
            </div>
            <div>
                <label htmlFor='password'>Password: </label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter you password"
                    value={password}
                    onChange={handlerChange}
                />
            </div>
            <NavLink to="/createUser">
                <button type="button">Create User</button>
            </NavLink>
            <button type="submit">Submit</button>
        </form>
    )
}
