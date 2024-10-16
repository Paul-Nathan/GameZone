import React from 'react'
import { StyleSheet, View, Text, Image } from "react-native";
import { GlobalStyles, images } from '../styles/Global';
import Card from '../shared/Card';

export default function ReviewDetails({navigation, route}) {
  const rating = route.params.rating
   
  return (
    <View style={GlobalStyles.container}>
       <Card>
        <Text style={GlobalStyles.details}>{route.params.title}</Text>
        <Text style={GlobalStyles.details}>{route.params.body}</Text>
        <View style={styles.rating}>
          <Text style={GlobalStyles.details}>GameZone rating: </Text>
          <Image source={images.ratings[rating]}/>
        </View>
        {/* <Text>{route.params.rating}</Text> */}
       </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  
})