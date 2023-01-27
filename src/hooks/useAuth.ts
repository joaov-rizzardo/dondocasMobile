import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import backendApi from "../services/backendApi";
import { UserType } from "../types/UserType";

interface AuthenticateResponse {
    authenticated: boolean
    user: UserType
    token: string
}

export default function useAuth(){

    const [user, setUser] = useState<UserType>({})

    const [authenticated, setAuthenticated] = useState<boolean>(false)

    const [loading, setLoading] = useState<boolean>(false)

    function handleUnauthenticated(){
        setAuthenticated(false)
        setUser({})
    }

    function handleAuthenticated(token: string, user: UserType){
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
        setLoading(true)
        handleVerifyToken().then(() => setLoading(false))
    }, [])

    async function handleLogin(identification: string, password: string): Promise<boolean>{

        try{
            const {data: {authenticated, user, token}} = await backendApi.post<AuthenticateResponse>('/user/authenticate', {
               identification: identification,
               password: password
            })

            if(authenticated === true){
                handleAuthenticated(token, user)
                return true
            }

            handleUnauthenticated()
            return false
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
    
    return {handleLogin, handleLogout, user, authenticated, loading}
}