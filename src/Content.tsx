import { useContext, useEffect } from "react"
import { AuthContext } from "./contexts/AuthContext"
import { BootstrapProvider } from "./contexts/BootstrapContext"
import { LoadingContext } from "./contexts/LoadingContext"
import Routes from "./Routes"
import Login from "./views/Login"

export default () => {

    const { changeLoginLoading } = useContext(LoadingContext)
    const {authenticated, loading} = useContext(AuthContext)

    useEffect(() => {
        changeLoginLoading(loading)
    }, [loading])

    if(authenticated === false) {
        return <Login />
    }

    return (
        <BootstrapProvider>
            <Routes />
        </BootstrapProvider>
        
    )
}