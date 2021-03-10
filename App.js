import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableHighlight, TextInput, ScrollView } from 'react-native';
import YoutubeEmbed from './YoutubeEmbed'
import Navbar from './Navbar'


export default function App() {
  return (
    <View style={styles.section}>
      <ScrollView>
        <StatusBar 
          style="auto"
          backgroundColor="white"          />
        <View style={styles.mainContainer}>
          <Navbar></Navbar>

          <View style={styles.container}>
            <YoutubeEmbed style={styles.youtubeEmbed} videoId={"yiuBxuqb7Ko"}/>
          </View>

          <TextInput style={styles.search}   
            placeholder="Search for Artist..."
            placeholderTextColor="gray" 
          />
          <TextInput style={styles.filter}
            placeholder="Filter by Category..."
            placeholderTextColor="gray" 
          />

          <View style={styles.container}>
            <Image style={styles.bands} source={require('./assets/aerosmith.jpg')} />
            <Text style={styles.bandText}>Aerosmith</Text>
          </View>

          <View style={styles.container}>
            <Image style={styles.bands} source={require('./assets/ariana.webp')} />
          </View>

          <View style={styles.container}>
            <Image style={styles.bands} source={require('./assets/taylor.jpg')} />
          </View>

          <View style={styles.preloader}>
            <Image style={styles.preloaderImage} source={require('./assets/showme.jpg')}  />
            <Text style={styles.text}>Quality Concerts</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 40
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center'
  },
  container: {
    borderWidth: 1,
    borderColor: "white",
    marginTop: 16,
    flex: 1,
    height: '100%',
    width: '90%'
  },
  youtubeEmbed: {
    height: 240,
    width: '100%'
  },
  bands: {
    height: 240,
    width: '100%',
    resizeMode: 'cover',
    flex: 1
  },
  bandsText: {
    color: 'white',
    zIndex: 4,
    position: 'relative'
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
    fontSize: 50,
  },
  search: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: "white",
    marginTop: 16,
    fontSize: 18,
    paddingLeft: 15,
  },
  filter: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: "white",
    marginTop: 16,
    fontSize: 18,
    paddingLeft: 15,
  }
});

