import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./assets/Showme.jpg')} />
      <Text>Quality Concerts</Text>
      <TouchableHighlight>
        <Image source={require('./assets/Showme.jpg')} />  
      </TouchableHighlight>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

