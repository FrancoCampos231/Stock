import { NavLink} from "react-router-dom"

export const Navbar = () => {
    return (
        <>
            <h1>Navbar</h1>
            <nav>
                <NavLink to='/'>Login</NavLink>
            </nav>
        </>
    )
}
