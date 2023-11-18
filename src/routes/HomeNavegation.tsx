import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../views/Home";
import BarberPerfil from "../components/BarberPerfil";
import ThemeDefault from "../themes/ThemeDefault";
import ThemeSubCategories from "../themes/ThemeSubCategories";


export default function HomeNavegation(){
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeScreen">
                {(props) => (
                    <ThemeDefault >
                        <Home />
                    </ThemeDefault>
                )}
            </Stack.Screen>
            <Stack.Screen name="BarberPerfil">
                {(props) => (
                    <ThemeSubCategories >
                        <BarberPerfil />
                    </ThemeSubCategories>
                )}
            </Stack.Screen>
        </Stack.Navigator>
    )
}