import { TouchableOpacity, View, Text, StyleSheet, StyleProp, TextStyle} from "react-native"
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useState } from "react";
import { mainColor } from "../configs/Colors";
import moment from "moment";
import  Icon  from "react-native-vector-icons/MaterialIcons";

interface Props {
    value: Date
    onChange: (event: DateTimePickerEvent, value: Date) => void
    customStyles?: StyleProp<TextStyle>
}
export default ({value, onChange, customStyles} : Props) => {
    
    const [opened, setOpened] = useState<boolean>(false)

    const formattedDate = moment(value).locale('pt-br').format('DD/MM/YYYY')

    return (
        <View>
            <TouchableOpacity style={[styles.input, customStyles]} onPress={() => setOpened(true)}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text>{formattedDate}</Text>
                    <Icon name="date-range" color={mainColor} size={20}/>
                </View>
                
            </TouchableOpacity>
            {opened === true && 
                <DateTimePicker
                    value={value}
                    onChange={(event, value) => {
                        setOpened(false)
                        onChange(event, value!)
                    }}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: "100%", 
        padding: 10, 
        borderWidth: 1, 
        borderColor: mainColor, 
        height: 40,
        marginBottom: 10,
        borderRadius: 20,
    }
})