import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import color from "./app/config/color";

export default App = () => {
  const [reviews, setReviews] = useState([]);
  const getReviews = () => {
    axios
      .get(
        "https://my-json-server.typicode.com/bytelion/expo_test_mock_api/reviews"
      )
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getReviews();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {reviews.map((review, i) => (
        <View key={i}>
          <Text>{review.created_at}</Text>
          <Text>{review.rating}</Text>
          <Text>{review.message}</Text>
        </View>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
