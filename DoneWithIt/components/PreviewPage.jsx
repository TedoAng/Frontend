import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native'

const PreviewPage = () => {
  return (
    <SafeAreaView style={{
      flex:1,
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      backgroundColor: "black"
    }}>
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            height:"20%"
        }}>
            <View style={{
                backgroundColor: "tomato",
                width:50,
                height: 50
                }}/>
            <View style={{
                backgroundColor: "green",
                width:50,
                height: 50
                }}/>
        </View>
        <View style={{
            width: "100%",
            height:"60%"
        }}>
            <Image style={{
            width: "100%",
            height:"100%"
        }}source={require('../assets/icon.png')}/>
        </View>
    </SafeAreaView>
  )
}



export default PreviewPage