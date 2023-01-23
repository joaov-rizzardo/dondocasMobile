import { NavigationContainer } from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer"
import Home from "./views/Home";
import Sale from "./views/Sale";
import { Text } from "react-native";

const Drawer = createDrawerNavigator()

const drawerStyle = {
    backgroundColor: "#7e1037",
    width: "80%"
}

const headerOptions = {
    headerStyle: {
        backgroundColor: "#7e1037"
    },
    headerTitleStyle: {
        color: "#fff"
    }
}
export default () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator 
                initialRouteName="App"
                screenOptions={{
                    drawerStyle: drawerStyle,
                    drawerLabelStyle: {
                        color: "white",
                        borderBottomColor: "#252323",
                        borderBottomWidth: 1,
                        width: "100%",
                        padding: 10
                    },
                    drawerActiveTintColor: "#fff"
                }}
            >
                <Drawer.Screen 
                    name="App" 
                    component={Home}
                    options={{title: "Tela inicial", ...headerOptions}}
                />
                <Drawer.Screen 
                    name="Vendas" 
                    component={Sale} 
                    options={{title: "Vendas", ...headerOptions}}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}