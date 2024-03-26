import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import CustomText from "./CustomText";
import { COLORS, FONTSIZES, SIZES } from "../constants";
import PropTypes from "prop-types";

const option = {
  left: 0,
  right: 1,
};

const SwitchComponent = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <View
      style={[styles.switchContainer, setSwitchSize(props.size), props.style]}
    >
      <TouchableOpacity
        onPress={() => setSelectedOption(option.left)}
        style={[
          styles.switchOption,
          styles.switchOptionLeft,
          selectedOption === option.left && styles.switchOptionSelected,
        ]}
      >
        <CustomText
          style={[
            setFontSize(props.size),
            selectedOption === option.left && { color: COLORS.white },
          ]}
        >
          {props.leftOption}
        </CustomText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSelectedOption(option.right)}
        style={[
          styles.switchOption,
          styles.switchOptionRight,
          selectedOption === option.right && styles.switchOptionSelected,
        ]}
      >
        <CustomText
          style={[
            setFontSize(props.size),
            selectedOption === option.right && { color: COLORS.white },
          ]}
        >
          {props.rightOption}
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};

SwitchComponent.propTypes = {
  leftOption: PropTypes.string.isRequired,
  rightOption: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  style: Text.propTypes.style,
};

SwitchComponent.defaultProps = {
  size: SIZES.small,
};

setSwitchSize = (size) => {
  switch (size) {
    case SIZES.small:
      return styles.containerSizeSmall;
    case SIZES.medium:
      return styles.containerSizeMedium;
    case SIZES.large:
      return styles.containerSizeLarge;
    default:
      console.error(`Wrong size for button component!`);
  }
};

setFontSize = (size) => {
  switch (size) {
    case SIZES.small:
      return styles.textSizeSmall;
    case SIZES.medium:
      return styles.textSizeMedium;
    case SIZES.large:
      return styles.textSizeLarge;
    default:
      console.error(`Wrong size for switch component!`);
  }
};

export default SwitchComponent;

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    shadowColor: COLORS.gray,
    borderRadius: 10,
    borderTopColor: COLORS.graySecondary,
    borderTopWidth: 0.7,

    backgroundColor: COLORS.white,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.15,
    shadowRadius: 13,

    elevation: 15,
  },

  containerSizeSmall: {
    width: 140,
    height: 50,
  },

  containerSizeMedium: {
    width: 150,
    height: 50,
  },

  containerSizeLarge: {
    width: 165,
    height: 50,
  },

  switchOption: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  switchOptionSelected: {
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.shadowPrimary,
    elevation: 10,
  },
  switchOptionLeft: {
    borderRightColor: COLORS.graySecondary,
    borderRightWidth: 0.5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  switchOptionRight: {
    borderLeftColor: COLORS.graySecondary,
    borderLeftWidth: 0.5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },

  textSizeSmall: {
    fontSize: FONTSIZES.size22,
  },

  textSizeMedium: {
    fontSize: FONTSIZES.size23,
  },

  textSizeLarge: {
    fontSize: FONTSIZES.size24,
  },
});
