import { useContext, useState } from "react"
import { View, StyleSheet, TextInput, Button, Image, Text} from "react-native"
import { mainColor } from "../configs/Colors"
import { AuthContext } from "../contexts/AuthContext"

type Login = {
    username: string
    password: string
}

export default () => {
    
    const {handleLogin} = useContext(AuthContext)

    const [hasError, handleHasError] = useState<boolean>(false)

    const [login, setLogin] = useState<Login>({
        username: "",
        password: ""
    })
    
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
                        onPress={e => handleLogin(login.username, login.password).then(status => {
                            status === false ? handleHasError(true) : false
                        })}
                        color={mainColor} 
                        title="Entrar"/>
                </View>

                {hasError === true && <Text style={{color: mainColor}}>Usuário e/ou senha inválidos</Text>}
                
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#eaeff1"
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