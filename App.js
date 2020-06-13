import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { Ionicons, Entypo } from "@expo/vector-icons";
import Home from "./src/screens/Home";
import { Text } from "native-base";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyGroups from "./src/screens/MyGroups";
import Recipes from "./src/screens/Recipes";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();


const Account = () => {
  return <Text>Hey3</Text>
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const renderer = () => {
    if (!loaded) return <Text>Loading...</Text>;
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarLabel: "Achievements",
                tabBarIcon: ({ color, size }) => (
                  <Entypo name="plus" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="MyGroups"
              component={MyGroups}
              options={{
                tabBarLabel: "My Groups",
                tabBarIcon: ({ color, size }) => (
                  <Entypo name="plus" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Recipes"
              component={Recipes}
              options={{
                tabBarLabel: "Recipes",
                tabBarIcon: ({ color, size }) => (
                  <Entypo name="plus" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Account"
              component={Account}
              options={{
                tabBarLabel: "Account",
                tabBarIcon: ({ color, size }) => (
                  <Entypo name="plus" size={size} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  };
  const loadFont = async () => {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    setLoaded(true);
  };
  useEffect(() => {
    loadFont();
  });
  return <>{renderer()}</>;
}
