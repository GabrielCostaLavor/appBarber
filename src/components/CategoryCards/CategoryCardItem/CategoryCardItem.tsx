import { Dimensions, Image, ImageBackgroundProps, StyleSheet, Text, View } from "react-native";

interface Props{
    item: ItemCard
}

interface ItemCard{
    id: number;
    name: string;
    image: ImageBackgroundProps
}

const {height, width} = Dimensions.get("window")


const CategoryCardItem: React.FC<Props> = ({item}) => {
    return(
        <View style={styles.cardItem}>
            <Image style={styles.cardImage} source={item.image}/>
            <Text style={styles.cardText}>
                {item.name}
            </Text>
        </View>
    )
}

export const styles = StyleSheet.create({
    cardItem:{
        width: width * 0.4 - 10,
        height: width * 0.4 - 10,
        backgroundColor: '#2C2C2E',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: 15,
        gap: 10
    },
    cardImage:{
        width: width * 0.15,        
        height: width * 0.15
    },
    cardText:{
        color: '#fff',
        fontSize: 16
    }
})

export default CategoryCardItem