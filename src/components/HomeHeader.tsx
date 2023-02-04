import {useContext} from 'react'
import { View, StyleSheet, Text} from "react-native"
import { mainColor } from "../configs/Colors"
import { AuthContext } from "../contexts/AuthContext"
import IconButton from "./IconButton"

export default () => {

    const {user, handleLogout} = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <View style={styles.topIcons}>
                <IconButton size={60} icon="person" iconColor={"#fff"} backgroundColor="rgba(0, 0, 0, 0.1)"/>
                <IconButton 
                    size={60} 
                    icon="logout" 
                    iconColor="#FFF" 
                    backgroundColor="transparent"
                    onPress={() => handleLogout()}
                />
            </View>

            <View>
                <Text style={{color: '#fff', fontSize: 15}}>Usuário: {user!.user_name}</Text>
                <Text style={{color: '#ccc', fontSize: 12}}>Perfil: {user!.profile_description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        backgroundColor: mainColor,
        padding: 10
    },
    topIcons: {
        height: 110,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
    
})