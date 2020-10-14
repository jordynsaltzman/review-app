import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import color from "./app/config/color";
import Review from "./app/components/Review";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

export default App = () => {
  const [fontsLoaded] = useFonts({
    Inter: require("./app/assets/fonts/Inter-Black.otf"),
    InterLight: require("./app/assets/fonts/Inter-Light.otf"),
  });

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

  if (!fontsLoaded) return <AppLoading />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <Review
            date={item.created_at}
            message={item.message}
            rating={item.rating}
            id={item.id}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        style={styles.reviewList}
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

  // reviewList: {
  //   flex: 8,
  // },
});
