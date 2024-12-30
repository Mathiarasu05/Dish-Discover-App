import { StyleSheet, Text, View ,Image, SafeAreaView, Pressable, ScrollView} from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { AirbnbRating } from 'react-native-ratings'
const RecipeDetailScreen = ({ navigation, route }) => {
    const {item} = route.params;

    console.log(item);
  return (
    <View style={{ backgroundColor: item.color, flex: 1}}>
        <SafeAreaView style={{flexDirection:"row",marginTop:35,marginLeft:15}}>
            <Pressable style={{ flex:1,marginTop:10}} onPress={() => navigation.goBack()}>
                 <FontAwesome name={"arrow-circle-left"} size={28} color="white" />
            </Pressable>
            <Pressable onPress={() => alert("Item is Added To Favourite")}>
               <FontAwesome name={"heart-o"} size={28} color="white" style={{marginRight:15,marginTop:10}}/>
            </Pressable>
        </SafeAreaView>
      <View
      style={{
        backgroundColor:"#f0f8ff",
        flex:1,
        marginTop: 150,
        borderTopLeftRadius: 55,
        borderTopRightRadius: 55,
        alignItems: "center",
        paddingHorizontal:17,
      }}>
     
      <View
      style={{
        height:250,
        width:250,
        position:"absolute",
        top: -150,
      }}>
         <Image style={{ width:"100%", height:"100%",resizeMode:"contain",borderRadius:140}} source={item.image}></Image>
      </View>

      <Text style={{ marginTop:120, fontSize:22,fontWeight:"bold"}}>
        {item.name}
      </Text>
      <View style={{flex:1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={{ fontSize:20, marginVertical:16,textAlign:"justify"}}>
        {item.description}
      </Text>

      <View style={{ flexDirection:"row",justifyContent:"space-between"}}>
          <View style={{ backgroundColor:"#00bfff",paddingVertical:10,borderRadius:10,alignItems:"center",width:80,borderColor:"white",borderWidth:2}}>
            <Text style={{ fontSize:20,backgroundColor:"white",padding:2,borderRadius:10,marginTop:15}}>🕒</Text>
            <Text style={{ fontSize:15, fontWeight:400,marginTop:1}}>{item.time}</Text>
          </View>
          <View style={{ backgroundColor:"#00bfff",paddingVertical:10,borderRadius:10,alignItems:"center",width:80,borderColor:"white",borderWidth:2}}>
            <Text style={{ fontSize:20,backgroundColor:"white",padding:2,borderRadius:10,marginTop:15}}>🍽</Text>
            <Text style={{ fontSize:15, fontWeight:400,marginTop:1}}>{item.difficulty}</Text>
          </View>
          <View style={{ backgroundColor:"#00bfff",paddingVertical:10,borderRadius:10,alignItems:"center",width:80,borderColor:"white",borderWidth:2}}>
            <Text style={{ fontSize:20,backgroundColor:"white",padding:2,borderRadius:10,marginTop:15}}>⭐</Text>
            <Text style={{ fontSize:15, fontWeight:400,marginTop:1}}>{item.rating}</Text>
          </View>
          <View style={{ backgroundColor:"#00bfff",paddingVertical:10,borderRadius:10,alignItems:"center",width:80,borderColor:"white",borderWidth:2 }}>
            <Text style={{ fontSize:20,backgroundColor:"white",padding:2,borderRadius:10,marginTop:15}}>🔥</Text>
            <Text style={{ fontSize:15, fontWeight:400,marginTop:1}}>{item.calories}</Text>
          </View>
      </View>
      <View style={{ alignSelf: "flex-start",marginVertical:12}}>
             <Text style={{fontSize:23, fontWeight:"500",marginTop:6}} >Ingredients</Text>
             {
                item.ingredients.map((ingredients,index) => {
                    return(
                    <View style={{flexDirection:"row", alignItems: "center",marginVertical:3}}
                    key={index}
                    >
                        <View style={{ backgroundColor:"#00bfff", height:10,width:10,borderRadius:5}}></View>
                        <Text style={{ fontSize:18, marginLeft: 10,textAlign:"justify"}}>{ingredients}</Text>
                    </View>
                    );
                })
             }
      </View>
      <View style={{ alignSelf: "flex-start",marginVertical:12}}>
             <Text style={{fontSize:22, fontWeight:"500",marginTop:6}} >Steps to Make</Text>
             {
                item.steps.map((steps, index) => {
                    return(     
                        <Text 
                        key={index}
                        style={{ fontSize:18, marginLeft: 6, marginVertical:7,textAlign:"justify"}}>{`${index + 1}) ${steps}`}</Text>
                    );
                })
             }
      </View>
        <View style={{height:150,width:"100%",backgroundColor:"white",borderRadius:25,borderLeftWidth:6,borderLeftColor:"#00bfff",marginBottom:20}}>
          <Text style={{fontSize:20,textAlign:"center",marginTop:3,fontWeight:"bold",color:"#00bfff"}}>Rating</Text>
            <AirbnbRating reviews={["Poor","Very Bad","Bad","Ok","Good","Very Good","Excellent",]}
            count={7}
            defaultRating={4}
            selectedColor="green"
            unSelectedColor="gray"
            reviewColor="red"
            size={25}/>
        </View>
      </ScrollView>
      </View>
      </View>
    </View>
  )
}

export default RecipeDetailScreen

const styles = StyleSheet.create({})