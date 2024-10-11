import React from 'react'
import { StyleSheet, View, Text, Button } from "react-native";
import { GlobalStyles } from '../styles/Global';

export default function ReviewDetails({navigation}) {
    const pressHandler = () => {
        navigation.goBack("Home")
    }
  return (
    <View style={GlobalStyles.container}>
        <Text style={GlobalStyles.titleText}>ReviewDetails Screen</Text>
        <Button title= 'back to home' onPress={pressHandler}/>
    </View>
  )
}