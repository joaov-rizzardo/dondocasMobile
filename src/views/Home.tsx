import { Text, View, StyleSheet, Button, ScrollView} from "react-native"
import ActionButton from "../components/ActionButton"
import Balance from "../components/Balance"
import HomeHeader from "../components/HomeHeader"
import MovementRecord from "../components/MovementRecord"
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
                >
                    <ActionButton icon="attach-money" text="Vendas" />
                    <ActionButton icon="shopping-cart" text="Despesas" />
                    <ActionButton icon="shopping-basket" text="Produtos" />
                    <ActionButton icon="business-center" text="Fornecedor" />
                </ScrollView>
            </View>
            <ScrollView 
                showsVerticalScrollIndicator={false} 
            >   
                <Balance title="Balanço Mensal:" balance={55.12} earnings={201.54} spending={155.79}/>

                <View style={{padding: 16}}>
                        <Text style={{fontSize: 20, color: mainColor}}>Ultimas Movimentações:</Text>
                </View>

                <MovementRecord type="E" date="28/01/2023 20:15:47" typeDescription="Venda" value={23.52}/>
                <MovementRecord type="S" date="28/01/2023 21:15:47" typeDescription="Compra" value={45.93}/>
                <MovementRecord type="S" date="28/01/2023 19:15:47" typeDescription="Compra" value={97.34}/>
            </ScrollView>
            
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