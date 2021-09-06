import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons'
import Chat from "./screens/Chats"


const Home = ()=>{
  return(
    <Text>Hi, Home screen</Text>
  )
}

const Settings = ()=>{
  return(
    <Text>Hi, Settings screen</Text>
  )
}

const Tabs = createBottomTabNavigator()

const App=()=>{
  return (
    <NavigationContainer>
      <Tabs.Navigator
       screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'chatbubbles'
              : 'chatbubbles-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tabs.Screen name="Home" component={Home}/>
        <Tabs.Screen name="Settings" component={Settings}/>
      </Tabs.Navigator>
    </NavigationContainer>
  )
}

export default App;