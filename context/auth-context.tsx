'use client'

import React, {createContext} from "react";

interface AuthContextProviderProps {
    children: React.ReactNode,
    isAuthenticated: boolean
}

export const AuthContext = createContext(false);

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({children, isAuthenticated}) => {
    return (
        <AuthContext.Provider value={isAuthenticated}>
            {children}
        </AuthContext.Provider>
    )
};