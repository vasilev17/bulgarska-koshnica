import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTSIZES } from "../constants";
import { SIZES } from "../constants";

const CustomButton = ({
  size = SIZES.small,
  buttonColor = COLORS.primary,
  fontColor = COLORS.white,
  outlineColor = null,
  hasShadow = true,
  text = "Напред",
}) => {
  return (
    <View
      style={[
        { backgroundColor: buttonColor },
        styles.buttonContainer,
        setButtonSize(size),
        outlineColor && { borderColor: outlineColor, borderWidth: 2 },
        hasShadow && styles.buttonShadow,
      ]}
    >
      <Text style={[{ color: fontColor }, setFontSize(size)]}>{text}</Text>
    </View>
  );
};

export default CustomButton;

setButtonSize = (size) => {
  switch (size) {
    case SIZES.small:
      return styles.sizeSmall;
    case SIZES.medium:
      return styles.sizeMedium;
    case SIZES.large:
      return styles.sizeLarge;
    default:
      console.error(`Wrong size for button component!`);
  }
};

setFontSize = (size) => {
  switch (size) {
    case SIZES.small:
      return styles.textMedium;
    case SIZES.medium:
      return styles.textSmall;
    case SIZES.large:
      return styles.textLarge;
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

  sizeSmall: {
    width: 145,
    height: 45,
  },

  sizeMedium: {
    width: 225,
    height: 45,
  },

  sizeLarge: {
    width: 305,
    height: 60,
  },

  textSmall: {
    fontSize: FONTSIZES.size22,
  },

  textMedium: {
    fontSize: FONTSIZES.size24,
  },

  textLarge: {
    fontSize: FONTSIZES.size25,
  },
});
