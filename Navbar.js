import React, { useState, useCallback, useRef } from "react";
import { Button, View, Image, Text, StyleSheet } from "react-native";

export default function Navbar() {
  
  return (
    <View style={styles.navbar}>
      <Button title="Home" color="transparent"></Button>
      <Image source={require('./assets/disco_ball.gif')}></Image>
      <Button title="About" style={styles.text} />
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
    paddingHorizontal: 15,
    fontSize: 20,
    backgroundColor: 'black'
  }
});