import { Dimensions, Image, Pressable, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import logo from '../../assets/WGLOGO.png';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get('window').width;

interface Props {
    isGoBack?: boolean
}

export default function Header({isGoBack}: Props){
    const navegation = useNavigation<any>()
    return (
        <View style={isGoBack && {position: 'absolute', top: 0, left: 0, flex: 10, backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 10, width: windowWidth, opacity: 0.9}}>
            <View style={styles.headerWrapper}>
                {isGoBack && (
                    <Pressable style={styles.goBack} onPress={() => navegation.goBack()}> 
                        <Icon
                            name="arrow-left"
                            size={windowWidth * 0.07}
                            color="#fff" 
                        />
                    </Pressable>
                )}
                <View style={styles.containerLogo}>
                    <Image source={logo} style={styles.logo} /> 
                    {/* <Text style={styles.text}><Text style={{color: "#8429D8"}}>App</Text> Barber</Text> */}
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    header:{

    },
    logo: {
        height: windowWidth * 0.08,
        width: windowWidth * 0.35,
    },
    headerWrapper:{
        position: 'relative'
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
        paddingVertical: 10,
    },
    goBack: {
        position: 'absolute',
        marginLeft: 5,
        padding: 8,
        top: 0,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
    }
})