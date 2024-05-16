import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import CustomText from "./CustomText";
import { COLORS, FONTSIZES, icons } from "../constants";
import PropTypes from "prop-types";

const TagComponent = (props) => {
  return (
    <TouchableWithoutFeedback style={[styles.tagContainer, props.style]}>
      <CustomText style={styles.tagText}>{props.title}</CustomText>
      <TouchableOpacity onPress={() => props.removeMethod()}>
        <Image style={styles.tagIcon} source={icons.closeTag} />
      </TouchableOpacity>
    </TouchableWithoutFeedback>
  );
};

TagComponent.propTypes = {
  title: PropTypes.string.isRequired,
  removeMethod: PropTypes.func.isRequired,
  style: Text.propTypes.style,
};

export default TagComponent;

const styles = StyleSheet.create({
  tagContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    padding: 4,
    paddingLeft:6,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: COLORS.black,
    elevation: 5,
  },
  tagText: {
    color: COLORS.white,
    fontSize: FONTSIZES.size18,
    marginRight: 5,
  },
  tagIcon: {
    height: 21,
    aspectRatio: 1,
  },
});
