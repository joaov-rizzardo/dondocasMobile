
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./views/Home";
import Sale from "./views/Sale";
import { mainColor } from "./configs/Colors";
import Logout from "./views/Logout";
import React, { useContext, useEffect } from "react";
import { BootstrapContext } from "./contexts/BootstrapContext";
import { LoadingContext } from "./contexts/LoadingContext";

const Stack = createStackNavigator()

export default () => {
    const {changeBootstrapLoading} = useContext(LoadingContext)
    const {loadingBootstrap} = useContext(BootstrapContext)

    useEffect(() => {
        changeBootstrapLoading(loadingBootstrap)
    }, [loadingBootstrap])
    
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Vendas" component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>

    )
} 

