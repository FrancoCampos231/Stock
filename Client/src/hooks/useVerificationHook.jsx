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

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token);
    }, []);

    const login = (token) => {
        localStorage.setItem("token", token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
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
