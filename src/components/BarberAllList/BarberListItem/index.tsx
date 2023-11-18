import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ImageBackgroundProps, Pressable } from "react-native";
import { Dimensions } from "react-native";
import { ImageProps, StyleSheet } from "react-native";
import { Image, Text, View } from "react-native"
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Stars from "../../Stars";

interface Props{
    item: ItemList
}

interface ItemList{
    id: number;
    key: string;
    title: string;
    image: ImageBackgroundProps;
    stars: number;
    favorite: boolean;
}
const {height, width} = Dimensions.get("window")
const BarberListItem: React.FC<Props> = ({item}) => {
    const navegation = useNavigation<any>()

    const barberItem = () => {
        navegation.navigate('BarberPerfil', {id: item.id})
    }

    return (
        <Pressable style={styles.listItem} onPress={barberItem}>
            <View style={styles.headerItem}>
                <Image source={item.image} style={styles.image}/>
            </View>
            <View style={styles.contentItem}>
                <Pressable>
                    <Text style={styles.textTitle}>{item.title}</Text>
                    <View style={styles.stars}>
                        <Stars stars={item.stars}/>
                    </View>
                </Pressable>
                <View>
                    {
                        item.favorite ? (
                            <Pressable>
                                <MaterialIcon
                                  name="favorite"
                                  size={40}
                                  color="#fff" />
                            </Pressable>
                        ):
                        (
                            <Pressable>
                                <MaterialIcon
                                  name="favorite-outline"
                                  size={40}
                                  color="#fff" />
                            </Pressable>
                        )
                    }
                </View>
            </View>
        </Pressable>
    )
}

export const styles = StyleSheet.create({
    image:{
        height: width * 0.3 - 30,
        width: width * 0.3 - 30,
    },
    listItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 15,
        backgroundColor: '#2C2C2E'
    },
    headerItem: {
        overflow: 'hidden',
        width: width * 0.3 - 30,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
    },
    contentItem:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 8,
        width: width * 0.7 - 30
    },
      stars:{
        display: 'flex',
        flexDirection: 'row',
        gap: 8
      },
      textTitle: {
        color: '#fff',
        fontSize: 24,
        marginBottom: 8
      },
      textDescription: {
        color: '#fff'
      },
})

export default BarberListItem;