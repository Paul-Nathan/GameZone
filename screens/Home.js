import React, {useState} from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ImageBackground, Modal } from "react-native";
import { GlobalStyles } from '../styles/Global';
import Card from '../shared/Card';
import {MaterialIcons} from '@expo/vector-icons';
import ReviewForm from './ReviewForm';


export default function Home({navigation}) {
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        {title: 'Saint Seiya, The Lost Canvas', rating: 5, body:'Chivalry Adventure', key:'1'},
        {title: 'Dragon Ball Z IV', rating: 5, body:'Heroes Adventure', key:'2'},
        {title: 'FIFA 22', rating: 3, body:'Football simulator', key:'3'},
    ])

    const addReview = (review) => {
      review.key = Math.random().toString();
      setReviews((currentReviews) => {
        return [review, ...currentReviews]
      })
      setModalOpen(false);
    }

  return (
    <ImageBackground source={require('../assets/game_bg.png')} style={GlobalStyles.container}>

      <Modal visible={modalOpen} animationType='slide'>
        <View style={styles.modalContent}>
         <MaterialIcons
            name='close'
            size={24}
            style={styles.modalToggleClose}
            onPress={() => setModalOpen(false)}
         />
          <ReviewForm addReview={addReview}/>
        </View>
      </Modal>

      <MaterialIcons
       name="add"
       size={24}
       style={styles.modalToggle}
       onPress={() =>setModalOpen(true)}
       />

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

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  modalToggle:{
    marginBottom:10,
    borderWidth: 1,
    borderColor:'#f2f2f2',
    padding:10,
    borderRadius:10,
    alignSelf:'center'
  },
  modalToggleClose:{
    marginBottom:10,
    borderWidth: 1,
    borderColor:'#f2f2f2',
    padding:10,
    borderRadius:10,
    alignSelf:'center',
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent:{
    flex: 1,
  }
})

