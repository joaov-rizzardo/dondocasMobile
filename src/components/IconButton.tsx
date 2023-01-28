import { View, StyleSheet, TouchableOpacity, GestureResponderEvent} from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"

type IconButtonType = {
    icon: string
    size: number
    iconColor: string
    backgroundColor: string
    pressFunction?: ((event: GestureResponderEvent) => void)
}


export default ({icon, backgroundColor, pressFunction, size, iconColor}: IconButtonType) => (
    <View style={{width: size, height: size, borderRadius: size/2 ,backgroundColor}}>
        <TouchableOpacity  
            onPress={pressFunction}
            style={{width: size, height: size, ...styles.button}}
        >
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