// handling keyboard the simple way
// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { format } from "date-fns";
import { ConversionInput } from "../components/ConversionInput";
import { Button } from "../components/Button";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import colors from "../constants/colors";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    // justifyContent: "center",
    // paddingTop: screen.height * 0.2,
  },
  content: {
    paddingTop: screen.height * 0.1,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoBackground: {
    width: screen.width * 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: "absolute", //allows to position the logo on top of the background
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  textHeader: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 20,
    textAlign: "center",
  },
  text: {
    color: colors.white,
    fontSize: 14,
    textAlign: "center",
  },
  header: {
    alignItems: "flex-end",
    marginHorizontal: 20,
  },
});

export default ({ navigation }) => {
  const baseCurrency = "USD";
  const quoteCurrency = "GBP";
  const conversionRate = 0.8345;
  const date = new Date();
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar barStyle="light-content" backgroundColor={colors.blue} />

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

          <ConversionInput
            text={baseCurrency}
            value="123"
            onButtonPress={() => alert("todo!")}
            onChangeText={(text) => console.log("text", text)}
            keyboardType="numeric"
          />
          <ConversionInput
            text={quoteCurrency}
            value="123"
            onButtonPress={() => alert("todo!")}
            // keyboardType="numeric"
            editable={false} //to disable the input field
          />

          <Text style={styles.text}>
            {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(date, "MMMM do, yyyy")}.`}
          </Text>

          <Button text="Reverse Currencies" onPress={() => alert("Todo!")} />
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
