import { View, Text, ScrollView ,Image} from 'react-native'
import React from 'react'
import { categories } from '../constant'

const CategoriesFliter = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => {
            return(
                <View style={{
                    backgroundColor: index ===0 ?"#00bfff": "white", 
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
                    <Image style={{ width:50,height:50,marginLeft:12,borderRadius:50}} source={category.image}></Image>
                    <Text style={{color: index === 0 && "white",fontSize:18,fontWeight:"500"}}>{category.category}</Text>
                </View>
            )
        })
        }
      </ScrollView>
      
    </View>
  )
}

export default CategoriesFliter