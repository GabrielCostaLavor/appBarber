import React from "react"
import { FlatList, ImageBackgroundProps, StyleSheet, Text, View } from "react-native"
import ServiceItem from "./ServiceItem"

interface Props{
    service: ServicesProps[]
}
interface ServicesProps{
    name: string,
    value: string,
    category: string,
    image: ImageBackgroundProps
}

const ServicesBarber: React.FC<Props> = ({service}) => {
    return (
        <View style={styles.servicesContainer}>
            <Text style={styles.title}>Serviços disponiveis</Text>
            <View style={styles.servicesListContainer}>
                <FlatList
                    style={{width: '100%', padding: 0}}
                    data={service}
                    keyExtractor={item => item.name} // Chave única para cada item
                    renderItem={({ item, index }) => <ServiceItem item={item} isLastItem={service.length-1 === index}/>}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    servicesContainer: {
        marginTop: 10,
        marginHorizontal: -12
    },
    servicesListContainer:{
        backgroundColor: '#000',
        borderRadius: 5,
        marginTop: 10
    },
    title: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 5
    },

})

export default ServicesBarber