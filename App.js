import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import color from "./app/config/color";
import Review from "./app/components/Review";
import { render } from "react-dom";

export default App = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
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
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={reviews}
        renderItem={({ review }) => (
          <Review
            date={review.created_at}
            message={review.message}
            rating={review.rating}
          />
        )}
        keyExtractor={(review) => review.id.toString()}
      />
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
