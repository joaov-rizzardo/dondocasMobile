import { View, StyleSheet, Text, TouchableOpacity} from "react-native"
import  Icon  from "react-native-vector-icons/MaterialIcons"
import { mainColor } from "../configs/Colors"

export default () => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.icon}>
                <Icon name="shopping-basket" color={mainColor} size={40}/>
            </View>
            
            <View>
                <Text>Sandália salto bloco</Text>
                <Text>Verde</Text>
                <Text>37</Text>
                <Text>1 unidade(s)</Text>
            </View>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 20, color: mainColor}}>R$ 40,00</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 100,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    icon: {
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#ece7e7',
        width: 60,
        height: 60,
        borderRadius: 30
    }
})