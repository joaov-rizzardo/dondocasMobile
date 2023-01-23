import { useState } from "react"
import { View, StyleSheet, TextInput, Button, Image } from "react-native"
import { mainColor } from "../configs/Colors"

interface Login {
    username: string
    password: string
}

export default () => {

    const [login, setLogin] = useState<Login>({
        username: "",
        password: ""
    })

    async function handleLogin(){
        console.log(login)
    }

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Image style={styles.image} source={require('../assets/logo.png')}/>
                <TextInput 
                    placeholder="Usuário" 
                    style={styles.input}
                    onChangeText={text => setLogin({...login, username: text})}
                />

                <TextInput 
                    placeholder="Senha" 
                    secureTextEntry={true} 
                    style={styles.input}
                    onChangeText={text => setLogin({...login, password: text})}
                />
                <View style={styles.button}>
                    <Button 
                        onPress={handleLogin}
                        color={mainColor} 
                        title="Entrar"/>
                </View>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    container: {
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        borderWidth: 1,
        borderColor: mainColor,
        width: "75%",
        height: 40,
        marginBottom: 10,
        borderRadius: 10,
        padding: 10
    },
    button: {
        width: "75%", 
        height: 40
    },
    image: {
        width: "75%",
        height: 200,
        resizeMode: "contain"
    }
})