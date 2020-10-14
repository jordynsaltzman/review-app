import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";

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
    <View style={styles.container}>
      {reviews.map((review, i) => (
        <View key={i}>
          <Text>{review.created_at}</Text>
          <Text>{review.rating}</Text>
          <Text>{review.message}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
