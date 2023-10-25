import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function Profile(){
    return (
        <SafeAreaView style={styles.wrapper}>
            <Text>Profile</Text>
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