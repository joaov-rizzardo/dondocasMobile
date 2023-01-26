import { StyleSheet, TextInput, View } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"

type IconInputType  = {
    color: string
    icon: string
    placeholder?: string
    width: string
    value?: string
    secureTextEntry?: boolean
    changeFunction?: ((text: string) => void)
}

export default ({color, icon, placeholder, width, value, changeFunction, secureTextEntry}: IconInputType) => {
    return (
        <View style={{width: width, borderColor: color, ...styles.container}}>
            <Icon name={icon} color={color} size={20} />
            <TextInput 
                placeholder={placeholder}
                value={value}
                onChangeText={changeFunction}
                secureTextEntry={secureTextEntry} 
                style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderWidth: 1,
        alignItems: "center",
        height: 40,
        marginBottom: 10,
        borderRadius: 20,
        padding: 10,
    },
    input: {
        width: "100%",
        marginLeft: 10
    }

})