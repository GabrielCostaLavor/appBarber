import React, { ReactNode } from "react"
import Header from "../../components/Header"
import { SafeAreaView } from "react-native-safe-area-context"
import { ScrollView, View } from "react-native"
import { globalStyles } from "../../styles/global"

interface themeProps{
    children: ReactNode
}

export default function ThemeDefault({children}:themeProps){
    return(
        <SafeAreaView style={globalStyles.wrapper}>
            <ScrollView>
                <Header />
                <View style={globalStyles.container}>
                    {children}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}