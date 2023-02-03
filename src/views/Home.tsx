import { ReactNode, useEffect, useState } from "react"
import { Text, View, StyleSheet, ScrollView, Modal} from "react-native"
import ActionButton from "../components/ActionButton"
import Balance from "../components/Balance"
import HomeHeader from "../components/HomeHeader"
import MovementRecord from "../components/MovementRecord"
import ScreenModal from "../components/ScreenModal"
import SpinnerScreenLoader from "../components/SpinnerScreenLoader"
import { mainColor } from "../configs/Colors"
import backendApi from "../services/backendApi"
import { MovementType } from "../types/MovementType"
import { formatDateToBR, getCurrentMonth, getCurrentMonthDateRange, getCurrentYear } from "../utils/DateFunction"

export default () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [earnings, setEarning] = useState<number>(0)
    const [spendings, setSpendings] = useState<number>(0)
    const [lastMovements, setLastMovements] = useState<MovementType[]>([])
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const [modalContent, setModalContent] = useState<ReactNode | null>(null)
    
    function showModal(){
        setModalVisible(true)
    }

    function hideModal(){
        setModalVisible(false)
    }
    useEffect(() => {
        setIsLoading(true)
        Promise.all([getEarnings(), getSpendings(), getLastMovements()]).then(() => setIsLoading(false))
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

    const getLastMovements = async () => {
        try {
            const {data} = await backendApi.get<MovementType[]>('movement/lastMovements')
            setLastMovements(data)
        }catch(error){
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <ScreenModal visible={modalVisible} closeFunction={hideModal} icon="close">
                {modalContent}
            </ScreenModal>
            <HomeHeader />
            <View style={styles.action}>
                <ScrollView 
                    style={{padding: 20,}} 
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false} 
                >
                    <ActionButton icon="attach-money" text="Vendas" pressFunction={showModal}/>
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

                    {lastMovements.map((movement, index) => (
                        <MovementRecord 
                            key={index} 
                            type={movement.movementDirection} 
                            date={formatDateToBR(movement.date)} 
                            typeDescription={movement.typeDescription} 
                            value={movement.value}/>
                    ))}
                    
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