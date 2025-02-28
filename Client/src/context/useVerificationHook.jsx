// import { useState, useEffect } from "react";

// export const useAuth = () => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     useEffect(() => {
//         const token = localStorage.getItem("token");
//         setIsAuthenticated(!!token); // Si hay token, está autenticado
//     }, []);

//     const login = (token) => {
//         localStorage.setItem("token", token);
//         setIsAuthenticated(true);
//     };

//     const logout = () => {
//         localStorage.removeItem("token");
//         setIsAuthenticated(false);
//     };

//     return { isAuthenticated, login, logout };
// };

import PropTypes from "prop-types"; // Importar PropTypes
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isRole, setIsRole] = useState({masterUSer: false, superUser: false})

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token) {
            const role = JSON.parse(localStorage.getItem("isRole"))
            setIsAuthenticated(true);
            setIsRole(role || {masterUSer: false, superUser: false})
        }
    }, []);

    const login = (token, masterUSer, superUser) => {
        localStorage.setItem("token", token);
        localStorage.setItem("isRole", JSON.stringify({masterUSer, superUser}))
        setIsAuthenticated(true);
        setIsRole({masterUSer, superUser})
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("isRole")
        setIsAuthenticated(false);
        setIsRole({masterUSer: false, superUser: false})
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, isRole, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Validación de props con PropTypes
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired, // Asegura que children es requerido y de tipo "nodo" (elementos JSX)
};

// Hook para usar el contexto
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
