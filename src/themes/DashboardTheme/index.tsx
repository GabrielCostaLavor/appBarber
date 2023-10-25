import React from 'react';
import { Navegation } from "../../components/Navegation";
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Header from '../../components/Header';

function  DashboardTheme () {
    return (
        <SafeAreaView style={styles.wrapper}>
            <Header />
            <Navegation />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    text: {
    },
    wrapper: {
        flex: 1,
        backgroundColor: '#0F0F0F',
        height: '100%',
    },
    header: {
        height: 30,
        width: 100
    },
    navigation: {
        position: 'relative',
        bottom: 10, left: 0
    }
})

export default DashboardTheme;

