import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import color from "./app/config/color";
import Review from "./app/components/Review";

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
        renderItem={({ item }) => (
          <Review
            date={item.created_at}
            message={item.message}
            rating={item.rating}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
});
