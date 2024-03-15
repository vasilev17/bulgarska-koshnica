import { View, Text } from "react-native";
import React from "react";
import BaseAppScreen from "../shared/components/BaseAppScreen";

const ChooseLocationScreen = () => {
  return (
    <BaseAppScreen
      contentOffset={"13%"}
      screenHeaderTitle="Посочете локацията на бизнеса Ви"
    ></BaseAppScreen>
  );
};

export default ChooseLocationScreen;
