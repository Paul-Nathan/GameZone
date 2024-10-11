import React from 'react'
import { StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from '../styles/Global';

export default function ReviewDetails({navigation, route}) {
   
  return (
    <View style={GlobalStyles.container}>
        <Text>{route.params.title}</Text>
        <Text>{route.params.body}</Text>
        <Text>{route.params.rating}</Text>
    </View>
  )
}