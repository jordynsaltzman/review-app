import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import color from "../config/color";

const Button = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.btnText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: color.secondary,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  btnText: {
    color: "white",
    fontFamily: "InterLight",
    textTransform: "uppercase",
    fontSize: 16,
  },
});

export default Button;
