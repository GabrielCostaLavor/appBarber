import { Dimensions, Image, ImageProps, StyleSheet, Text, View } from "react-native";
import image from '../../assets/logo.png'
import { useRef, useState } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import data from "./carouselDataMock";
import CarouselItem, { ITEM_WIDTH } from "./CarouselItem";

interface Props {
  item: Data;
}
interface Data{
  title: string;
  body: string;
  imgUrl: ImageProps
}

const width = Dimensions.get('window').width;


export function CarouselHeader(){
  const isCarousel = useRef(null)
  const [step, useStep] = useState<number>(0)
    return (
        <View  style={styles.carouselContainer}>
          {/**/}
          <Carousel
            layout="default"
            layoutCardOffset={1}
            ref={isCarousel}
            data={data}
            renderItem={({ item, index }) => <CarouselItem  item={item} index={index}/>}
            sliderWidth={width}
            itemWidth={ITEM_WIDTH}
            inactiveSlideShift={0}
            autoplay={true}
            autoplayInterval={3000}
            onSnapToItem={(index) => useStep(index) }
            scrollEnabled={true}
          />
          <Pagination
            dotsLength={data.length}
            activeDotIndex={step}
            dotStyle={{
                marginVertical: -5,
                width: 12,
                height: 12,
                borderRadius: 12,
                marginHorizontal: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.92)'
            }}
            inactiveDotStyle={{
                // Define styles for inactive dots here
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />

        </View>
    )
}

const styles = StyleSheet.create({
  carouselContainer:{
    marginTop: 5
  }
})