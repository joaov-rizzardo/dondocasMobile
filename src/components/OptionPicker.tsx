import { useState } from "react"
import { TouchableOpacity, View, Text, Modal, StyleSheet, ScrollView} from "react-native"
import Icon  from "react-native-vector-icons/MaterialIcons"
import { mainColor } from "../configs/Colors"
import IconButton from "./IconButton"

type OptionType = {
    label: string
    value: any
}
interface Props {
    value: any
    options: OptionType[]
    onChange: (text: any) => void
    title?: string
}
export default ({value, options, onChange, title}: Props) => {

    const [openedPicker, setOpenedPicker] = useState<boolean>(false)

    function toggleModal(){
        setOpenedPicker(prevState => !prevState)
    }

    const selectedOption = options.find(option => option.value === value)

    return (
        <View>

           <TouchableOpacity style={defaultStyle.picker} onPress={toggleModal}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text>{selectedOption!.label}</Text>
                    <Icon name="expand-more" color="#00" size={20} />
                </View>
                
           </TouchableOpacity>

           <Modal
                animationType="slide"
                transparent={true}
                visible={openedPicker}
                onRequestClose={toggleModal}
           >
            <View style={defaultStyle.modalContainer}>
                <View style={defaultStyle.header}>
                    <Text style={defaultStyle.title}>{title ?? 'Escolha uma opção:'}</Text>
                    <IconButton 
                        size={50} 
                        icon="close" 
                        iconColor="#000" 
                        backgroundColor="transparent"
                        onPress={toggleModal}
                    />
                </View>
                <ScrollView>
                    {options.map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            style={defaultStyle.optionContainer}
                            onPress={() => {
                                toggleModal();
                                onChange(option.value)
                            }}
                        >
                            <Text>{option.label}</Text>
                            <View style={defaultStyle.radio}>
                                {option.value === value && <View style={defaultStyle.checked}></View>}
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            
           </Modal>
        </View>
    )
}

const defaultStyle = StyleSheet.create({
    picker: {
        width: "100%", 
        padding: 10, 
        borderWidth: 1, 
        borderColor: mainColor, 
        height: 40,
        marginBottom: 10,
        borderRadius: 20,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 4
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 8,
        paddingVertical: 10
    },
    title: {
        fontSize: 20,
        color: mainColor
    },
    optionContainer: {
        paddingVertical: 20,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    radio: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center'
    },
    checked: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: mainColor
    }
})