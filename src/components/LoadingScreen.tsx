import { StyleSheet, View, Text} from "react-native"
import { mainColor } from "../configs/Colors"

export default () => {
    return (
        <View style={styles.container}>
            <Text>Dondocas</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: mainColor
    }
})