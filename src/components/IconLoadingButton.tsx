import { TouchableOpacity, View, StyleSheet, Text, ActivityIndicator, TouchableOpacityProps} from "react-native"
import  Icon  from "react-native-vector-icons/MaterialIcons"

type LoadingButtonType = TouchableOpacityProps & {
    isLoading: boolean
    icon: string
    iconColor: string
    iconSize: number
    width: number
    height: number
    backgroundColor: string
    loaderSize: 'large' | 'small'
}

export default ({loaderSize, width, height, iconColor, iconSize, icon, isLoading, backgroundColor, ...props}:LoadingButtonType) => {
    return (
        <View style={
                {
                    width, 
                    height, 
                    borderRadius: width/2, 
                    backgroundColor,
                    justifyContent: 'center',
                    alignItems: 'center'
                }
            }
        >
        {isLoading === true ? <ActivityIndicator size={loaderSize} color={iconColor}/> : (
            <TouchableOpacity  
                style={
                    {
                        width,
                         height, 
                         borderRadius: width/2, 
                         backgroundColor,
                         justifyContent: 'center',
                         alignItems: 'center'
                        }
                    } 
                {...props}
            >
                <Icon name={icon} color={iconColor} size={iconSize}/>
            </TouchableOpacity>
        )}
        </View>
    )
}
