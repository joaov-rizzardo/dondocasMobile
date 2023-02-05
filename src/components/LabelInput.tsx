import { View, Text, TextInputProps} from "react-native"
import { mainColor } from "../configs/Colors"
import IconInput from "./IconInput"

type Props = TextInputProps & {
    label: string 
    icon: string
    width: string
}
export default ({label, icon, value, width, ...props}: Props) => (
    <View>
        <Text style={{marginBottom: 2}}>{label}</Text>
        <IconInput color={mainColor} icon={icon} width={width} {...props}/>
    </View>
)
