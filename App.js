import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { Ionicons, Entypo, FontAwesome5, MaterialIcons, Foundation } from "@expo/vector-icons";
import Home from "./src/screens/Home";
import { Text } from "native-base";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyGroups from "./src/screens/MyGroups";
import Recipes from "./src/screens/Recipes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Account from "./src/screens/Account";




const Tab = createBottomTabNavigator();


export default function App() {
  const [loaded, setLoaded] = useState(false);
  const renderer = () => {
    if (!loaded) return <Text>Loading...</Text>;
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen
                name="Home"
                component={Home}
                options={{
                  tabBarLabel: "Achievements",
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="medal" size={size} color={color} />
                  ),
                }}
              />
              <Tab.Screen
                name="MyGroups"
                component={MyGroups}
                options={{
                  tabBarLabel: "My Groups",
                  tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="people" size={size} color={color} />
                  ),
                }}
              />
              <Tab.Screen
                name="Recipes"
                component={Recipes}
                options={{
                  tabBarLabel: "Recipes",
                  tabBarIcon: ({ color, size }) => (
                    <Foundation name="page-copy" size={size} color={color} />
                  ),
                }}
              />
              <Tab.Screen
                name="Account"
                component={Account}
                options={{
                  tabBarLabel: "Account",
                  tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="person" size={size} color={color} />
                  ),
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
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
