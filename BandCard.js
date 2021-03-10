import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native'

export default function BandCard() {

  return (
    <View style={styles.container}>
      <Image style={styles.bands} source={require('./assets/aerosmith.jpg')} />
      <Text style={styles.bandText}>Aerosmith</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "white",
    marginTop: 16,
    flex: 1,
    height: '100%',
    width: '90%'
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
});