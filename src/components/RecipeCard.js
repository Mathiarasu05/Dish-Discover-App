import { FlatList, StyleSheet, Text, View ,Image, Pressable, TextInput} from 'react-native'
import React, { useState } from 'react'
import { recipeList } from '../constant'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const RecipeCard = () => {
  const navigation = useNavigation();
  const [userInput,setUserInput] = useState("");

  const fliterData = (item)=> {
      if( userInput === ""){
        return (
          <View>
            <Text style={{ fontWeight:"bold"}}>{item.name}</Text>
          </View>
        );
      }

      if (item.name.toLowerCase().includes(userInput.toLowerCase())) {
        return (
          <View>
            <Text>{item.name}</Text>
          </View>
        )
      }
  }
  return (
    <View>
      <View  style={{
        marginTop:10,
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
        <TextInput style={styles.placess} placeholder="Search for delicious recipes" onChangeText={(text)=> setUserInput(text)}></TextInput>
        <FontAwesome style={styles.iconc} name="search" size={25} color="#00bfff"></FontAwesome>
      </View>
      <FlatList 
      data={recipeList}
      renderItem={({ item})=>  (
       <Pressable
       onPress={() => navigation.navigate("RecipeDetails",{item: item})}
       style={{
        marginLeft:7,
        marginRight:9,
        backgroundColor:"white",
        shadowColor:"#000", 
        shadowOffset:{ width: 0, height:8}, 
        shadowOpacity:0.6,
        shadowRadius:7,
        elevation:8,
        borderRadius:18,
        marginVertical:16,
        alignItems:"center",
        paddingHorizontal:8,
        paddingVertical:26,
        borderLeftWidth:3,
        borderLeftColor:"#00bfff",
        }}>
        
        <Image style={styles.imgs} source={item.image}></Image>
        {fliterData(item)}
          <View style={{flexDirection:"row",marginTop:8}}>
            <Text>{item.time}</Text>
            <Text> | </Text>
            <View style={{ flexDirection:"row"}}>
                <Text style={{ marginRight: 4}}>{item.rating}</Text>
                <FontAwesome style={{marginTop:2}} name='star' size={15} color="green"/>
            </View>
          </View>

      </Pressable>)}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent:"space-between",
      }}
      showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default RecipeCard

const styles = StyleSheet.create({
    imgs:{
        width:150,
        height:150,
        resizeMode:"center",
        marginBottom:5,
        borderRadius:80,
    },
    iconc:{
      marginLeft:80,
     
    },
    placess:{
      color:"#808080",
      fontSize:15,
      width:"66%",
    }
})