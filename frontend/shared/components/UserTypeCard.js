import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS, FONTSIZES } from "../constants";
import CustomText from "./CustomText";
import PropTypes from "prop-types";

const UserTypeCard = (props) => {
  return (
    <TouchableOpacity style={[styles.borderRadius, styles.shadow, props.style]}>
      <ImageBackground imageStyle={styles.borderRadius} source={props.image}>
        <View style={styles.overlay} />
        <CustomText style={styles.text}>{props.title}</CustomText>
      </ImageBackground>
    </TouchableOpacity>
  );
};

UserTypeCard.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  style: Text.propTypes.style,
};

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
