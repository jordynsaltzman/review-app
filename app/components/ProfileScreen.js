import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProfileScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileScreen;
