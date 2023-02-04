import { View, StyleSheet, TouchableOpacity, GestureResponderEvent, TouchableOpacityProps} from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"

type IconButtonType = TouchableOpacityProps & {
    icon: string
    size: number
    iconColor: string
    backgroundColor: string
    pressFunction?: ((event: GestureResponderEvent) => void)
}


export default ({icon, backgroundColor, size, iconColor, ...props}: IconButtonType) => (
    <View style={{width: size, height: size, borderRadius: size/2 ,backgroundColor}}>
        <TouchableOpacity style={{width: size, height: size, ...styles.button}} {...props}>
            <Icon size={size/2} name={icon} color={iconColor} />
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center'
    },
})