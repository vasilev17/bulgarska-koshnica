import { Image, StyleSheet, Text } from "react-native";
import React from "react";
import { COLORS, FONTSIZES } from "../constants";
import CustomText from "./CustomText";
import { TouchableOpacity } from "react-native-gesture-handler";
import PropTypes from "prop-types";

const WarningButton = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      style={[styles.container, props.style]}
    >
      <Image source={props.icon} style={styles.icon} />
      <CustomText style={styles.text}>{props.children}</CustomText>
      <Image source={props.icon} style={styles.icon} />
    </TouchableOpacity>
  );
};

WarningButton.propTypes = {
  style: Text.propTypes.style,
  icon: PropTypes.node,
  children: PropTypes.node,
};

export default WarningButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.warningLightRed,
    paddingVertical: "4%",
    paddingHorizontal: "8%",
  },
  icon: {
    height: 21,
    width: 21,
  },
  text: {
    fontSize: FONTSIZES.size16,
  },
});
