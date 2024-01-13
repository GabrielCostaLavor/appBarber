import { useRoute } from "@react-navigation/native";
import { Dimensions, Image, ImageBackground, ImageBackgroundProps, Pressable, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import background from '../../assets/backgroundOne.png';
import { data } from "../BarberAllList/listItemMock";
import { useEffect, useState } from "react";
import Stars from "../Stars";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import DetailsBarber from "./DetailsBarber";
import ServicesBarber from "./ServicesBarber";
import Scheduling from "./Scheduling";

interface ParamsData {
    id: string;
}

interface DataBarber {
    id: number;
    key: string;
    title: string;
    image: ImageBackgroundProps;
    stars: number;
    favorite: boolean;
    banner: ImageBackgroundProps;
    professionals: string[];
    paymentMethods: string[];
    socialMedia: {
        isWhatssap: boolean;
        isInstagram: boolean;
    };
    address: {
        street: string;
        streetNumber: number;
        city: string;
        uf: string;
    };
    description: string;
    service: ServicesProps[]
}
interface ServicesProps{
    name: string,
    value: string,
    category: string,
    image: ImageBackgroundProps
}


type typeModal = 'details' | 'services' | 'scheduling'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BarberPerfil: React.FC = () => {
    const route = useRoute();
    const [barber, setBarber] = useState<DataBarber>()
    const [modal, setModal] = useState<typeModal>('details')
    const { id } = route.params as ParamsData;

    useEffect(() => {
        const barberItem = data.filter(item => item.id === Number(id))[0];
        if (barberItem) {
            setBarber(barberItem)
        }
    }, [])

    return (
        <>
            {
                barber ? (
                    <View>
                        <View style={styles.backgroundImageContainer}>
                            <ImageBackground source={barber?.banner} resizeMode="cover" style={{ ...styles.backgroundImage, }}></ImageBackground>
                        </View>
                        <View style={styles.content}>
                            <View style={styles.contentHeader}>
                                <Image source={barber.image} style={styles.barberLogo} />
                                <Text style={styles.title}>{barber.title}</Text>
                                <View style={styles.stars}>
                                    <Stars stars={barber.stars} size={windowWidth * 0.035}/>
                                </View>
                                <View style={styles.address}>
                                    <Text style={styles.addressText}>{barber.address.street}-N° {barber.address.streetNumber}, {barber.address.city}-{barber.address.uf}</Text>
                                </View>
                                <View style={styles.favorite}>
                                    {
                                        barber.favorite ? (
                                            <Pressable>
                                                <MaterialIcon
                                                name="favorite"
                                                size={35}
                                                color="#fff" />
                                            </Pressable>
                                        ):
                                        (
                                            <Pressable>
                                                <MaterialIcon
                                                name="favorite-outline"
                                                size={35}
                                                color="#fff" />
                                            </Pressable>
                                        )
                                    }
                                </View>
                            </View>
                            <View style={styles.modalContainer}>
                                <View style={styles.modalHeader}>
                                    <Pressable onPress={() => setModal('details')}>
                                        <Text style={[styles.btnsModal, modal === 'details' ? {color: '#9258ff', borderColor: '#9258ff'} : {}]}>Detalhes</Text>
                                    </Pressable>
                                    <Pressable onPress={() => setModal('services')}>
                                        <Text style={[styles.btnsModal, modal === 'services' ? {color: '#9258ff', borderColor: '#9258ff'} : {}]}>Serviços</Text>
                                    </Pressable>
                                    <Pressable onPress={() => setModal('scheduling')}>
                                        <Text style={[styles.btnsModal, modal === 'scheduling' ? {color: '#9258ff', borderColor: '#9258ff'} : {}]}>Agendamento</Text>
                                    </Pressable>
                                </View>
                                <View style={styles.modalBody}>
                                    {modal === 'details' ? (
                                    <DetailsBarber
                                      description={barber.description}
                                      address={barber.address}
                                      paymentMethods={barber.paymentMethods}
                                      professionals={barber.professionals}
                                      socialMedia={barber.socialMedia} 
                                    />) 
                                    : modal === 'services' ? 
                                        <ServicesBarber service={barber.service}/>
                                        : <Scheduling />
                                    }
                                    
                                </View>
                            </View>
                        </View>
                    </View>
                ):(
                    <Text>Carregando.....</Text>
                )
            }
        </>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth,
        height: windowHeight * 0.3,
    },
    barberLogo: {
        width: windowWidth * 0.2,
        height: windowWidth * 0.2,
        borderRadius: 100,
        position: 'absolute',
        top: -(windowWidth * 0.2 / 2)
    },
    backgroundImageContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 30,
        position: 'relative',
    },
    content:{
        backgroundColor: '#1C1C1E',
        width: windowWidth,
        minHeight: windowHeight * 0.7,
        marginLeft: -15,
        marginTop: -60,
        zIndex: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    contentHeader:{
        display: 'flex',
        alignItems: 'center',
    },
    title:{
        fontSize: 24,
        fontWeight: '600',
        color: '#fff',
        marginTop: windowWidth * 0.1,
        marginBottom: 3
    },
    stars:{
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
    },
    favorite:{
        position: 'absolute',
        right: 25,
        top: 5
    },
    modalContainer:{
        padding: 15
    },
    modalHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-around"
    },
    modalBody:{
    },
    btnsModal: {
        color: '#fff',
        fontSize: 14,
        paddingHorizontal: 10,
        paddingVertical: 5,
        lineHeight: 14,
        borderBottomWidth: 1.7,
        borderColor: 'transparent', 
        fontWeight: '700', 
        letterSpacing: 0.5
    },
    address: {
        marginTop: 5
    },
    addressText: {
        color: '#fff',
        fontSize: 14,
    }
})

export default BarberPerfil