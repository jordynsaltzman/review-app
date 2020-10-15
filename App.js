import React, { useState } from "react";
import Tabs from "./app/components/Navigator";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";
import * as Font from "expo-font";

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const fetchFont = () => {
    return Font.loadAsync({
      InterBlack: require("./app/assets/fonts/Inter-Black.otf"),
      InterLight: require("./app/assets/fonts/Inter-Light.otf"),
    });
  };

  if (!fontLoaded)
    return (
      <AppLoading startAsync={fetchFont} onFinish={() => setFontLoaded(true)} />
    );

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
