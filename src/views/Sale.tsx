import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { useContext, useState } from "react";
import { Text, View, StyleSheet, Switch, ScrollView} from "react-native";
import CustomDatePicker from "../components/CustomDatePicker";
import IconLoadingButton from "../components/IconLoadingButton";
import LabelInput from "../components/LabelInput";
import LoadingButton from "../components/LoadingButton";
import OptionPicker from "../components/OptionPicker";
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
            </ScrollView>

            <View style={styles.footer}>
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
        bottom: 50,
        right: 20    
    }
})