import { Pressable, SafeAreaView, StyleSheet, Text, View, ScrollView, FlatList ,TextInput} from 'react-native'
import React ,{useState}from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { recipeList } from '../constant';

const ProfileScreen = () => {
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
    
     <>
      <ScrollView >
        <Text style={styles.appn}>DishDiscover</Text>
        <Ionicons style={styles.sett} name="settings" size={30}></Ionicons>
        <FontAwesome style={styles.icon} name="bell-o" size={25}></FontAwesome>
       
        <TextInput style={styles.inputf} placeholder="Search for delicious recipes" onChangeText={(text)=> setUserInput(text)}></TextInput> 
        <FontAwesome style={styles.iconcc} name="search" size={25} color="#00bfff"></FontAwesome>
          <FlatList
            data={recipeList}
            renderItem={({ item }) => (
              <Pressable
              onPress={() => navigation.navigate("RecipeDetails",{item: item})}
              >
                <View style={{
                  marginTop:25,
                  marginLeft:30,
                  backgroundColor:"white",
                  width:250,
                  padding:12,
                  borderLeftWidth:5,
                  borderLeftColor:"#00bfff",
                  borderTopRightRadius:10,
                  borderBottomRightRadius:10
                }}>
                  {fliterData(item)}
                </View>
              </Pressable>
            )}
          />
          <View style={styles.favo}>
            <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold", marginTop: 20 }}><FontAwesome name="heart-o" size={25} style={{ alignItems: "center" }}></FontAwesome> Favorite Recipes       </Text>
          </View>
          <Pressable
            onPress={() => navigation.navigate("Personalized")}>
            <View style={styles.addn}>
              <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold", marginTop: 20 }}><FontAwesome name="plus-circle" size={25}></FontAwesome> Personalized Recipe</Text>
            </View>
          </Pressable>
          <View >
            <Text style={{ marginTop: 50, marginLeft: 160 }}>V.0.73.2</Text>
          </View>
          <View style={styles.lasts}>
            <Text style={{ marginLeft: 60, marginTop: 8, color: "red" }}><FontAwesome name="instagram" size={30}></FontAwesome>       <FontAwesome name="whatsapp" size={30}></FontAwesome>       <FontAwesome name="facebook" size={30}></FontAwesome>       <FontAwesome name="twitter" size={30}></FontAwesome></Text>
          </View>
          </ScrollView>
      </>
    
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  appn: {
    marginTop: 50,
    marginLeft: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: "#00bfff"
  },
  icon: {
    marginLeft: 310,
    marginTop: -30,
    color: "red",
  },
  sett: {
    marginLeft: 265,
    marginTop: -25,
    color: "#00bfff",
  },
  favo: {
    width: "80%",
    height: 80,
    backgroundColor: "white",
    marginLeft: 30,
    borderRadius: 20,
    marginTop: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#00bfff"
  },
  addn: {
    width: "80%",
    height: 80,
    backgroundColor: "white",
    marginLeft: 30,
    borderRadius: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#00bfff"
  },
  lasts: {
    width: "80%",
    height: 50,
    backgroundColor: "white",
    marginLeft: 30,
    borderRadius: 10,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
    borderLeftWidth: 3,
    borderLeftColor: "#00bfff",
    marginBottom:40,
  },
  inputf:{
    marginTop:20,
   
    marginLeft:10,
    backgroundColor:"#fff",
    flexDirection:"row",
    paddingVertical: 8,
    borderRadius:20,
    paddingHorizontal:14,
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
    borderBottomColor:"#00bfff",
    color:"#808080",
    fontSize:15,
    width:"80%",
  },
  iconcc:{
    marginLeft:308,
    marginTop:-50,
    
  },
})