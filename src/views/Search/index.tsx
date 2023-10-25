import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function Search(){
    return (
        <SafeAreaView style={styles.wrapper}>
            <Text>Search</Text>
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