import { Navigate, Route, Routes } from "react-router-dom"
import { Login} from "../pages/Login/Login"
import { CreateUser } from "./CreateUser/CreateUser"
import { Home } from "./Home/Home"
import PrivateRoute from "../components/PrivateRoute"
import { AuthProvider } from "../context/useVerificationHook"

export const App = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/login" element={<Login></Login>}>Login</Route>
                <Route path="/createUser" element={<CreateUser></CreateUser>}>Create User</Route>
                <Route element={<PrivateRoute/>}>
                    <Route path="/home" element={<Home></Home>}></Route>
                </Route>
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </AuthProvider>
    )
}
