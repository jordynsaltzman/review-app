import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import color from "../config/color";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Review = ({ date, rating, message, id }) => {
  const [vote, setVote] = useState();

  let wholeStars = Math.floor(rating);
  let halfStar = wholeStars < rating;

  const handleVote = (value) => {
    if (value === vote) {
      setVote("");
    } else {
      setVote(value);
    }
  };

  return (
    <View style={styles.review}>
      <View style={styles.starRow}>
        <View style={styles.rating}>
          {Array(wholeStars)
            .fill("star")
            .map((star, i) => (
              <FontAwesome5
                name={"star"}
                style={styles.star}
                solid={true}
                key={i}
              />
            ))}
          {halfStar ? (
            <FontAwesome5 name={"star-half"} style={styles.star} solid={true} />
          ) : null}
        </View>
        <Text>{date.replace(/T.*/, "").split("-").reverse().join("/")}</Text>
      </View>
      <Text style={styles.message}>{message}</Text>
      <View style={styles.cardBottom}>
        <Button title="Reply" />
        <View style={styles.thumbRow}>
          <FontAwesome5
            name={"thumbs-up"}
            onPress={() => handleVote("up")}
            style={styles.thumb}
            solid={vote === "up"}
          />
          <FontAwesome5
            name={"thumbs-down"}
            style={styles.thumb}
            onPress={() => handleVote("down")}
            solid={vote === "down"}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  review: {
    backgroundColor: color.white,
    elevation: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowColor: color.black,
    marginVertical: 8,
    marginHorizontal: 20,
    borderRadius: 6,
    padding: 8,
  },
  rating: {
    flexDirection: "row",
  },
  starRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  star: {
    color: color.yellow,
    fontSize: 18,
  },
  cardBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    backgroundColor: "lightgrey",
  },
  thumbRow: {
    flexDirection: "row",
  },
  thumb: {
    fontSize: 25,
    padding: 5,
  },
  message: {
    fontSize: 16,
  },
});

export default Review;
