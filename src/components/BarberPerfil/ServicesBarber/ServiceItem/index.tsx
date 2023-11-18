import { Dimensions, Image, ImageBackgroundProps, StyleSheet, Text, View } from "react-native"


interface Props{
    item: ServicesProps,
    isLastItem?: boolean
}

interface ServicesProps{
    name: string,
    value: string,
    category: string,
    image: ImageBackgroundProps
}

const {height, width} = Dimensions.get("window")


const ServiceItem: React.FC<Props> = ({item, isLastItem}) => {
    return (
        <View style={[styles.serviceItemContainer, isLastItem && styles.border]}>
            <View style={styles.seviceContent}>
                <Text style={styles.serviceName}>{item.name}</Text>
                <Text style={styles.price}>R$ {item.value},00</Text>
            </View>
            <View style={styles.serviceImage}>
                <Image source={item.image} style={styles.image}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    serviceItemContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderBottomColor: '#fff',
        borderBottomWidth: 1
    },
    border: {
        borderBottomWidth: 0
    },
    seviceContent: {

    },
    serviceName: {
        color: '#fff',
        fontSize: width * 0.05 > 18 ? 18 : width * 0.05,
        fontWeight: '500',
        marginBottom: 5
    },
    price:{
        color: '#F5B400',
        fontSize: width * 0.05 > 20 ? 20 : width * 0.05,
        fontWeight: '500'
    },
    serviceImage: {

    },
    image:{
        height: width * 0.1375,
        width: width * 0.1375,
    },
})
export default ServiceItem