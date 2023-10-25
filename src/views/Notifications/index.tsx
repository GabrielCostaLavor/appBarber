import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function Notifications(){
    return (
        <SafeAreaView style={styles.wrapper}>
            <Text>Notifications</Text>
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