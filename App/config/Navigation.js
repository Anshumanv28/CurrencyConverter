import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Options from "../screens/Options";
import CurrencyList from "../screens/CurrencyList";

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  // <MainStack.Navigator headerMode="none" initialRouteName="Options">  //depreciated so using {headerShown: false} instead
  <MainStack.Navigator>
    <MainStack.Screen
      name="Home"
      component={Home}
      options={({ title: "Home" }, { headerShown: false })}
    />
    <MainStack.Screen
      name="Options"
      component={Options}
      options={{ title: "Options" }}
    />
    <MainStack.Screen
      name="CurrencyList"
      component={CurrencyList}
      options={({ route }) => ({ title: route.params.title })}
    />
  </MainStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);
