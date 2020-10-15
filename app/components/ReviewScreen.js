import React, { useEffect, useState } from "react";
import { useFonts } from "@use-expo/font";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { AppLoading } from "expo";
import Button from "./Button";
import Review from "./Review";
import axios from "axios";
import color from "../config/color";

const ReviewScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Inter: require("../assets/fonts/Inter-Black.otf"),
    InterLight: require("../assets/fonts/Inter-Light.otf"),
  });

  const [reviews, setReviews] = useState([]);

  const sortByDate = () => {
    const sortedReviews = [...reviews].sort(
      (a, b) => a.created_at < b.created_at
    );
    setReviews(sortedReviews);
  };

  const sortByNewestDate = () => {
    const sortedReviews = [...reviews].sort(
      (a, b) => a.created_at > b.created_at
    );
    setReviews(sortedReviews);
  };

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
      <View style={styles.sortContainer}>
        <Button text="Oldest First" onPress={sortByDate} />
        <Button text="Newest First" onPress={sortByNewestDate} />
      </View>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <Review
            date={item.created_at}
            message={item.message}
            rating={item.rating}
            onPress={() => navigation.navigate("Reply", item)}
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
    backgroundColor: color.offWhite,
    alignItems: "center",
    justifyContent: "center",
  },
  sortContainer: {
    flexDirection: "row",
    paddingVertical: 10,
  },
});

export default ReviewScreen;
