import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ReviewScreen from "./ReviewScreen";
import ProfileScreen from "./ProfileScreen";
import ReplyScreen from "./ReplyScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import color from "../config/color";

const ReviewStack = createStackNavigator();

const headerStyle = {
  headerStyle: {
    backgroundColor: color.white,
    height: 70,
  },
  headerTitleStyle: {
    fontFamily: "InterBlack",
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
    color: color.black,
  },
};

const ReviewStackScreen = () => {
  return (
    <ReviewStack.Navigator initialRouteName="Reviews">
      <ReviewStack.Screen
        name="Reviews"
        component={ReviewScreen}
        options={headerStyle}
      />
      <ReviewStack.Screen
        name="Reply"
        component={ReplyScreen}
        options={headerStyle}
      />
    </ReviewStack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "Reviews") {
            iconName = focused ? "thumbs-up" : "thumbs-o-up";
          } else if (route.name === "Profile") {
            iconName = focused ? "user" : "user-o";
          }
          return <Icon name={iconName} size={28} color="white" />;
        },
      })}
      //I tried to set the styles of the tabBar but it did not work. I did not have time to implement a custom tabBar
      tabBarOptions={{
        activeBackgroundColor: color.teal,
        inactiveBackgroundColor: color.teal,
        style: {
          backgroundColor: color.teal,
          fontFamily: "InterLight",
        },
      }}
      swipeEnabled={true}
    >
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Reviews" component={ReviewStackScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
