import { Component } from "react";
import { FONTSIZES } from "../constants";
import CustomText from "./CustomText";
import { StyleSheet } from "react-native";

export class HeadingText extends Component {
  render() {
    return (
      <CustomText
        {...this.props}
        style={[styles.headingText, this.props.style]}
      >
        {this.props.children}
      </CustomText>
    );
  }
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: FONTSIZES.size30,
  },
});
