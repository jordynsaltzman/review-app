import { StyleSheet } from "react-native";
import color from "./color";

export const globalStyles = StyleSheet.create({
  titleText: {
    fontFamily: "Times New Roman",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontFamily: "InterBlack",
    fontWeight: "bold",
    fontSize: 20,
    color: color.black,
  },
});
