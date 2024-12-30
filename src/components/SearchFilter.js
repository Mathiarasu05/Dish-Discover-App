import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
const SearchFilter = ({ icon, placeholder}) => {
  return (
    <View style={{
        marginTop:23,
        backgroundColor:"#fff",
        flexDirection:"row",
        paddingVertical: 15,
        borderRadius:30,
        paddingHorizontal:16,
        marginVertical:15, 
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 8,
        borderBottomWidth:2,
        borderBottomColor:"#00bfff"
    }}>
      <TextInput style={styles.place}>{placeholder}</TextInput>
      <FontAwesome style={styles.iccc} name={icon} size={25} color="#00bfff" />
    </View>
  )
}

export default SearchFilter

const styles = StyleSheet.create({
      iccc:{
        marginLeft:80,
       
      },
      place:{
        color:"#808080",
        fontSize:15,
        width:"66%",
      }
})