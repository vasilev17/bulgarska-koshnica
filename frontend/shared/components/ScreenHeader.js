import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeadingText from "./HeadingText";
import { images } from "../constants";
import PropTypes, { arrayOf, oneOfType } from "prop-types";

const ScreenHeader = (props) => {
  return (
    <View style={[props.style, { alignItems: "center" }]}>
      <Image style={styles.logo} source={images.basketLogo} />
      <HeadingText style={styles.title}>{props.children}</HeadingText>
    </View>
  );
};

ScreenHeader.propTypes = {
  style: Text.propTypes.style,
  children: oneOfType([arrayOf(PropTypes.string), PropTypes.string]),
};

export default ScreenHeader;

const styles = StyleSheet.create({
  logo: {
    width: 84,
    height: 84,
    marginBottom: "1.5%",
  },

  title: {
    textAlign: "center",
    width: 350,
  },
});
