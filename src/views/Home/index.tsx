import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import BarberAllList from "../../components/BarberAllList";
import { globalStyles } from "../../styles/global";
import Header from "../../components/Header";
import CategoryCards from "../../components/CategoryCards";
import { CarouselHeader } from "../../components/CarouselHeader";

export default function Home(){
    return (
       <View>
            <CarouselHeader />
            <CategoryCards />
            <BarberAllList />
       </View>
                
    )
}
const styles = StyleSheet.create({
    text: {
    },
    wrapper: {
        flex: 1,
    },
})