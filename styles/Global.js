import {StyleSheet} from 'react-native';

 export const GlobalStyles = StyleSheet.create({
    container:{
        flex: 1,
        padding:20
    },
    titleText:{
        fontSize: 18,
        fontWeight:"bold",
        color: '#333'
    },
    paragraph:{
        marginVertical: 8,
        lineHeight: 20,
    },
    details:{
        fontSize: 18,
    },
    input:{
        borderWidth:1,
        borderColor:'#ddd',
        padding: 15,
        fontSize: 18,
        borderRadius: 8,
    },
    errorText:{
        color:'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign:'center'
    }
})

export const images = {
    ratings: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
}