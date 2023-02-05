import { ReactNode } from "react"
import { Modal, View, StyleSheet} from "react-native"
import IconButton from "./IconButton"

interface Props {
    children: ReactNode | null
    visible: boolean
    closeFunction: () => void
    icon: string
}
export default ({children, visible, closeFunction, icon}: Props) => {
    return (
        <Modal
            animationType="fade"
            visible={visible}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <IconButton 
                        size={50} 
                        icon={icon} 
                        iconColor="#000" 
                        backgroundColor="transparent"
                        onPress={closeFunction}
                    />
                </View>

                <View>
                    {children}
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 40
    }
})