
import { NavLink } from "react-router-dom"
import { useFormHook } from "../../hooks/useFormHook"
import './Login.css'
import { useDispatch } from "react-redux"
import { loginUser } from "../../actions/actions"


export const Login = () => {

    const dispatch = useDispatch()

    const initialForm = {
        email: '',
        password: ''
    }

    const { changeForm, email, password, handlerChange } = useFormHook(initialForm)

    const onSubmit = (event) => {
        event.preventDefault()
        dispatch(loginUser(changeForm))
        
    }

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
                <label htmlFor='pasword'>Password: </label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter you password"
                    value={password}
                    onChange={handlerChange}
                />
            </div>
            <button>
                <NavLink to='/createUser'>
                    Create User
                </NavLink>
            </button>
            <button type="submit">Submit</button>
        </form>
    )
}
