// handling keyboard the simple way
// import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { format } from "date-fns";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import colors from "../constants/colors";
import { ConversionInput } from "../components/ConversionInput";
import { Button } from "../components/Button";
import { KeyboardSpacer } from "../components/KeyboardSpacer";
import { ConversionContext } from "../util/ConversionContext";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  content: {
    paddingTop: screen.height * 0.1,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logoBackground: {
    width: screen.width / 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  textHeader: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    color: colors.white,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 10,
  },
  header: {
    alignItems: "flex-end",
    marginHorizontal: 20,
  },
});

export default ({ navigation }) => {
  const {
    baseCurrency,
    quoteCurrency,
    swapCurrencies,
    setBaseCurrency,
    setQuoteCurrency,
  } = useContext(ConversionContext);
  const [value, setValue] = useState("100");

  const conversionRate = 0.89824;
  const date = "2020-03-23";

  const [scrollEnabled, setScrollEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <ScrollView scrollEnabled={scrollEnabled}>
        <SafeAreaView style={styles.header}>
          <TouchableOpacity onPress={() => navigation.push("Options")}>
            <Entypo name="cog" size={32} color={colors.white} />
          </TouchableOpacity>
        </SafeAreaView>

        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/background.png")}
              style={styles.logoBackground}
              resizeMode="contain"
            />
            <Image
              source={require("../assets/images/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.textHeader}>Currency Converter</Text>
          <View style={styles.inputContainer}>
            <ConversionInput
              text={baseCurrency}
              value={value}
              onButtonPress={() =>
                navigation.push("CurrencyList", {
                  title: "Base Currency",
                  activeCurrency: baseCurrency,
                  onChange: (currency) => setBaseCurrency(currency),
                })
              }
              keyboardType="numeric"
              onChangeText={(text) => setValue(text)}
            />
            <ConversionInput
              text={quoteCurrency}
              value={
                value && `${(parseFloat(value) * conversionRate).toFixed(2)}`
              }
              editable={false}
              onButtonPress={() =>
                navigation.push("CurrencyList", {
                  title: "Quote Currency",
                  activeCurrency: quoteCurrency,
                  onChange: (currency) => setQuoteCurrency(currency),
                })
              }
            />
          </View>
          <Text style={styles.text}>
            {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(
              new Date(date),
              "MMM do, yyyy",
            )}`}
          </Text>
          <Button text="Reverse Currencies" onPress={() => swapCurrencies()} />
          <KeyboardSpacer onToggle={(visible) => setScrollEnabled(visible)} />
        </View>
      </ScrollView>
    </View>
  );
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//handling keyboard using states and useEffect
// import React, { useState, useEffect } from "react";
// import {
//   View,
//   StyleSheet,
//   StatusBar,
//   Image,
//   Dimensions,
//   Text,
//   ScrollView,
//   Keyboard,
// } from "react-native";
// import { format } from "date-fns";
// import { ConversionInput } from "../components/ConversionInput";
// import { Button } from "../components/Button";

// import colors from "../constants/colors";

// const screen = Dimensions.get("window");

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.blue,
//     // justifyContent: "center",
//     // paddingTop: screen.height * 0.2,
//   },
//   content: {
//     paddingTop: screen.height * 0.2,
//   },
//   logoContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   logoBackground: {
//     width: screen.width * 0.45,
//     height: screen.width * 0.45,
//   },
//   logo: {
//     position: "absolute", //allows to position the logo on top of the background
//     width: screen.width * 0.25,
//     height: screen.width * 0.25,
//   },
//   textHeader: {
//     color: colors.white,
//     fontWeight: "bold",
//     fontSize: 30,
//     marginVertical: 20,
//     textAlign: "center",
//   },
//   text: {
//     color: colors.white,
//     fontSize: 14,
//     textAlign: "center",
//   },
// });

// export default () => {
//   const baseCurrency = "USD";
//   const quoteCurrency = "GBP";
//   const conversionRate = 0.8345;
//   const date = new Date();
//   const [scrollEnabled, setScrollEnabled] = useState(false);

//   useEffect(() => {
//     const showListner = Keyboard.addListener("keyboardDidShow", () => {
//       setScrollEnabled(true);
//     });

//     const hideListner = Keyboard.addListener("keyboardDidHide", () => {
//       setScrollEnabled(false);
//     });

//     return () => {
//       showListner.remove();
//       hideListner.remove();
//     };
//   }, []);

//   return (
//     <View style={styles.container}>
//       <ScrollView scrollEnabled={scrollEnabled}>
//         <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
//         <View style={styles.content}>
//           <View style={styles.logoContainer}>
//             <Image
//               source={require("../assets/images/background.png")}
//               style={styles.logoBackground}
//               resizeMode="contain"
//             />
//             <Image
//               source={require("../assets/images/logo.png")}
//               style={styles.logo}
//               resizeMode="contain"
//             />
//           </View>

//           <Text style={styles.textHeader}>Currency Converter</Text>

//           <ConversionInput
//             text={baseCurrency}
//             value="123"
//             onButtonPress={() => alert("todo!")}
//             onChangeText={(text) => console.log("text", text)}
//             keyboardType="numeric"
//           />
//           <ConversionInput
//             text={quoteCurrency}
//             value="123"
//             onButtonPress={() => alert("todo!")}
//             // keyboardType="numeric"
//             editable={false} //to disable the input field
//           />

//           <Text style={styles.text}>
//             {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(date, "MMMM do, yyyy")}.`}
//           </Text>

//           <Button text="Reverse Currencies" onPress={() => alert("Todo!")} />
//         </View>
//         <View style={{ height: screen.height }} />
//       </ScrollView>
//     </View>
//   );
// };

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// the best way to handle keyboard (looks outdated to me, but good state management)
// import React, { useState } from "react";
// import {
//   View,
//   StyleSheet,
//   StatusBar,
//   Image,
//   Dimensions,
//   Text,
//   ScrollView,
// } from "react-native";
// import { format } from "date-fns";
// import { ConversionInput } from "../components/ConversionInput";
// import { Button } from "../components/Button";
// import { KeyboardSpacer } from "../components/KeyboardSpacer";

// import colors from "../constants/colors";

// const screen = Dimensions.get("window");

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.blue,
//     // justifyContent: "center",
//     // paddingTop: screen.height * 0.2,
//   },
//   content: {
//     paddingTop: screen.height * 0.2,
//   },
//   logoContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   logoBackground: {
//     width: screen.width * 0.45,
//     height: screen.width * 0.45,
//   },
//   logo: {
//     position: "absolute", //allows to position the logo on top of the background
//     width: screen.width * 0.25,
//     height: screen.width * 0.25,
//   },
//   textHeader: {
//     color: colors.white,
//     fontWeight: "bold",
//     fontSize: 30,
//     marginVertical: 20,
//     textAlign: "center",
//   },
//   text: {
//     color: colors.white,
//     fontSize: 14,
//     textAlign: "center",
//   },
// });

// export default () => {
//   const baseCurrency = "USD";
//   const quoteCurrency = "GBP";
//   const conversionRate = 0.8345;
//   const date = new Date();
//   const [scrollEnabled, setScrollEnabled] = useState(false);

//   return (
//     <View style={styles.container}>
//       <ScrollView scrollEnabled={scrollEnabled}>
//         <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
//         <View style={styles.content}>
//           <View style={styles.logoContainer}>
//             <Image
//               source={require("../assets/images/background.png")}
//               style={styles.logoBackground}
//               resizeMode="contain"
//             />
//             <Image
//               source={require("../assets/images/logo.png")}
//               style={styles.logo}
//               resizeMode="contain"
//             />
//           </View>

//           <Text style={styles.textHeader}>Currency Converter</Text>

//           <ConversionInput
//             text={baseCurrency}
//             value="123"
//             onButtonPress={() => alert("todo!")}
//             onChangeText={(text) => console.log("text", text)}
//             keyboardType="numeric"
//           />
//           <ConversionInput
//             text={quoteCurrency}
//             value="123"
//             onButtonPress={() => alert("todo!")}
//             // keyboardType="numeric"
//             editable={false} //to disable the input field
//           />

//           <Text style={styles.text}>
//             {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(date, "MMMM do, yyyy")}.`}
//           </Text>

//           <Button text="Reverse Currencies" onPress={() => alert("Todo!")} />
//           <KeyboardSpacer
//             onToggle={(keyboardIsVisible) =>
//               setScrollEnabled(keyboardIsVisible)
//             }
//           />
//         </View>
//       </ScrollView>
//     </View>
//   );
// };
