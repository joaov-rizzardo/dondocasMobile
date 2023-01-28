import { GestureResponderEvent, View, Text} from "react-native"
import { mainColor } from "../configs/Colors"
import IconButton from "./IconButton"

interface Props {
    icon: string
    text: string
    pressFunction?: ((event: GestureResponderEvent) => void)
}

export default ({icon, text, pressFunction}: Props) => (
    <View style={{alignItems: "center", marginRight: 20, width: 75}}>
        <IconButton
            size={60}
            iconColor={mainColor}
            icon={icon}
            backgroundColor="#ece7e7"
            pressFunction={pressFunction}
        />
        <Text>{text}</Text>
    </View>
)