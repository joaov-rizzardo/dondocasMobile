import { useContext } from "react"
import { AuthContext } from "./contexts/AuthContext"
import Routes from "./Routes"
import Login from "./views/Login"

export default () => {

    const {authenticated} = useContext(AuthContext)
    
    return (
        authenticated === true ? <Routes /> : <Login />
    )
}