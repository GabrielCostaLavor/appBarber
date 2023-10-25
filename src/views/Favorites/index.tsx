import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function Favorites(){
    return (
        <SafeAreaView style={styles.wrapper}>
            <Text>Favorites</Text>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    wrapper: {
        flex: 1,
    },
})