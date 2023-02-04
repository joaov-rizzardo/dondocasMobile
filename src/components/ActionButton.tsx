import { GestureResponderEvent, View, Text, TouchableOpacityProps} from "react-native"
import { mainColor } from "../configs/Colors"
import IconButton from "./IconButton"

type Props = TouchableOpacityProps & {
    icon: string
    text: string
}

export default ({icon, text, ...props}: Props) => (
    <View style={{alignItems: "center", marginRight: 20, width: 75}}>
        <IconButton
            size={60}
            iconColor={mainColor}
            icon={icon}
            backgroundColor="#ece7e7"
            {...props}
        />
        <Text>{text}</Text>
    </View>
)