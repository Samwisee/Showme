import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableHighlight, TextInput } from 'react-native';
import YoutubeEmbed from './YoutubeEmbed'


export default function App() {
  return (
    <SafeAreaView style={styles.section}>
      <StatusBar 
        style="auto"
        backgroundColor="#61dafb"
        />
      <View style={styles.container}>
        <YoutubeEmbed style={styles.youtubeEmbed} videoId={"yiuBxuqb7Ko"}/>
      </View>

      <View style={styles.search}>
        <TextInput    
          placeholder="Search for Artist..."
          placeholderTextColor="gray" 
        />
      </View>
      <View style={styles.filter}>
        <TextInput
          placeholder="Filter by Category..."
          placeholderTextColor="gray" 
        />
      </View>

      <View style={styles.container}>
        <Image style={styles.bands} source={require('./assets/aerosmith.jpg')} />
        <Text style={styles.bandText}>Aerosmith</Text>
      </View>

      <View style={styles.container}>
        <Image style={styles.bands} source={require('./assets/aerosmith.jpg')} />
      </View>

      <View style={styles.preloader}>
        <Image style={styles.preloaderImage} source={require('./assets/showme.jpg')}  />
        <Text style={styles.text}>Quality Concerts</Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  section: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  container: {
    borderWidth: 1,
    borderColor: "white",
    marginTop: 16,
  },
  bands: {
    height: 240,
    width: 400,
    resizeMode: 'cover',
  },
  bandsText: {
    color: 'white',
    // zIndex: 3
  },
  preloader:{
    display: 'none',
  },
  preloaderImage: {
    height: 200,
    width: 240,
    borderRadius: 100,
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
  search: {
    width: 400,
    height: 50,
    borderWidth: 1,
    borderColor: "white",
    marginTop: 16
  },
  filter: {
    width: 400,
    height: 50,
    borderWidth: 1,
    borderColor: "white",
    marginTop: 16,
  }
});

