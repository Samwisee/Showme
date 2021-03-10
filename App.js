import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        style="auto"
        backgroundColor="#61dafb"
        />
      <View style={styles.preloader}>
        <Image style={styles.preloaderImage} source={require('./assets/showme.jpg')} />
        <Text style={styles.text}>Quality Concerts</Text>
      </View>
      <View>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  preloader:{
    // display: 'none',
  },
  preloaderImage: {
    height: 200,
    width: 240,
    borderRadius: 100,
  },
  text: {
    color: 'white',
    fontSize: 30,
  }
});

