import { View, Text , StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native'

const Header = ({ headerText, headerIcon,favoriteIcon }) => {
  
  const navigation = useNavigation();
  return (
    <View style={{ flexDirection: "row"}}>
      <Text style={Styles.texts}>{headerText}</Text>
      <FontAwesome style={Styles.hearts} name={favoriteIcon} size={30} color="#00bfff"/>
      <Pressable
      onPress={() => navigation.navigate("Profile")}
      >
         <FontAwesome style={Styles.headss} name={headerIcon} size={30} color="#00bfff"/>
         </Pressable>
    </View>
  )
}

export default Header

const Styles = StyleSheet.create({
      headss:{
        marginLeft:20,
        marginTop:50
      },
      texts:{
        marginTop:44,
        fontSize:30,
        marginLeft:15,
        fontWeight:"bold",
        color:"#00bfff",
      },
      hearts:{
        marginTop:50,
        marginLeft:70,
      }
})