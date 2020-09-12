import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading(){
    return(
        <View style={styles.redView}>
            <Text style={styles.text}>getting the fucking weather</Text>
        </View>
    )
}

const styles = StyleSheet.create({ 
    redView:{
      flex : 1,
      backgroundColor:"#f00",
      justifyContent:'center',
      paddingHorizontal:90,
      paddingVertical:10
    },
    text: {
        color:"#fff",
        fontSize:20
    }
});