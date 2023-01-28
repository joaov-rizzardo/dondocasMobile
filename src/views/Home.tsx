import { Text, View, StyleSheet, Button, ScrollView} from "react-native"
import ActionButton from "../components/ActionButton"
import HomeHeader from "../components/HomeHeader"
import { mainColor } from "../configs/Colors"

export default () => {
    return (
        <View style={styles.container}>
            <HomeHeader />
            <View style={styles.action}>
                <ScrollView 
                    style={{padding: 20,}} 
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false} 
                    snapToEnd={false}
                >
                    <ActionButton icon="attach-money" text="Vendas" />
                    <ActionButton icon="shopping-cart" text="Despesas" />
                    <ActionButton icon="shopping-basket" text="Produtos" />
                    <ActionButton icon="business-center" text="Fornecedor" />
                </ScrollView>
            </View>

            <View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    action: {
        height: 120,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    }
})