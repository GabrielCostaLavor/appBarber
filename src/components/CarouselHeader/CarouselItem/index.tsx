import React from "react";
import { Dimensions, Image, ImageBackgroundProps, ImageProps, StyleSheet, Text, View } from "react-native"

interface Props {
    item: Data;
    index: number
}
interface Data{
    title: string;
    body: string;
    imgUrl: ImageProps
}

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const CarouselItem: React.FC<Props> = ({ item, index }) => {
    return (
        <View  key={index}>
            <Image
                source={item.imgUrl}
                style={styles.image}
            />
    {/*         <Text style={styles.header}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      borderRadius: 8,
      width: ITEM_WIDTH,
      paddingBottom: 40,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    image: {
      width: ITEM_WIDTH,
      height: height * 0.5,
      borderRadius: 10
    },
    header: {
      color: "#222",
      fontSize: 28,
      fontWeight: "bold",
      paddingLeft: 20,
      paddingTop: 20
    },
    body: {
      color: "#222",
      fontSize: 18,
      paddingLeft: 20,
      paddingRight: 20
    }
  })

export default CarouselItem;