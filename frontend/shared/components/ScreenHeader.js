import { Image, Text, View } from "react-native";
import React from "react";
import HeadingText from "./HeadingText";
import { globalStyles } from "../globalStyles";
import { images } from "../constants";
import PropTypes, { arrayOf, oneOfType } from "prop-types";

const ScreenHeader = (props) => {
  return (
    <View style={[props.style, { alignItems: "center" }]}>
      <Image style={globalStyles.logo} source={images.basketLogo} />
      <HeadingText style={globalStyles.title}>{props.children}</HeadingText>
    </View>
  );
};

ScreenHeader.propTypes = {
  style: Text.propTypes.style,
  children: oneOfType([arrayOf(PropTypes.string), PropTypes.string]),
};

export default ScreenHeader;
