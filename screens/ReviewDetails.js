import React from 'react'
import { StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from '../styles/Global';
import Card from '../shared/Card';

export default function ReviewDetails({navigation, route}) {
   
  return (
    <View style={GlobalStyles.container}>
       <Card>
        <Text>{route.params.title}</Text>
        <Text>{route.params.body}</Text>
        <Text>{route.params.rating}</Text>
       </Card>
    </View>
  )
}