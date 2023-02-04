import { useContext } from "react"
import { View, StyleSheet, Text, Button} from "react-native"
import { mainColor } from "../configs/Colors"
import { AuthContext } from "../contexts/AuthContext"

export default () => {

    const {handleLogout} = useContext(AuthContext)
    
    return (
        <View>
            <Text>Tem certeza que deseja sair?</Text>
            <View style={styles.buttonsContainer}>
                <View style={styles.button}>
                    <Button onPress={handleLogout} color={mainColor} title="Sim" />
                </View>
                
                <View style={styles.button}>
                    <Button color={mainColor} title="Não" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center"
    },
    button: {
        width: "45%",
        marginLeft: 5,
        marginRight: 5
    }
})