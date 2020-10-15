import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import color from "../config/color";
import Icon from "react-native-vector-icons/FontAwesome";

const Review = ({ date, rating, message, onPress }) => {
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
    <View style={styles.reviewCard}>
      <View style={styles.cardTop}>
        <View style={styles.starRow}>
          <View style={styles.rating}>
            {Array(wholeStars)
              .fill("star")
              .map((star, i) => (
                <Icon name={"star"} style={styles.star} solid={true} key={i} />
              ))}
            {halfStar ? (
              <Icon name={"star-half"} style={styles.star} solid={true} />
            ) : null}
          </View>
          <Text style={styles.date}>
            {date.replace(/T.*/, "").split("-").reverse().join("/")}
          </Text>
        </View>
        <Text style={styles.message}>{message}</Text>
      </View>
      <View style={styles.cardBottom}>
        <View style={styles.replyBtn}>
          <Button text="Reply" onPress={onPress} />
        </View>
        <View style={styles.thumbRow}>
          <Icon
            name={vote === "up" ? "thumbs-up" : "thumbs-o-up"}
            onPress={() => handleVote("up")}
            style={styles.thumb}
          />
          <Icon
            name={vote === "down" ? "thumbs-down" : "thumbs-o-down"}
            style={styles.thumb}
            onPress={() => handleVote("down")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reviewCard: {
    backgroundColor: color.white,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowColor: color.black,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 6,
  },
  cardTop: {
    padding: 20,
  },
  rating: {
    flexDirection: "row",
  },
  starRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  star: {
    color: color.yellow,
    fontSize: 18,
  },
  date: {
    fontFamily: "InterLight",
    fontSize: 13,
  },
  cardBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: color.primary,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  thumbRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  thumb: {
    fontSize: 25,
    padding: 5,
    color: color.teal,
  },
  message: {
    fontSize: 16,
    fontFamily: "InterLight",
  },
});

export default Review;
