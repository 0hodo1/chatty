import React from "react";
// import Chats from './screens/Chats'
import { NavigationContainer } from "@react-navigation/native";
import { Text, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Hi, Home Screen</Text>
      <Button title="Go to Settings screens" onPress={() => {
        navigation.push("Settings")
      }} />
    </SafeAreaView>
  );
};

const Settings = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Hi, Settings Screen</Text>
      <Button title="Go to Home screens" onPress={() => {
        navigation.push("Home")
      }} />
    </SafeAreaView>
  );
};

const MainStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Home" component={Home}></MainStack.Screen>
        <MainStack.Screen
          name="Settings"
          component={Settings}
        ></MainStack.Screen>
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
