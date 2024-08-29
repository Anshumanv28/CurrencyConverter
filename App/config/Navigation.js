import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import Home from "../screens/Home";
import Options from "../screens/Options";
import CurrencyList from "../screens/CurrencyList";
import colors from "../constants/colors";
import { ConversionContextProvider } from "../util/ConversionContext";

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  // <MainStack.Navigator headerMode="none" initialRouteName="Options">  //depreciated so using {headerShown: false} instead
  <MainStack.Navigator>
    <MainStack.Screen
      name="Home"
      component={Home}
      options={({ title: "Home" }, { headerShown: false })}
    />
    {/* <MainStack.Screen
      name="Options"
      component={Options}
      options={{ title: "Options" }}
    /> */}
    {/* <MainStack.Screen
      name="CurrencyList"
      component={CurrencyList}
      options={({ route }) => ({ title: route.params.title })}
    /> */}
  </MainStack.Navigator>
);

const ModalStack = createStackNavigator();
const ModalStackScreen = () => (
  <ModalStack.Navigator screenOptions={{ presentation: "modal" }}>
    <ModalStack.Screen
      name="Main" //could have been home but we are using MainStackScreen and then rendering our modal stack above it
      component={MainStackScreen}
      options={{ headerShown: false }}
    />
    <ModalStack.Screen
      name="Options"
      component={Options}
      options={{ headerShown: false }}
    />
    <ModalStack.Screen
      name="CurrencyList"
      component={CurrencyList}
      options={({ navigation, route }) => ({
        title: route.params && route.params.title,
        headerLeft: null,
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={{ paddingHorizontal: 10 }}
          >
            <Entypo name="cross" size={30} color={colors.blue} />
          </TouchableOpacity>
        ),
      })}
    />
  </ModalStack.Navigator>
);

export default () => (
  <NavigationContainer>
    {/* <MainStackScreen /> */}
    <ConversionContextProvider>
      <ModalStackScreen />
    </ConversionContextProvider>
  </NavigationContainer>
);
