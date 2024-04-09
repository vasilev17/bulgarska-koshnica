import { StyleSheet, Text } from "react-native";
import React from "react";
import { COLORS, FONT, FONTSIZES } from "../constants";
import PropTypes, { arrayOf, oneOfType } from "prop-types";

const CustomText = (props) => {
  return (
    <Text {...props} selectionColor={COLORS.lightPrimary} style={[styles.text, props.style]}>
      {props.children}
    </Text>
  );
};

CustomText.propTypes = {
  style: Text.propTypes.style,
  children: oneOfType([arrayOf(PropTypes.string), PropTypes.string]),
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    fontFamily: FONT.regular,
    fontSize: FONTSIZES.size18,
    color: COLORS.text,
  },
});
