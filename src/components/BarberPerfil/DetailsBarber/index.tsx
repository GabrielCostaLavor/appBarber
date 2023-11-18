import React from "react"
import { StyleSheet, Text, View } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface Props{
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
}

const DetailsBarber: React.FC<Props> = ({description, professionals, address, paymentMethods, socialMedia}) =>{
    return (
        <View style={styles.detailsContainer}>
            <Text style={styles.title}>Sobre nós</Text>
            <Text style={styles.textParagraph}>{description}</Text>
            <Text style={styles.titleSecond}>Profissionais</Text>
            {
                professionals.map((item, index) => <Text key={index} style={styles.textParagraph}>{item}</Text>)
            }
            <Text style={styles.titleSecond}>Metodos de pagamento</Text>
            {
                paymentMethods.map((method, index) => {
                    const icon = method === "Pix" ? 
                        <MaterialIcons
                            name="pix"
                            size={20}
                            color="#F5B400" 
                        />
                    : method === "Dinheiro" ? 
                        <FontAwesome5
                            name="money-bill-wave"
                            size={20}
                            color="#F5B400" 
                        />
                    :
                    <AntDesign
                        name="creditcard"
                        size={20}
                        color="#F5B400" 
                    />



                    return (
                        <View style={styles.methodItem}>
                            <Text key={index} style={styles.textParagraph}>{method}</Text>
                            {icon}
                        </View>
                    )
                })
            }
            <Text style={styles.titleSecond}>Siga-nos</Text>
            <View style={styles.socialIcons}>
                {
                    socialMedia.isInstagram && (
                        <AntDesign
                            name="instagram"
                            size={25}
                            color="#BC2A8D" 
                        />
                    )
                }
                {
                    socialMedia.isWhatssap && (
                        <FontAwesome5
                            name="whatsapp"
                            size={25}
                            color="#25D366" 
                        />
                    )
                }
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    detailsContainer:{
        marginTop: 10
    },
    title: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 5
    },
    titleSecond: {
        color: '#fff',
        textAlign: 'left',
        fontSize: 18,
        marginBottom: 5,
        marginTop: 10,
    },
    textParagraph: {
        color: '#ffffffd6',
        fontSize: 13,
    },
    methodItem: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },
    socialIcons: {
        flexDirection: 'row',
        gap: 15,
        marginTop: 5,
    }
})
export default DetailsBarber