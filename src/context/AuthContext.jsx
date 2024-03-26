import React, { createContext, useState, useEffect, useContext } from 'react';
import { login_url } from '../config';
import hash from '../hash';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const _token = hash.access_token;
        if (_token) {
            setToken(_token);
        }
    }, []);

    const handleLogin = () => {
        window.location.replace(login_url);
    };

    return (
        <AuthContext.Provider value={{ token, handleLogin }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

