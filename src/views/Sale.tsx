import { useContext, useState } from "react";
import { Text, View, StyleSheet} from "react-native";
import LabelInput from "../components/LabelInput";
import OptionPicker from "../components/OptionPicker";
import { mainColor } from "../configs/Colors";
import { BootstrapContext } from "../contexts/BootstrapContext";

export default () => {

    const {paymentForms} = useContext(BootstrapContext)

    const [state, setState] = useState(paymentForms[0].payment_key)
    
    return (
        <View>
            <View>
                <Text style={styles.title}>Informações do cliente:</Text>
                <LabelInput label="Nome do cliente:" icon="user"/>
                <LabelInput label="Telefone do cliente:" icon="phone"/>
            </View>

            <View>
                <Text style={styles.title}>Forma de pagamento:</Text>
                <OptionPicker 
                    value={state} 
                    onChange={value => setState(value)}
                    options={paymentForms.map(form => ({label: form.payment_description, value: form.payment_key}))}
                />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: mainColor,
        marginBottom: 10
    }
})