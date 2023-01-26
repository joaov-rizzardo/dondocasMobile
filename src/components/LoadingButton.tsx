import { GestureResponderEvent, TouchableOpacity, View, StyleSheet, Text, ActivityIndicator} from "react-native"

type LoadingButtonType = {
    isLoading: boolean
    text: string
    backgroundColor: string
    fontColor: string
    pressFunction?: ((event: GestureResponderEvent) => void)
    width: string | number
}

export default ({width, backgroundColor, fontColor, text, isLoading, pressFunction}:LoadingButtonType) => {
    return (
        <View style={{width, backgroundColor, ...styles.button}}>
        {isLoading === true ? <ActivityIndicator size="small" color={fontColor}/> : (
            <TouchableOpacity  
                onPress={pressFunction}
                style={styles.button}
            >
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