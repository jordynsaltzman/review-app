import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View, Text } from "react-native";

import Review from "./Review";
import axios from "axios";
import color from "../config/color";
import { TouchableOpacity } from "react-native-gesture-handler";

const ReviewScreen = ({ navigation }) => {
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sortContainer}>
        <TouchableOpacity onPress={sortByDate}>
          <View style={[styles.sortBtn, styles.oldest]}>
            <Text style={styles.sortBtnText}>Oldest First</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={sortByNewestDate}>
          <View style={[styles.sortBtn, styles.newest]}>
            <Text style={styles.sortBtnText}>Newest First</Text>
          </View>
        </TouchableOpacity>
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
  sortBtn: {
    borderRadius: 18,
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: color.teal,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  sortBtnText: {
    color: "white",
    fontFamily: "InterLight",
    textTransform: "uppercase",
    fontSize: 16,
  },
  oldest: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  newest: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
});

export default ReviewScreen;
