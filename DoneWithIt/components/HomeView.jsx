import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native'

const HomeView = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center"
    }}>
      <View style = {{
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: '80%'
      }}/>
       <View style = {{
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        top: "10%"
      }}>
      <Image
      style = {{
        width:100,
        height: 100,
      }}
      source={require('../assets/icon.png')}/>
      <Text>Sell what you don't need!</Text>
      </View>
       <View style = {{
        
        width:"100%",
        height: "20%",
        
      }}>
        <View style = {{
        backgroundColor: 'tomato',
        width:'100%',
        height: '50%'
        
      }}/>
      <View style = {{
        backgroundColor: 'gold',
        width:'100%',
        height: '50%'
      }}/>
      </View>
    </View>
  )
}



export default HomeView