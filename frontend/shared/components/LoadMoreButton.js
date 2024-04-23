import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTSIZES } from "../constants";
import CustomText from "./CustomText";

const LoadMoreButton = () => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.container}>
      <CustomText style={styles.text}>Прочетете още...</CustomText>
    </TouchableOpacity>
  );
};

export default LoadMoreButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: "7.5%",
    alignSelf: "flex-end",
    borderRadius: 10,
  },
  text: {
    fontSize: FONTSIZES.size15,
    color: COLORS.white,
  },
});
