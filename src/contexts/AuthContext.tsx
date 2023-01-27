
import React, { createContext } from 'react'
import useAuth from '../hooks/useAuth'
import { UserType } from '../types/UserType'

interface Props {
    children: React.ReactNode
}

interface ContextType {
    authenticated: boolean
    handleLogin: (identification: string, password: string) => Promise<boolean>,
    handleLogout: () => Promise<void>
    user: UserType | undefined
    loading: boolean
}

const AuthContext = createContext({} as ContextType)

function AuthProvider({children}: Props){

    const {authenticated, handleLogin, handleLogout, user, loading} = useAuth();

    return (
        <AuthContext.Provider value={{authenticated, handleLogin, handleLogout, user, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}