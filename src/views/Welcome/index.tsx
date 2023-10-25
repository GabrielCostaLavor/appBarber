import { Dimensions, Image, ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import background from '../../assets/back.png';
import logo from '../../assets/logo.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Welcome() {
    return (
        <SafeAreaView style={styles.wrapper}>
            <ImageBackground source={background} resizeMode="cover" style={{ ...styles.backgroundImage, width: windowWidth, height: windowHeight }}>
            <View style={styles.overlay} />
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Image source={logo} style={styles.logo}/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Bem-vindo ao <Text style={{color: "#8429D8", fontWeight: "bold", fontSize: 30}}>App barber</Text>. Faça o login e agende seu próximo corte!</Text>
                </View>
                <Pressable style={styles.buttons}>
                    <Text style={styles.textButton}>Entrar</Text>
                </Pressable>
            </SafeAreaView>
            </ImageBackground>
        </SafeAreaView>
       
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    wrapper: {
        flex: 1
    },
    backgroundImage: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        display: 'flex',
        marginTop: 30,
    },
    text: {
        color: "#FFF",
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '500',
        letterSpacing: 1.5,
        lineHeight: 30
    },
    header: {
        display: 'flex',
        alignItems: 'center'
    },
    logo: {
        height: 150,
        width: 150,
    },
    buttons: {
        marginTop: 50,
        display: 'flex',
        alignItems: 'center'
    },
    textButton: {
        paddingVertical: 15,
        borderRadius: 25,
        backgroundColor: '#8429D8',
        paddingHorizontal: 20,
        textAlign: "center",
        color: '#fff',
        fontWeight: '600',
        fontSize: 24,
        letterSpacing: 1.25,
        width: 220
    },
    overlay: {
        ...StyleSheet.absoluteFillObject, // Preenche todo o espaço do pai
        backgroundColor: 'rgba(0, 0, 0, 0.65)', // Cor da sobreposição (pode ser ajustada para a sua preferência)
    },
})