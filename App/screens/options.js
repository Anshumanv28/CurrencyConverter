import React from "react"; //have to do everytime if using jsx  //default import
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Linking,
  Alert,
} from "react-native"; //named import
import { Entypo } from "@expo/vector-icons";
import colors from "../constants/colors";
import { RowItem, RowSeparator } from "../components/RowItem";
import GlobalStyles from "../util/GlobalStyles";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    color: colors.text,
  },
  seperator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
});

const openUrl = (url) => {
  return Linking.openURL(url).catch(() =>
    Alert.alert("Sorry, something went wrong.", "please try again later.")
  );
};

export default () => {
  return (
    // <SafeAreaView style={{ flex: 1 }}>

    // works only for android yet will have to check and change for android
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <ScrollView>
        {/* <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>Themes</Text>
        <Entypo name="chevron-right" size={20} color={colors.blue} />
      </TouchableOpacity> */}
        <RowItem
          text="Themes"
          onPress={() => alert("todo!")}
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
        />
        {/* <View style={styles.seperator} /> is going to be replaced with the rowSeperator component*/}
        <RowSeparator />

        <RowItem
          text="React Native Basics"
          onPress={() =>
            openUrl(
              "https://learn.reactnativeschool.com/p/react-native-basics-build-a-currency-converter"
            )
          }
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />

        <RowSeparator />

        <RowItem
          text="React Native by Example"
          // onPress={() => alert("todo!")}
          onPress={() =>
            openUrl(
              "https://learn.reactnativeschool.com/p/react-native-by-example"
            )
          }
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
