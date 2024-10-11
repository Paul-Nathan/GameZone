import React from 'react'
import { StyleSheet, View, Text, Button } from "react-native";
import { GlobalStyles } from '../styles/Global';

export default function Home({navigation}) {
    const pressHandler = () => {
        navigation.navigate("ReviewDetails")
    }
  return (
    <View style={GlobalStyles.container}>
        <Text style={GlobalStyles.titleText}>Home Screen</Text>
        <Button title='go to review dets' onPress={pressHandler}/>
    </View>
  )
}

