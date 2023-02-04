import { StyleSheet, TextInput, TextInputProps, View } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"

type IconInputType  = TextInputProps & {
    color: string
    icon: string
    width: string
}

export default ({color, icon, width, ...props}: IconInputType) => {
    return (
        <View style={{width: width, borderColor: color, ...styles.container}}>
            <Icon name={icon} color={color} size={20} />
            <TextInput style={styles.input} {...props}/>
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