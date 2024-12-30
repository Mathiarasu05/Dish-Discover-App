import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

const WelcomScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1,backgroundColor:"white"}}>
      <Text style={styles.prem}>10K+ Premium Recipes</Text>
      <Image style={styles.image1} source={require('../../images/ig1.webp')}></Image>
      
      <Text style={styles.slogans}>Unlock The Flavors of Joy</Text>
      <Text style={styles.nxts}>With Our Recipe App</Text>
      <Text style={styles.fin}>Find best recipes for cooking !</Text>
      <TouchableOpacity
      onPress={() => navigation.navigate("Recipe")}
      style={styles.but1}>
        <Text style={styles.start}>Start Cooking <FontAwesome name={"arrow-right"} size={18} color="white"></FontAwesome> </Text>
      </TouchableOpacity>
      <Text style={styles.terms}>Terms & Condition </Text>
    </View>
  )
}

export default WelcomScreen

const styles = StyleSheet.create({
    prem:{
      marginTop:50,
      textAlign:"center",
      fontSize:18,
      color:"#00bfff",
      fontWeight:"600",
    },
    image1:{
        width:"100%",
        height:400,
        marginLeft:"5%",
    },
    slogans:{
        textAlign:"center",
        fontSize:25,
        fontWeight:"500",
        color:"#3c444c",
        marginTop:-20,
    },
    nxts:{
        textAlign:"center",
        fontSize:25,
        fontWeight:"500",
        color:"#3c444c"
    },
    
    fin:{
        textAlign:"center",
        marginTop:50,
        color:"#00bfff",
        fontSize:18,
        fontWeight:"600",
    },
    but1:{
      //  #f96163  #00bfff
        backgroundColor:"#00bfff",
        borderRadius: 18,
        paddingVertical: 18,
        width: "80%",
        alignItems:"center",
        marginLeft:36,
        marginTop:33,
    },
    start:{
        fontSize:20,
        color:"#fff",
        fontWeight:"700",
        marginTop:-2,
    },
    terms:{
        textAlign:"center",
        marginTop:43,
        color:"black",
        fontSize:15,
    }
})