import React, {useState} from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { GlobalStyles } from '../styles/Global';
import Card from '../shared/Card';

export default function Home({navigation}) {
    const [reviews, setReviews] = useState([
        {title: 'Saint Seiya, The Lost Canvas', rating: 5, body:'Chivalry Adventure', key:'1'},
        {title: 'Dragon Ball Z IV', rating: 5, body:'Heroes Adventure', key:'2'},
        {title: 'FIFA 22', rating: 3, body:'Football simulator', key:'3'},
    ])
  return (
    <View style={GlobalStyles.container}>
        <FlatList
        data={reviews}
        renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate("ReviewDetails", item)}>
                 <Card>
                 <Text style ={GlobalStyles.titleText}>{item.title}</Text>
                 </Card>
            </TouchableOpacity>
        )}
        />

    </View>
  )
}

