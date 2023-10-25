import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import BarberAllList from "../../components/BarberAllList";
import { globalStyles } from "../../styles/global";

export default function Home(){
    return (
        <SafeAreaView style={globalStyles.wrapper}>
            <View style={styles.container}>
                <BarberAllList />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    },
    text: {
    },
    wrapper: {
        flex: 1,
    },
})