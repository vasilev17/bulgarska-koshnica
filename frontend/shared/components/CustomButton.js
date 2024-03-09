import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, FONTSIZES } from "../constants";
import { SIZES } from "../constants";
import CustomText from "./CustomText";
import PropTypes from "prop-types";

export class CustomButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[
          this.props.style,
          { backgroundColor: this.props.buttonColor },
          styles.buttonContainer,
          setButtonSize(this.props.size),
          this.props.outlineColor && {
            borderColor: this.props.outlineColor,
            borderWidth: 2,
          },
          this.props.hasShadow && styles.buttonShadow,
        ]}
      >
        <CustomText
          style={[
            { color: this.props.fontColor },
            setFontSize(this.props.size),
          ]}
        >
          {this.props.children}
        </CustomText>
      </TouchableOpacity>
    );
  }
}

CustomButton.propTypes = {
  size: PropTypes.number.isRequired,
  buttonColor: PropTypes.string,
  fontColor: PropTypes.string,
  outlineColor: PropTypes.string,
  hasShadow: PropTypes.bool,
};

CustomButton.defaultProps = {
  buttonColor: COLORS.primary,
  fontColor: COLORS.white,
  outlineColor: null,
  hasShadow: true,
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

    //IOS
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    //Android
    elevation: 7,
  },

  buttonSizeSmall: {
    width: 145,
    height: 45,
  },

  buttonSizeMedium: {
    width: 225,
    height: 45,
  },

  buttonSizeLarge: {
    width: 305,
    height: 60,
  },

  textSizeSmall: {
    fontSize: FONTSIZES.size22,
  },

  textSizeMedium: {
    fontSize: FONTSIZES.size24,
  },

  textSizeLarge: {
    fontSize: FONTSIZES.size25,
  },
});
