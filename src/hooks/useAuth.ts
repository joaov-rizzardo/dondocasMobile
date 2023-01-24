import { AxiosResponse } from 'axios';
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import backendApi from "../services/backendApi";

export interface User {
    user_key?: number
    user_identification?: string
    user_name?: string
    user_profile?: string
    user_status?: "A" | "I"
    profile_description?: string
    profile_level?: number
}

interface AuthenticateResponse {
    authenticated: boolean
    user: User
    token: string
}

export default function useAuth(){

    const [user, setUser] = useState<User>({})

    const [authenticated, setAuthenticated] = useState<boolean>(false)

    function handleUnauthenticated(){
        setAuthenticated(false)
        setUser({})
    }

    function handleAuthenticated(token: string, user: User){
        setAuthenticated(true)
        setUser(user)
        AsyncStorage.setItem('token', JSON.stringify(token))
    }

    useEffect(() => {

        const handleVerifyToken = async () => {

            try {
                const storagedToken = await AsyncStorage.getItem('token')

                if(storagedToken === null){
                    handleUnauthenticated()
                    return false
                }
 
                const {data: {authenticated, user, token}} = await backendApi.post<AuthenticateResponse>('user/authenticate', {
                    token: JSON.parse(storagedToken)
                })

                if(authenticated === true){
                    handleAuthenticated(token, user)
                    return true
                }

                handleUnauthenticated()

            }catch(error){
                handleUnauthenticated()
                console.log(error)
                return false
            }
        }

        handleVerifyToken()
    }, [])

    async function handleLogin(identification: string, password: string){
        try{
            const {data: {authenticated, user, token}} = await backendApi.post<AuthenticateResponse>('user/authenticate', {
               identification: identification,
               password: password
            })

            if(authenticated === true){
                handleAuthenticated(token, user)
                return true
            }

            handleUnauthenticated()

        }catch(error){
            handleUnauthenticated()
            console.log(error)
            return false
        }
    }

    async function handleLogout(){
        handleUnauthenticated()
        AsyncStorage.removeItem('token')
    }
    
    return {handleLogin, handleLogout, user, authenticated}
}