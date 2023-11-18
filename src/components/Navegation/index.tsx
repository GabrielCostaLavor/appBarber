import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../../views/Home";
import Favorites from "../../views/Favorites";
import Notifications from "../../views/Notifications";
import Profile from "../../views/Profile";
import Search from "../../views/Search";
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet } from "react-native";
import HomeNavegation from "../../routes/HomeNavegation";

const Tab = createBottomTabNavigator();

export function Navegation(){
    return (
        <NavigationContainer>
            <Tab.Navigator 
            screenOptions={
              {
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle:{height: 55, backgroundColor: "#1C1C1E"}
              }
            }
          
            >
                <Tab.Screen name="Home"  component={HomeNavegation} options={
                  {
                    headerShown: false, tabBarIcon(props) {
                  if (props.focused) {
                    return <Icon name="home" size={35} color="#8429D8"/>
                  }   
                  return <Icon name="home" size={30} color="#fff"/>
                },
              }}
                />
                <Tab.Screen name="Search" component={Search} options={{
                  tabBarLabel: 'Pesquisa',
                  headerShown: false, tabBarIcon(props) {
                  if (props.focused) {
                    return <Icon name="search" size={30} color="#8429D8"/>
                  }   
                  return <Icon name="search" size={25} color="#fff"/>
                },}}/>
                <Tab.Screen name="Notifications" component={Notifications} options={{
                  tabBarLabel: 'Notificação',
                  headerShown: false, tabBarIcon(props) {
                  if (props.focused) {
                    return <IconMaterial name="notifications" size={30} color="#8429D8"/>
                  }   
                  return <IconMaterial name="notifications" size={25} color="#fff"/>
                },}}/>
                <Tab.Screen name="Favorites" component={Favorites} options={{
                  tabBarLabel: 'Favoritos',
                  headerShown: false, tabBarIcon(props) {
                  if (props.focused) {
                    return <IconMaterial name="favorite" size={30} color="#8429D8"/>
                  }   
                  return <IconMaterial name="favorite" size={25} color="#fff"/>
                },}}/>
                <Tab.Screen name="Profile" component={Profile} options={{
                  tabBarLabel: 'Perfil',
                  headerShown: false, tabBarIcon(props) {
                  if (props.focused) {
                    return <Icon name="user" size={30} color="#8429D8"/>
                  }   
                  return <Icon name="user" size={25} color="#fff"/>
                },}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
  container: {
      paddingHorizontal: 20
  },
  text: {
  },
  wrapper: {
    backgroundColor: "#0F0F0F"
  },
})
