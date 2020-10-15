import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import Button from "../components/Button";
import color from "../config/color";
import Icon from "react-native-vector-icons/FontAwesome";

const ReplyScreen = ({ route }) => {
  const [enteredReply, setEnteredReply] = useState();
  const [replies, setReplies] = useState([]);

  let wholeStars = Math.floor(route.params.rating);
  let halfStar = wholeStars < route.params.rating;

  const replyInputHandler = (text) => {
    setEnteredReply(text);
  };

  const addReplyHandler = () => {
    console.log(route.params);
    if (enteredReply) {
      setReplies((currentReplies) => [
        {
          id: Math.random().toString(),
          reply: enteredReply,
        },
        ...currentReplies,
      ]);
    }
    setEnteredReply("");
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
            {route.params.created_at
              .replace(/T.*/, "")
              .split("-")
              .reverse()
              .join("/")}
          </Text>
        </View>
        <Text style={styles.message}>{route.params.message}</Text>
      </View>
      <View style={styles.cardBottom}>
        <View style={styles.inputRow}>
          <TextInput
            placeholder="Leave a reply"
            numberOfLines={3}
            multiline={true}
            value={enteredReply}
            onChangeText={replyInputHandler}
            style={styles.replyInput}
          />
          <Button text="Submit" onPress={addReplyHandler} />
        </View>
        {replies.length ? (
          <FlatList
            data={replies}
            keyExtractor={(reply) => reply.id}
            renderItem={(prop) => {
              return (
                <View>
                  {/* <Image
                    source={{ uri: user.photoUrl }}
                    style={{ height: 20, width: 20 }}
                  /> */}
                  <Text style={styles.message}>{prop.item.reply}</Text>
                </View>
              );
            }}
          />
        ) : null}
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
    backgroundColor: color.primary,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  inputRow: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: color.primary,
  },
  message: {
    fontSize: 16,
    fontFamily: "InterLight",
    color: color.black,
  },
  replyInput: {
    fontFamily: "InterLight",
    fontSize: 16,
  },
});

export default ReplyScreen;
