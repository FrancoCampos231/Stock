
import { formHook } from "../hooks/FormHook"


export const Login = () => {

    const initialForm = {
        email: '',
        password: ''
    }

    const {changeForm, email , password, handlerChange } = formHook(initialForm)

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(changeForm)
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
            <button>Create User</button>
            <button>Submit</button>
        </form>
    )
}
