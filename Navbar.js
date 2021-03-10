import React, { useState, useCallback, useRef } from "react";
import { Button, View, Image, Text, StyleSheet } from "react-native";

export default function Navbar() {
  
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Home</Text>
      <Image source={require('./assets/disco_ball.gif')}></Image>
      <Text style={styles.text}>About</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
    borderTopColor: 'black',
    borderBottomColor: 'black',
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
  },
  text: {
    color: 'white',
    paddingHorizontal: 15,
    fontSize: 20,
  }
});