import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={Home}/>
        <Tabs.Screen name="Settings" component={Settings}/>
      </Tabs.Navigator>
    </NavigationContainer>
  )
}

export default App;