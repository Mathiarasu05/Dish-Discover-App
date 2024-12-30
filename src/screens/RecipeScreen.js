import { SafeAreaView,  StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import Header from '../components/Header'
import SearchFilter from '../components/SearchFilter'
import CategoriesFliter from '../components/CategoriesFliter'
import RecipeCard from '../components/RecipeCard'
import CountryDetails from '../components/CountryDetails'

const RecipeScreen = () => {
  return (
  
   <SafeAreaView style={{ flex:1 }}>
     <Header headerText={"DishDiscover"} headerIcon={"user"} favoriteIcon={"heart-o"} />
    {/* <SearchFilter icon="search" placeholder={"Search for delicious recipes"} /> */}
  <ScrollView contentContainerStyle={styles.scrollViewContent}>
     <View style={{marginTop:9}}>
      <Text style={styles.cat}>Categories</Text>
      <CategoriesFliter />
     </View>
    
     <View style={{marginTop:9}}>
      <Text style={styles.cat}>World Cuisine</Text>
      <CountryDetails />
     </View>

     <View style={{marginTop:10,flex: 1}}>
      <Text style={styles.cat}>Popular Recipes</Text>
      <RecipeCard />
     </View>
    </ScrollView>
   </SafeAreaView>
   
  )
}

export default RecipeScreen;
const styles = StyleSheet.create({
  cat:{
    fontSize:23,
    fontWeight:"bold",
    marginLeft:13,
    marginTop:15,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  scrollViewContent:{
    flexGrow: 1,
  },
})