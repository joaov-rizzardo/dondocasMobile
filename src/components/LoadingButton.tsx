import { GestureResponderEvent, TouchableOpacity, View, StyleSheet, Text, ActivityIndicator, TouchableOpacityProps} from "react-native"

type LoadingButtonType = TouchableOpacityProps & {
    isLoading: boolean
    text: string
    backgroundColor: string
    fontColor: string
    width: string | number
}

export default ({width, backgroundColor, fontColor, text, isLoading, ...props}:LoadingButtonType) => {
    return (
        <View style={{width, backgroundColor, ...styles.button}}>
        {isLoading === true ? <ActivityIndicator size="small" color={fontColor}/> : (
            <TouchableOpacity  style={styles.button} {...props}>
                <Text style={{color: fontColor}}>{text}</Text>
            </TouchableOpacity>
        )}
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
})