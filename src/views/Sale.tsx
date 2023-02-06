import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { useContext, useState } from "react";
import { Text, View, StyleSheet, Switch, ScrollView} from "react-native";
import { TouchableOpacity } from "react-native";
import Icon  from "react-native-vector-icons/MaterialIcons";
import CustomDatePicker from "../components/CustomDatePicker";
import IconLoadingButton from "../components/IconLoadingButton";
import LabelInput from "../components/LabelInput";
import OptionPicker from "../components/OptionPicker";
import ProductList from "../components/ProductList";
import { mainColor } from "../configs/Colors";
import { BootstrapContext } from "../contexts/BootstrapContext";

export default () => {

    const { paymentForms } = useContext(BootstrapContext)

    const [state, setState] = useState(paymentForms[0].payment_key)

    const [checked, setChecked] = useState<boolean>(false)

    const [currentDate, setCurrentDate] = useState<Date>(new Date)

    return (
        <View style={{padding: 16, height: "100%"}}>
            <ScrollView>
                <View>
                    <Text style={styles.title}>Informações do cliente:</Text>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text>Não identificado</Text>
                        <Switch
                            style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                            value={checked}
                            trackColor={{ true: mainColor }}
                            thumbColor={mainColor}
                            onValueChange={value => setChecked(value)}
                        />
                    </View>

                    {checked === false && (
                        <>
                            <LabelInput
                                label="Nome do cliente:"
                                icon="user"
                                width="100%"
                            />
                            
                            <LabelInput
                                label="Telefone do cliente:"
                                icon="phone"
                                width="100%"
                            />
                        </>
                    )}

                </View>

                <View>
                    <Text style={styles.title}>Forma de pagamento:</Text>
                    <OptionPicker
                        value={state}
                        onChange={value => setState(value)}
                        options={paymentForms.map(form => ({ label: form.payment_description, value: form.payment_key }))}
                    />
                </View>
                <View>
                    <Text style={styles.title}>Data da venda:</Text>
                    <CustomDatePicker
                        value={currentDate}
                        customStyles={{ width: '50%' }}
                        onChange={(event: DateTimePickerEvent, value: Date) => {
                            setCurrentDate(value)
                        }}
                    />
                </View>

                <View style={{marginTop: 10}}>
                    <Text style={{...styles.title, marginRight: 20}}>Produtos:</Text>
                    <TouchableOpacity 
                        style={styles.productButton}
                    >
                        <Text style={{color: '#fff', marginRight: 10}}>Adicionar produto</Text>
                        <Icon name="add-shopping-cart" color="#fff" size={25}/>
                    </TouchableOpacity>
                    <ProductList />
                    <ProductList />
                    <ProductList />

                    <ProductList />
                    <ProductList />
                    <ProductList />
                    <ProductList />
                    <ProductList />
                    <ProductList />
                    <ProductList />

                    <ProductList />
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <View style={styles.total}>
                    <Text style={{color: mainColor, fontSize: 15, fontWeight: 'bold'}}>R$ 1580,50</Text>
                </View>
                <IconLoadingButton 
                    isLoading={false}
                    icon="check"
                    iconColor="#fff"
                    iconSize={35}
                    width={60}
                    height={60}
                    backgroundColor={mainColor}
                    loaderSize="large"
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: mainColor,
        marginBottom: 10,
    },
    footer: {
        position: 'absolute',
        width: '100%',
        bottom: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 10,
        flexDirection: 'row'
    },
    total: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: mainColor,
        height: 40, 
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%'
    },
    productButton: {
        width: '100%', 
        height: 40, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: mainColor,
        paddingHorizontal: 10,
        borderRadius: 20,
        marginBottom: 10
    }
})