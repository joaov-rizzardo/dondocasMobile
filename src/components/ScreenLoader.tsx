import { ReactNode, useContext } from "react"
import AnimatedSplash from "react-native-animated-splash-screen"
import { mainColor } from "../configs/Colors"
import { LoadingContext } from "../contexts/LoadingContext"

export default ({ children}: {children: ReactNode}) => {

    const {loadings} = useContext(LoadingContext)

    const arrLoadings = Object.values(loadings)

    const isLoading = arrLoadings.reduce((carry: boolean, currentValue: boolean) => {
        if(currentValue === true){
            carry = true
        }
        return carry
    }, false)
    
    const loading = isLoading === true ? false : true

    return (
        <AnimatedSplash
            isLoaded={loading}
            backgroundColor={mainColor}
            logoImage={require('../assets/logo.png')}
            logoWidth={300}
            logoHeight={300}
        >
            {children}
        </AnimatedSplash>
    )
}