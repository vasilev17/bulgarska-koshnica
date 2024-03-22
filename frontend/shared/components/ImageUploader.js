import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { COLORS, FONTSIZES, icons } from "../constants";
import CustomText from "./CustomText";
import { TouchableOpacity } from "react-native-gesture-handler";

const ImageUploader = (props) => {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Image style={styles.addImageIcon} source={icons.addImage} />
      <CustomText style={styles.title}>Качване на снимка</CustomText>
    </TouchableOpacity>
  );
};

export default ImageUploader;

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 225,
    borderWidth: 2,
    borderRadius: 45,
    borderColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  addImageIcon: {
    height: 55,
    aspectRatio: 1,
  },
  title: {
    fontSize: FONTSIZES.size24,
    color: COLORS.gray,
  },
});
