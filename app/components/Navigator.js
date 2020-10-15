import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

import ReviewScreen from "./ReviewScreen";
import ProfileScreen from "./ProfileScreen";
import ReplyScreen from "./ReplyScreen";
import color from "../config/color";

const headerStyle = {
  headerStyle: {
    backgroundColor: color.white,
    height: 70,
  },

  headerTitleStyle: {
    fontFamily: "Inter",
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
    color: color.black,
  },
};
const ReviewStack = createStackNavigator();

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
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "Reviews") {
            iconName = focused ? "thumbs-up" : "thumbs-o-up";
          } else if (route.name === "Profile") {
            iconName = focused ? "user" : "user-o";
          }
          return <Icon name={iconName} size={30} color="white" />;
        },
      })}
      tabBarOptions={{
        activeBackgroundColor: color.teal,
        inactiveBackgroundColor: color.teal,
        style: {
          backgroundColor: color.teal,
          fontFamily: "Inter",
        },
      }}
      swipeEnabled={true}
    >
      <Tab.Screen name="Reviews" component={ReviewStackScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
