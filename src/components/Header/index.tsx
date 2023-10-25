import { Dimensions, Image, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import logo from '../../assets/logo.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Header(){
    return (
        <View style={styles.containerLogo}>
            {/* <Image source={logo} style={styles.logo}/> */}
            <Text style={styles.text}><Text style={{color: "#8429D8"}}>App</Text> Barber</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        height: windowWidth * 0.17,
        width: windowWidth * 0.17,
        maxHeight: 60,
        maxWidth: 60,
        minHeight: 40,
        minWidth: 40
    },
    text:{
        fontSize: 30,
        color: '#FFFFFF',
        fontWeight: "bold"
    },
    containerLogo:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.50)',
        paddingVertical: 3
    }
})