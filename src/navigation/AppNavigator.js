import { Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomScreen from '../screens/WelcomScreen';
import RecipeScreen from '../screens/RecipeScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PersonalizedListScreen from '../screens/PersonalizedListScreen';
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomScreen}></Stack.Screen>
        <Stack.Screen name="Recipe" component={RecipeScreen}></Stack.Screen>
        <Stack.Screen name="RecipeDetails" component={RecipeDetailScreen}></Stack.Screen>
        <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen>
        <Stack.Screen name="Personalized" component={PersonalizedListScreen}></Stack.Screen>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigator
