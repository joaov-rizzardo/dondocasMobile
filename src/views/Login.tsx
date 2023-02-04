import { useContext, useState } from "react"
import { View, StyleSheet, Image, Text} from "react-native"
import { mainColor } from "../configs/Colors"
import { AuthContext } from "../contexts/AuthContext"
import Icon from 'react-native-vector-icons/FontAwesome'
import IconInput from "../components/IconInput"
import LoadingButton from "../components/LoadingButton"

type Login = {
    username: string
    password: string
}

export default () => {
    
    const {handleLogin} = useContext(AuthContext)

    const [hasError, handleHasError] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [login, setLogin] = useState<Login>({
        username: "",
        password: ""
    })
    
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Image style={styles.image} source={require('../assets/logo.png')} />
            </View>

            <View style={styles.main}>

                <Icon name="user" color={mainColor} size={130}/>

                <IconInput
                    value={login.username}
                    onChangeText={text => setLogin({...login, username: text})}
                    color={mainColor} 
                    icon="user" 
                    placeholder="Usuário" 
                    width="75%"
                />
                
                <IconInput
                    value={login.password}
                    onChangeText={text => setLogin({...login, password: text})}
                    color={mainColor} 
                    icon="lock" 
                    placeholder="Senha" 
                    width="75%"
                    secureTextEntry={true}
                />

                <LoadingButton 
                    text="Entrar"
                    fontColor="#fff"
                    backgroundColor={mainColor}
                    width="75%"
                    isLoading={isLoading}
                    onPress={e => {
                        setIsLoading(true)
                        handleLogin(login.username, login.password).then(status => {
                            status === false ? handleHasError(true) : false
                            setIsLoading(false)
                        })
                    }}
                />

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
    image: {
        width: "60%",
        resizeMode: "contain"
    }
})