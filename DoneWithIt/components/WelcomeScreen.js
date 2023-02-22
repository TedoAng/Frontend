import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, Button, Pressable, Platform, StatusBar, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Icon } from "@react-native-material/core";

SplashScreen.preventAutoHideAsync();



function WelcomeScreen(props) {
    const [selection, setSelection] = useState(false);

    const [fontsLoaded] = useFonts({
        Rubik: require('../assets/fonts/Rubik-Black.ttf')
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    const serviceHandle = () => {
        setSelection(false);
    }

    const goBack = () => {
        setSelection(true);
    }

    return (
        <SafeAreaView style={styles.mainStyle} onLayout={onLayoutRootView}>
            <View style={styles.navStyle}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://drive.google.com/uc?export=view&id=1b61FJfDiRLs9-pEd3Tq9pnurxOvMoOeF'
                    }}
                />
                <View style={styles.navMenu}>
                    <Text style={styles.navMenuText}>Поръчка</Text>
                    <Text style={styles.navMenuText}>Управител</Text>
                </View>
            </View>
            {selection ? (
                <View style={styles.bodyStyle}>
                    <Pressable style={{ ...styles.btnStyle, ...styles.btnGreen }} onPress={serviceHandle}>
                        <Icon name="room-service" color="white" style={{ ...styles.btnTextStyle, fontSize: 60 }} />
                        <Text style={styles.btnTextStyle}>Service</Text>
                    </Pressable>
                    <Pressable style={{ ...styles.btnStyle, ...styles.btnRed }}>
                        <Icon name="liquor" color="white" style={{ ...styles.btnTextStyle, fontSize: 60 }} />
                        <Text style={styles.btnTextStyle}>Bar</Text>
                    </Pressable>
                    <Pressable style={{ ...styles.btnStyle, ...styles.btnBlue }}>
                        <Icon name="toaster-oven" color="white" style={{ ...styles.btnTextStyle, fontSize: 60 }} />
                        <Text style={styles.btnTextStyle}>Kitchen</Text>
                    </Pressable>
                </View>
            ) : (
                <View style={styles.bodyStyle}>
                    <Pressable style={styles.btnBack} onPress={goBack}>
                        <Icon name="backspace" color="white" style={styles.btnBackText} />
                        <Text style={styles.btnBackText}>НАЗАД</Text>
                    </Pressable>
                </View>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainStyle: {
        backgroundColor: "#363434",
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    navStyle: {
        backgroundColor: "#989898",
        width: "100%",
        height: "10%",
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "space-between",
        padding: 20
    },
    navMenu: {
        flexDirection: "row",
        width: "50%",
        justifyContent: "space-between"
    },
    navMenuText: {
        color: "white",
        fontFamily: "Rubik",
        fontSize: 16
    },
    tinyLogo: {
        width: 150,
        height: 180,
        resizeMode: 'contain'
    },
    bodyStyle: {
        width: "100%",
        height: "90%",
        paddingVertical: 80,
        justifyContent: "space-between",
        alignItems: "center"
    },
    btnStyle: {
        width: "80%",
        height: "25%",
        justifyContent:"center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 20,
        
    },
    btnTextStyle: {
        color: "white",
        fontFamily: "Rubik",
        fontSize: 26,
        alignItems: "center",
        textShadowColor: 'black',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 10,
        marginHorizontal: 5
    },
    btnGreen: {
        backgroundColor: '#198754'
    },
    btnRed: {
        backgroundColor: '#dc3545'
    },
    btnBlue: {
        backgroundColor: '#0d6efd'
    },
    btnBack: {
        flexDirection: "row",
        position: "absolute",
        left: 0,
        backgroundColor: "rgb(239, 239, 239)",
        alignItems: "center",
        padding: 10
    },
    btnBackText: {
        color: "black",
        fontSize: 16
    }

})

export default WelcomeScreen;