import { StyleSheet, Platform } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: colors.nplBlue,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
