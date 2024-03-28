import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTSIZES } from "../constants";
import { SIZES } from "../constants";
import CustomText from "./CustomText";
import PropTypes, { arrayOf, oneOfType } from "prop-types";

const CustomButton = (props) => {
  return (
    <TouchableOpacity
      style={[
        { backgroundColor: props.buttonColor },
        styles.buttonContainer,
        setButtonSize(props.size),
        props.outlineColor && {
          borderColor: props.outlineColor,
          borderWidth: 2,
        },
        props.hasShadow && styles.buttonShadow,
        props.style,
      ]}
      onPress={props.onPress}
    >
      <CustomText style={[{ color: props.fontColor }, setFontSize(props.size)]}>
        {props.children}
      </CustomText>
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  onPress:PropTypes.func,
  buttonColor: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  hasShadow: PropTypes.bool.isRequired,
  fontColor: PropTypes.string.isRequired,
  outlineColor: PropTypes.string,
  style: Text.propTypes.style,
  children: oneOfType([arrayOf(PropTypes.string), PropTypes.string]),
};

CustomButton.defaultProps = {
  buttonColor: COLORS.primary,
  size: SIZES.small,
  hasShadow: true,
  fontColor: COLORS.white,
  outlineColor: null,
};

export default CustomButton;

setButtonSize = (size) => {
  switch (size) {
    case SIZES.small:
      return styles.buttonSizeSmall;
    case SIZES.medium:
      return styles.buttonSizeMedium;
    case SIZES.large:
      return styles.buttonSizeLarge;
    default:
      console.error(`Wrong size for button component!`);
  }
};

setFontSize = (size) => {
  switch (size) {
    case SIZES.small:
      return styles.textSizeMedium;
    case SIZES.medium:
      return styles.textSizeSmall;
    case SIZES.large:
      return styles.textSizeLarge;
    default:
      console.error(`Wrong size for button component!`);
  }
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonShadow: {
    shadowColor: COLORS.black,

    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 7,
  },

  buttonSizeSmall: {
    width: 145,
    height: 45,
  },

  buttonSizeMedium: {
    width: 240,
    height: 60,
  },

  buttonSizeLarge: {
    width: 305,
    height: 60,
  },

  textSizeSmall: {
    fontSize: FONTSIZES.size22,
  },

  textSizeMedium: {
    fontSize: FONTSIZES.size25,
  },

  textSizeLarge: {
    fontSize: FONTSIZES.size25,
  },
});
