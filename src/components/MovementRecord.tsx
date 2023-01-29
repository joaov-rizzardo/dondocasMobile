import { View, Text, TouchableOpacity, StyleSheet} from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { mainColor } from "../configs/Colors"
import MoneyFormat from "../utils/MoneyFormat"

interface Props {
    type: "E" | "S"
    date: string
    typeDescription: string
    value: number
}
export default ({type, date, typeDescription, value}: Props) => (
    <TouchableOpacity style={styles.container}>
        <View style={styles.movementIcon}>
            <Icon name={type === "E" ? "north" : "south"} size={30} color={type === "E" ? "green" : "red"}/>
        </View>
        
        <View style={{flex: .9, justifyContent: 'space-between'}}>
            <Text><Text style={styles.highlightText}>Data:</Text> {date}</Text>
            <Text><Text style={styles.highlightText}>Tipo:</Text> {typeDescription}</Text>
            <Text><Text style={styles.highlightText}>Valor:</Text> {MoneyFormat(value)}</Text>
        </View>

        <Icon name="navigate-next" size={25} color={mainColor}/>

    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    movementIcon : {
        width: 50, 
        height: 50, 
        borderRadius: 25, 
        backgroundColor: '#ece7e7', 
        justifyContent: 'center', 
        alignItems: 'center',
        marginRight: 20
    },
    highlightText: {
        color: mainColor,
        fontWeight: 'bold'
    }
})