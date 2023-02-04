import { View, Text, TextInputProps} from "react-native"
import { mainColor } from "../configs/Colors"
import IconInput from "./IconInput"

type Props = TextInputProps & {
    label: string 
    icon: string
}
export default ({label, icon, value, ...props}: Props) => (
    <View>
        <Text style={{marginBottom: 2}}>{label}</Text>
        <IconInput color={mainColor} icon={icon} width="100%" {...props}/>
    </View>
)
