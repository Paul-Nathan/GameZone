import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { GlobalStyles } from '../styles/Global';

export default function About() {
  return (
    <ImageBackground source={require('../assets/game_bg.png')} style={GlobalStyles.container}>
        <Text style={GlobalStyles.titleText}>About Screen</Text>
    </ImageBackground>
  )
}