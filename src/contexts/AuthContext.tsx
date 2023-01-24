
import React, { createContext } from 'react'
import useAuth, { User } from '../hooks/useAuth'

interface Props {
    children: React.ReactNode
}

interface ContextType {
    authenticated?: boolean
    handleLogin?: (identification: string, password: string) => void,
    handleLogout?: () => void
    user?: User
}

const AuthContext = createContext<ContextType>({})

function AuthProvider({children}: Props){

    const {authenticated, handleLogin, handleLogout, user} = useAuth();

    return (
        <AuthContext.Provider value={{authenticated, handleLogin, handleLogout, user}}>
            {children}
        </AuthContext.Provider>
    )
    
}

export {AuthContext, AuthProvider}