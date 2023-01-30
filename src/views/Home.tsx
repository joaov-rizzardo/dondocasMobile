import { useEffect, useState } from "react"
import { Text, View, StyleSheet, ScrollView} from "react-native"
import ActionButton from "../components/ActionButton"
import Balance from "../components/Balance"
import HomeHeader from "../components/HomeHeader"
import MovementRecord from "../components/MovementRecord"
import SpinnerScreenLoader from "../components/SpinnerScreenLoader"
import { mainColor } from "../configs/Colors"
import backendApi from "../services/backendApi"
import { getCurrentMonth, getCurrentMonthDateRange, getCurrentYear } from "../utils/DateFunction"

export default () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [earnings, setEarning] = useState<number>(0)
    const [spendings, setSpendings] = useState<number>(0)
    
    useEffect(() => {
        setIsLoading(true)
        Promise.all([getEarnings(), getSpendings()]).then(() => setIsLoading(false))
    }, [])

    const getEarnings = async () => {
        const {startDate, finishDate} = getCurrentMonthDateRange()
        try {
            const {data: {totalAmount}} = await backendApi.post<{totalAmount: number}>('sale/totalSalePerPeriod', {startDate, finishDate})
            setEarning(totalAmount)
        }catch(error){
            console.log(error)
        }
    }

    const getSpendings = async () => {
        try {
            const month = getCurrentMonth()
            const year = getCurrentYear()
            const {data: {totalAmount}} = await backendApi.get<{totalAmount: number}>(`expense/expensePerMonth/${year}/${month}`)
            setSpendings(totalAmount)
        }catch(error){
            console.log(error)
        }
    }

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
            <SpinnerScreenLoader isLoading={isLoading}>
                <ScrollView 
                    showsVerticalScrollIndicator={false} 
                >   
                    <Balance title="Balanço Mensal:" balance={(earnings - spendings)} earnings={earnings} spending={spendings}/>

                    <View style={{padding: 16}}>
                            <Text style={{fontSize: 20, color: mainColor}}>Ultimas Movimentações:</Text>
                    </View>

                    <MovementRecord type="E" date="28/01/2023 20:15:47" typeDescription="Venda" value={23.52}/>
                    <MovementRecord type="S" date="28/01/2023 21:15:47" typeDescription="Compra" value={45.93}/>
                    <MovementRecord type="S" date="28/01/2023 19:15:47" typeDescription="Compra" value={97.34}/>
                </ScrollView>
            </SpinnerScreenLoader>

            
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