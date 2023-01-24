import { useContext } from "react"
import { AuthContext } from "./contexts/AuthContext"

export default () => {

    const {authenticated} = useContext(AuthContext)

    return (
        authenticated === true ? <Routes /> : <Login />
    )
}