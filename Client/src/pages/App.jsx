import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Login} from "../pages/Login/Login"
import { CreateUser } from "./CreateUser/CreateUser"
import { Home } from "./Home/Home"
import PrivateRoute from "../components/PrivateRoute"

export const App = () => {
    return (
        <>
            <Navbar>Navigator</Navbar>
            <Routes>
                <Route path="/login" element={<Login></Login>}>Login</Route>
                <Route path="/createUser" element={<CreateUser></CreateUser>}>Create User</Route>
                <Route element={<PrivateRoute/>}>
                    <Route path="/home" element={<Home></Home>}></Route>
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}
