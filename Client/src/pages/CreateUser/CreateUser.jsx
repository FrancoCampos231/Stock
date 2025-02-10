import { NavLink } from "react-router-dom"
import { formHook } from "../../hooks/FormHook"

export const CreateUser = () => {

    const initialForm = {
        name: '',
        email: '',
        password: ''
    }

    const { changeForm, name, email, password, handlerChange } = formHook(initialForm)

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(changeForm)
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
                <button>Submit</button>
            </form>
        </>
    )
}
