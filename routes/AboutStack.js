// import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from '../screens/About';
import Header from "../shared/Header";
import React from "react";

const Stack = createNativeStackNavigator()

export default function AboutStack() {
  return(
        <Stack.Navigator>
            <Stack.Screen name="About" component={About} options={({navigation})=>{
                return{
                    
                        headerTitle: () => <Header navigation={navigation} title='About GameZone'/>,
                        headerStyle: {backgroundColor: '#FF6F61'},
                        height:60
                    
                }
            }}/>
            
        </Stack.Navigator>
  )
}



