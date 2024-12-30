import { StyleSheet, Text, View,SafeAreaView,TextInput,FlatList, Pressable } from 'react-native'
import React,{ useState} from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
const PersonalizedListScreen = () => {
    const navigation = useNavigation();
    const [recipes, setRecipes] = useState([
      
      ]);
    
      const [newRecipe, setNewRecipe] = useState('');
    
      const addRecipe = () => {
        if (newRecipe.trim() !== '') {
          setRecipes([...recipes, { id: String(recipes.length + 1), title: newRecipe }]);
          setNewRecipe('');
        }
      };
    
      const renderItem = ({ item }) => (
        <View style={styles.recipeItem}>
          <Text>{item.title}</Text>
        </View>
      );
  return (
    <SafeAreaView style={styles.cont}>
        <Pressable style={{marginTop:1,marginLeft:15,}} onPress={() => navigation.goBack()}>
                 <FontAwesome style={{color:"black"}} name={"arrow-circle-left"} size={28} color="white" />
            </Pressable>
        <Text style={styles.title}>Personalized Recipe List</Text>
  <View style={styles.bod}>
    <View style={styles.header}>
      <TextInput
        style={styles.input}
        placeholder="Enter a new recipe"
        value={newRecipe}
        onChangeText={(text) => setNewRecipe(text)}
      />
      <Pressable>
      <Text title="Add Recipe" onPress={addRecipe} style={styles.buttons}>Add Recipe</Text>
      </Pressable>
    </View>
    <FlatList
      data={recipes}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
    </View>
  </SafeAreaView>
  )
}

export default PersonalizedListScreen

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        marginTop: 50,
      },
      bod:{
       width:"87%",
       height:"90%",
       marginLeft:23,
       backgroundColor:"white",
       borderLeftWidth:5,
       borderLeftColor:"#00bfff",
       borderRadius:20,
       shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 8,
      },
      buttons:{
        width:"50%",
        padding:8,
        borderWidth:2,
        borderColor:"#00bfff",
        marginLeft:70,
        textAlign:"center",
        fontWeight:"bold",
        borderRadius:10,
        marginTop:10,
      },
      header: {
        padding: 16,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft:30,
        marginTop:-30,
        marginLeft:55,
        color:"#00bfff"
      },
      input: {
        width:"100%",
        backgroundColor:"#e6e6fa",
        flexDirection:"row",
        paddingVertical: 15,
        borderRadius:10,
        paddingHorizontal:16,
        marginVertical:15,
        borderBottomWidth:2,
        borderBottomColor:"#00bfff"
      },
      recipeItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#00bfff',
      },
    
})