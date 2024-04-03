import { Image, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import CustomText from "./CustomText";
import { COLORS, FONTSIZES } from "../constants";
import PropTypes from "prop-types";

const FilterTag = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container}>
      <Image style={styles.icon} source={props.icon} />
      <CustomText style={styles.title}>{props.title}</CustomText>
    </TouchableOpacity>
  );
};

FilterTag.propTypes = {
    icon:PropTypes.node.isRequired,
    title:PropTypes.string.isRequired,
  };

export default FilterTag;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 1,
    paddingHorizontal: 7,
    marginHorizontal: "1%",
    elevation: 20,
  },
  icon: {
    width: 17,
    aspectRatio: 1,
    marginRight: 5,
  },
  title: {
    fontSize: FONTSIZES.size15,
  },
});
