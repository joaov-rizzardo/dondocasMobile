import { ReactNode } from "react";
import { ActivityIndicator, View} from "react-native";
import { mainColor } from "../configs/Colors";

export default ({children, isLoading}: {children: ReactNode, isLoading: boolean}) => (
    <>
        {isLoading === true ? (
            <View  style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator color={mainColor} size="large"/>
            </View>
        ) : children}
    </>
)