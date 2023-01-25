import { useContext, useState } from "react"
import { View, StyleSheet, TextInput, Button, Image, Text, TouchableOpacity} from "react-native"
import { mainColor } from "../configs/Colors"
import { AuthContext } from "../contexts/AuthContext"
import Icon from 'react-native-vector-icons/FontAwesome'

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
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={require('../assets/logo.png')} />
            </View>

            <View style={styles.main}>

                <Icon name="user" color={mainColor} size={130}/>

                <View style={{marginTop: 20, ...styles.inputView}}>
                    <Icon name="user" color={mainColor} size={20} />
                    <TextInput 
                        placeholder="Usuário" 
                        onChangeText={text => setLogin({...login, username: text})}
                        style={styles.inputView.input}
                    />
                </View>
                

                <View style={styles.inputView}>
                    <Icon name="lock" color={mainColor} size={20} />
                    <TextInput 
                        placeholder="Senha" 
                        onChangeText={text => setLogin({...login, password: text})}
                        secureTextEntry={true} 
                        style={styles.inputView.input}
                    />
                </View>

                <View style={styles.button}>
                    <TouchableOpacity  
                        onPress={e => handleLogin(login.username, login.password).then(status => {
                            status === false ? handleHasError(true) : false
                        })}
                        style={styles.button}><Text style={{color: '#fff'}}>Entrar</Text></TouchableOpacity>
                </View>

                {hasError === true && <Text style={{color: mainColor}}>Usuário e/ou senha inválidos</Text>}
                
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: mainColor
    },
    main: {
        width: "100%",
        flex: 1,
        paddingTop: 60,
        alignItems: "center",
        borderTopRightRadius: 70,
        borderTopLeftRadius: 70,
        backgroundColor: '#eaeff1'
    },
    header: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        title: {
            color: '#eaeff1',
            fontSize: 30
        }
    },
    inputView: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: mainColor,
        alignItems: "center",
        width: "75%",
        height: 40,
        marginBottom: 10,
        borderRadius: 20,
        padding: 10,
        input: {
            width: "100%",
            marginLeft: 10
        }
    },
    button: {
        width: "75%", 
        height: 40,
        backgroundColor: mainColor,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: "75%",
        height: 200,
        resizeMode: "contain"
    }
})