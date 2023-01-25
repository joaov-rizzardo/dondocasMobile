import { ReactNode } from "react"
import { ImageSourcePropType } from "react-native"

type AnimatedSplashType = {
    isLoaded: boolean
    backgroundColor?: string
    logoImage?: ImageSourcePropType
    logoWidth?: number
    logoHeight?: number
    children?: ReactNode
    preload?: boolean
    disableBackgroundImage?: boolean
    translucent?: boolean
    customComponent?: ReactNode
}


declare function AnimatedSplash(props: AnimatedSplashType)
export = AnimatedSplash

