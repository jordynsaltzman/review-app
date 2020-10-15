import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Animated } from "react-native";
import Button from "./Button";
import * as Google from "expo-google-app-auth";
import color from "../config/color";

const ProfileScreen = () => {
  const [user, setUser] = useState({
    signedIn: false,
    givenName: "",
    fullName: "",
    photoUrl: "",
    accessToken: "",
  });

  const config = {
    accessToken: user.accessToken,
    androidClientId:
      "630687203144-3flrd48n4hd0on6aq8rhpd32rm043h7n.apps.googleusercontent.com",
    iosClientId:
      "630687203144-5ahpsdr7i2nha6bt41smr83ggb27qlaa.apps.googleusercontent.com",
  };

  signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "630687203144-3flrd48n4hd0on6aq8rhpd32rm043h7n.apps.googleusercontent.com",
        iosClientId:
          "630687203144-5ahpsdr7i2nha6bt41smr83ggb27qlaa.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        setUser({
          signedIn: true,
          givenName: result.user.givenName,
          fullName: result.user.name,
          photoUrl: result.user.photoUrl,
          accessToken: result.accessToken,
        });
      } else {
        console.log("cancelled");
      }
    } catch (error) {
      throw new Error(err);
    }
  };

  //I haven't gotten this to work
  const signoutWithGoogleAsync = async () => {
    try {
      await Google.logOutAsync({ ...config });
    } catch (err) {
      throw new Error(err);
    }
  };

  const signInWithGoogle = () => {
    signInWithGoogleAsync();
  };

  const signOutWithGoogle = () => {
    signoutWithGoogleAsync();
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/critiq.png")} style={styles.logoMain} />
      {user.signedIn ? (
        <View style={styles.titleContainer}>
          <Image source={{ uri: user.photoUrl }} style={styles.icon} />
          <Text style={styles.headerText}>{`Welcome, ${user.givenName}!`}</Text>
          <Text style={styles.sloganText}>Manage your online reviews</Text>
          <Button text="Sign Out" onPress={signOutWithGoogle} />
        </View>
      ) : (
        <Button text="Sign in with Google" onPress={signInWithGoogle} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logoMain: {
    height: 100,
    width: 200,
  },
  titleContainer: {
    alignItems: "center",
  },
  icon: {
    height: 90,
    width: 90,
    borderRadius: 45,
  },
  headerText: {
    fontFamily: "InterBlack",
    fontWeight: "bold",
    fontSize: 30,
    color: color.black,
    paddingBottom: 10,
  },
  sloganText: {
    fontFamily: "InterLight",
    color: color.black,
    fontSize: 18,
    marginBottom: 35,
  },
});

export default ProfileScreen;
