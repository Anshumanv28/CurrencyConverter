import React from "react";
import {
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  Text,
  keyboardType,
  onChangeText,
} from "react-native";

import colors from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    flexDirection: "row",
  },
  containerDisabled: {
    // backgroundColor: "red",
    backgroundColor: colors.offWhite,
  },
  button: {
    backgroundColor: colors.white,
    padding: 15,
    borderColor: colors.border,
    borderWidth: 1,
    borderTopLeftRadius: 5, //rather than using borderRadius, we can use borderTopLeftRadius and borderTopRightRadius
    borderBottomLeftRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: colors.blue,
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    padding: 10,
    color: colors.textLight,
  },
});

export const ConversionInput = ({ text, onButtonPress, ...props }) => {
  const containerStyles = [styles.container];

  if (props.editable === false) {
    //to avoid issues if editable is not passed(undefined)
    containerStyles.push(styles.containerDisabled);
  }

  return (
    <View style={containerStyles}>
      <TouchableOpacity onPress={onButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        // value={value}
        // onChangeText={onChangeText}
        // KeyboardType={keyboardType}
        {...props}
      />
    </View>
  );
};
