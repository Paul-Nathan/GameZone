import React from 'react'
import { Formik } from 'formik';
import { View, StyleSheet, Text, TextInput, Button  } from 'react-native';
import {GlobalStyles} from'../styles/Global';

export default function ReviewForm({addReview}) {
  return (
    <View style={GlobalStyles.container}>
        <Formik
        initialValues={{title: '', body:'', rating:''}}
        onSubmit={(values, actions) => {
            //The actions as one of the parameter is being called to reset the form below
            actions.resetForm();
            addReview(values)
        }}
        >
        {(props) => (
            <View>
                <TextInput
                style={GlobalStyles.input}
                placeholder='Review title'
                onChangeText={props.handleChange('title')}
                value={props.values.title}
                />
                <TextInput
                multiline
                style={GlobalStyles.input}
                placeholder='Review body'
                onChangeText={props.handleChange('body')}
                value={props.values.body}
                />
                <TextInput
                style={GlobalStyles.input}
                placeholder='Rating (1 - 5)'
                onChangeText={props.handleChange('rating')}
                value={props.values.rating}
                keyboardType="numeric"
                />

                <Button title= 'submit' color='#FF6F61' onPress={props.handleSubmit}/>
            </View>
        )}
        </Formik>
    </View>
  )
}
