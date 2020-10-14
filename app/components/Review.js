import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Review = ({ date, rating, message }) => {
  return (
    <View style={styles.review}>
      <Text>{date}</Text>
      <Text>{rating}</Text>
      <Text>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  review: {
    backgroundColor: "#fff",
  },
});

export default Review;
