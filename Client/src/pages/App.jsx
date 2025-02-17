import { Route, Routes } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Login} from "../pages/Login/Login"
import { CreateUser } from "./CreateUser/CreateUser"

export const App = () => {
    return (
        <>
            <Navbar>Navigator</Navbar>
            <Routes>
                <Route path="/" element={<Login></Login>}>Login</Route>
                <Route path="/createUser" element={<CreateUser></CreateUser>}>Create User</Route>
            </Routes>
        </>
    )
}
