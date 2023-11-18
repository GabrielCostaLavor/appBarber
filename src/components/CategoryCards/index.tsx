import { Dimensions, FlatList, ImageBackgroundProps, StyleSheet, Text, View } from "react-native"
import categoryServices from "./CategoryCardMock"
import CategoryCardItem from "./CategoryCardItem/CategoryCardItem"
import Carousel from "react-native-snap-carousel";
import { useRef } from "react";

interface ItemCard{
    id: number;
    name: string;
    image: ImageBackgroundProps
}

const {height, width} = Dimensions.get("window")

const CategoryCards: React.FC = () =>{
    const isCarousel = useRef(null)


    return (
        <View>
            <View style={styles.headerList}>
                <Text style={styles.titleList}>Serviços</Text>
            </View>

            {/* <FlatList
                style={{...styles.listCard, width: '100%', padding: 0}}
                data={categoryServices}
                keyExtractor={item => item.key} // Chave única para cada item
                renderItem={({ item }) => <CategoryCardItem item={item}/>}
            /> */}

            <Carousel
                layout="default"
                layoutCardOffset={3}
                ref={isCarousel}
                data={categoryServices}
                renderItem={({ item, index }) => <CategoryCardItem  item={item} />}
                sliderWidth={width}
                itemWidth={width * 0.4 - 10}
                inactiveSlideShift={0}
                autoplay={true}
                autoplayInterval={4000}
                autoplayDelay={4000}
                scrollEnabled={true}
            />
           {/*  <View style={styles.listCard}>
                {
                    categoryServices.map((item: ItemCard) => (
                        <CategoryCardItem
                            key={item.id}
                            item={item} 
                        />
                    ))
                }
            </View> */}
        </View>
    )
}

export const styles = StyleSheet.create({
    titleList:{
        color: '#fff',
        fontSize: 20
    },
    headerList:{
        marginBottom: 15
    },
    listCard: {
        display: 'flex',
        flexDirection: "row",
        flexWrap: "wrap",
        width: '100%',
        rowGap: 10,
        columnGap: 10,
        flex: 3
    }
})

export default CategoryCards