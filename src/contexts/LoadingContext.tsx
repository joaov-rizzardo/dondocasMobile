import { createContext, ReactNode, useState } from "react";
import ScreenLoader from "../components/ScreenLoader";

type LoadingContextType = {
    loadings: {
        loginLoading: boolean
        bootstrapLoading: boolean
    }
    changeLoginLoading: (status:boolean) => void
    changeBootstrapLoading: (status:boolean) => void
}
const LoadingContext = createContext({} as LoadingContextType)

function LoadingProvider({children}: {children: ReactNode}){

    const [loadings, setLoadings] = useState({
        loginLoading: false,
        bootstrapLoading: false
    })

    function changeLoginLoading(status: boolean){
        setLoadings(prevState => {
            return {
                ...prevState,
                loginLoading: status
            }
        })
    }

    function changeBootstrapLoading(status: boolean){
        setLoadings(prevState => {
            return {
                ...prevState,
                bootstrapLoading: status
            }
        })
    }

    return (
        <LoadingContext.Provider value={{loadings, changeLoginLoading, changeBootstrapLoading}}>
                {children}
        </LoadingContext.Provider>
    )
}

export {LoadingProvider, LoadingContext}