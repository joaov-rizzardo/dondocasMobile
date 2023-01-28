import { ReactNode, useContext, useEffect, useRef, useState } from "react"
import { Animated, View, StyleSheet, ImageSourcePropType } from "react-native"
import { LoadingContext } from "../contexts/LoadingContext"


type ScreenLoaderType = {
    children: ReactNode
    backgroundColor: string
    logoImage: ImageSourcePropType
    logoWidth: number
    logoHeight: number
}

function verifyLoadingStatus(loadings: boolean[]){
    return loadings.reduce((carry: boolean, currentValue: boolean) => {
        if(currentValue === true){
            carry = true
        }
        return carry
    }, false)
}

export default ({children, backgroundColor, logoImage, logoWidth, logoHeight}: ScreenLoaderType) => {

    const {loadings} = useContext(LoadingContext)

    const [isLoading, setIsLoading] = useState<boolean | null>(null)

    const animation = useRef(new Animated.Value(0))

    useEffect(() => {
        
        const loadingStatus = verifyLoadingStatus(Object.values(loadings))

        if(loadingStatus === true){
            setIsLoading(true)
        }

        if(loadingStatus === false && isLoading === true){
            Animated.timing(animation.current, {
                toValue: 100,
                duration: 2000,
                useNativeDriver: true,
            }).start(() => {
                animation.current = new Animated.Value(0)
                setIsLoading(false)
            })
        }
    }, [loadings])

    

    const opacityClearToVisible = {
        opacity: animation.current.interpolate({
          inputRange: [0, 15, 30],
          outputRange: [0, 0, 1],
          extrapolate: "clamp",
        }),
    }

    const imageScale = {
        transform: [
          {
            scale: animation.current.interpolate({
              inputRange: [0, 10, 100],
              outputRange: [1, 1, 65],
            }),
          },
        ],
    }
  
    const logoScale = {
        transform: [
          {
            scale: animation.current.interpolate({
              inputRange: [0, 10, 100],
              outputRange: [1, 0.8, 10],
            }),
          },
        ],
    }
  
    const logoOpacity = {
        opacity: animation.current.interpolate({
          inputRange: [0, 20, 100],
          outputRange: [1, 0, 0],
          extrapolate: "clamp",
        }),
    }
  
    const appScale = {
        transform: [
          {
            scale: animation.current.interpolate({
              inputRange: [0, 7, 100],
              outputRange: [1.1, 1.05, 1],
            }),
          },
        ],
    }

    return (
        <View style={styles.container}>

            <View style={styles.containerGlue}>

                <Animated.View style={[appScale, opacityClearToVisible, styles.flex]}>
                    {children}
                </Animated.View>
                
                {isLoading === true && (
                    <Animated.Image
                        resizeMode="cover"
                        source={require("../assets/background.png")}
                        style={[ imageScale, logoOpacity, StyleSheet.absoluteFill,
                            {
                                top: 0,
                                alignItems: "center",
                                justifyContent: "center",
                                tintColor: backgroundColor,
                            },
                        ]}
                    />
                )}

                {isLoading === true && (
                    <View style={[StyleSheet.absoluteFill, styles.logoStyle]}>
                        <Animated.Image
                            source={logoImage}
                            resizeMode={"contain"}
                            style={[{ width: logoWidth, height: logoHeight}, logoScale, logoOpacity]}
                        />
                    </View>
                )}

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerGlue: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    },
    flex: {
        flex: 1,
    },
    logoStyle: {
        alignItems: "center",
        justifyContent: "center",
    }
})