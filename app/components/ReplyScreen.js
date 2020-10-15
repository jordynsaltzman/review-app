import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import color from "../config/color";
import Icon from "react-native-vector-icons/FontAwesome";

const ReplyScreen = ({ route }) => {
  const [reply, setReply] = useState();

  let wholeStars = Math.floor(route.params.rating);
  let halfStar = wholeStars < route.params.rating;

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
            {route.params.created_at
              .replace(/T.*/, "")
              .split("-")
              .reverse()
              .join("/")}
          </Text>
        </View>
        <Text style={styles.message}>{route.params.message}</Text>
      </View>
      <View style={styles.cardBottom}></View>
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

  message: {
    fontSize: 16,
    fontFamily: "InterLight",
  },
});

export default ReplyScreen;
