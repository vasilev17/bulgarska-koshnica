import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";
import { COLORS, FONTSIZES } from "../constants";
import CustomText from "./CustomText";

export class UserTypeCard extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[this.props.style, styles.borderRadius, styles.shadow]}
      >
        <ImageBackground
          imageStyle={styles.borderRadius}
          source={this.props.image}
        >
          <View style={styles.overlay} />
          <CustomText style={styles.text}>{this.props.title}</CustomText>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

export default UserTypeCard;

const styles = StyleSheet.create({
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.black,
    opacity: 0.5,
    borderRadius: 10,
  },

  borderRadius: {
    borderRadius: 10,
  },

  shadow: {
    shadowColor: COLORS.black,

    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 7,
  },

  text: {
    textAlign: "center",
    position: "absolute",
    top: "33%",
    left: 0,
    right: 0,
    margin: "auto",
    fontSize: FONTSIZES.size30,
    color: COLORS.white,
  },
});
