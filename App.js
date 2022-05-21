import React from 'react';
import { View, ActivityIndicator } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold, Montserrat_600SemiBold, useFonts } from "@expo-google-fonts/montserrat";
import { RFPercentage } from 'react-native-responsive-fontsize';

//screens
import LoginScreen from './app/screens/LoginScreen';
import SignupScreen from './app/screens/SignupScreen';
import MealPlanScreen from './app/screens/MealPlan9Screen';
import PersonalizedMealPlanScreen from './app/screens/PersonalizedMealPlanScreen';

//config
import Colors from './app/config/Colors';

const Stack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    Montserrat_600SemiBold
  })

  if (!fontsLoaded) return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
    <ActivityIndicator size={RFPercentage(6)} color={Colors.primary} />
  </View>

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="MealPlanScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="MealPlanScreen" component={MealPlanScreen} />
        <Stack.Screen name="PersonalizedMealPlanScreen" component={PersonalizedMealPlanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// Happy Coding :)


