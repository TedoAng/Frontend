
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions } from 'react-native';
import { useDeviceOrientation  } from '@react-native-community/hooks'
import HomeView from './components/HomeView';
import PreviewPage from './components/PreviewPage';
import { useEffect, useState } from 'react';

export default function App() {
  
  
  
  
  return (
      <PreviewPage/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight:0
  },
  btn: {
    flex: 1,
    backgroundColor: 'pink',
    border: 'none',
    color: 'black',
    width: 300
  }
});
