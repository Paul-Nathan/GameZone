import React from 'react'
import { Formik } from 'formik';
import { View, StyleSheet, Text, TextInput, Button} from 'react-native';
import {GlobalStyles} from'../styles/Global';
import * as yup from 'yup';

const ReviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required()
        .test('is-num-1-5', 'Rating must be a number 1-5', (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0;
        })
})

export default function ReviewForm({addReview}) {
  return (
    <View style={GlobalStyles.container}>
        <Formik
        initialValues={{title: '', body:'', rating:''}}
        validationSchema={ReviewSchema}
        onSubmit={(values) => {
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
                onBlur={props.handleBlur('title')}
                />
                <Text style={GlobalStyles.errorText}>{props.touched.title && props.errors.title}</Text>

                <TextInput
                multiline
                style={GlobalStyles.input}
                placeholder='Review body'
                onChangeText={props.handleChange('body')}
                value={props.values.body}
                onBlur={props.handleBlur('body')}
                />
                <Text style={GlobalStyles.errorText}>{props.touched.body && props.errors.body}</Text>

                <TextInput
                style={GlobalStyles.input}
                placeholder='Rating (1 - 5)'
                onChangeText={props.handleChange('rating')}
                value={props.values.rating}
                keyboardType="numeric"
                onBlur={props.handleBlur('rating')}
                />
                <Text style={GlobalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>

                <Button title= 'submit' color='#FF6F61' onPress={props.handleSubmit}/>
            </View>
        )}
        </Formik>
    </View>
  )
}
