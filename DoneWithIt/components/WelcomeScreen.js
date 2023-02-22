import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';


function WelcomeScreen(props) {
    const [fontsLoaded] = useFonts({
        'Rubik': require('../assets/fonts/Rubik-Black.ttf'),
      });
    return (
        <SafeAreaView style={styles.mainStyle}>
            <View style={styles.navStyle}>
                <Text>Logo</Text>
                <View style={styles.navMenu}>
                <Text>Поръчка</Text>
                <Text>Управител</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainStyle:{
        backgroundColor: "#363434",
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        fontFamily: "Rubik"
    },
    navStyle:{
        backgroundColor: "#989898",
        width: "100%",
        height: "10%",
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "space-between",
        padding: 20,
        fontWeight: 400
    },
    navMenu:{
        flexDirection: "row",
        width: "50%",
        justifyContent: "space-between"
    }
})

export default WelcomeScreen;