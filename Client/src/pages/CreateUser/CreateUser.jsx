import { NavLink } from "react-router-dom"
import { useFormHook } from "../../hooks/useFormHook"
import { postUser } from "../../actions/actions";
import { useDispatch} from "react-redux";

export const CreateUser = () => {

    const dispatch = useDispatch()


    const initialForm = {
        name: '',
        email: '',
        password: '',
    }

    const { changeForm, name, email, password, handlerChange } = useFormHook(initialForm)

    const onSubmit = (event) => {
        event.preventDefault()
        dispatch(postUser(changeForm))
    }



    return (
        <>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name..."
                    value={name}
                    onChange={handlerChange} />
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter email..."
                    value={email}
                    onChange={handlerChange}
                />
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter password..."
                    value={password}
                    onChange={handlerChange} />
                <button>
                    <NavLink to='/'>
                        Login
                    </NavLink>
                </button>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
