import { View, Text, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"
import { mainColor } from "../configs/Colors";
import MoneyFormat from "../utils/MoneyFormat";

interface Props {
    title: string
    balance: number
    earnings: number
    spending: number
}

export default ({title, balance, earnings, spending}: Props) => (
    <View style={styles.container}>
        <Text style={{fontSize: 20, color: mainColor, marginBottom: 20}}>{title}</Text>
        <View style={styles.itemsContainer}>
            <View style={styles.item}>
                <Icon name="account-balance" color={mainColor} size={40}/>
                <Text>Saldo</Text>
                <Text>{MoneyFormat(balance)}</Text>
            </View>

            <View style={styles.item}>
                <Icon name="local-atm" color={mainColor} size={40} />
                <Text>Ganhos</Text>
                <Text>{MoneyFormat(earnings)}</Text>
            </View>

            <View style={styles.item}>
                <Icon name="payments" color={mainColor} size={40}/>
                <Text>Gastos</Text>
                <Text>{MoneyFormat(spending)}</Text>
            </View>

        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    itemsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    item: {
        alignItems: 'center',
        fontSize: 15
    }
})