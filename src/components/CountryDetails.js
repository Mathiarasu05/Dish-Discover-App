import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { country } from '../constant'
const CountryDetails = () => {
  return (
    <View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {country.map((fname, index) => {
          return(
              <View style={{
                  backgroundColor: index ===1 ?"#00bfff": "white", 
                  marginRight:10,
                  marginLeft:10,
                  borderRadius:15,
                  paddingHorizontal:16,
                  paddingVertical:10,
                  shadowColor:"#000", 
                  shadowOffset:{ width: 0, height:8}, 
                  shadowOpacity:0.6,
                  shadowRadius:7,
                  marginVertical:16,
                  elevation:8,
                  borderWidth:1,
                  borderColor:"#00bfff"}}>
                  <Text style={{color: index === 0 && "black",fontSize:18,fontWeight:"500"}}>{fname.fname}</Text>
              </View>
          )
      })
      }
    </ScrollView>
  </View>
  )
}

export default CountryDetails

const styles = StyleSheet.create({})