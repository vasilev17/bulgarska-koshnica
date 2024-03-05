import { StyleSheet, Text } from "react-native";
import React, { Component } from "react";
import { COLORS, FONT, FONTSIZES } from "../constants";

export class CustomText extends Component {
  render() {
    return (
      <Text {...this.props} style={[styles.text, this.props.style]}>
        {this.props.children}
      </Text>
    );
  }
}

export default CustomText;

const styles = StyleSheet.create({
  text: {
    fontFamily: FONT.regular,
    fontSize: FONTSIZES.size18,
    color: COLORS.text,
  },
});
