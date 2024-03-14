import { ImageBackground, StyleSheet, View } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import { COLORS, FONT, FONTSIZES, images } from "../constants";
import PropTypes from "prop-types";

const BottomSheetHandleComponent = ({ title }) => {
  return (
    <ImageBackground style={styles.headerWave} source={images.headerWave}>
      <View style={styles.handleIndicator} />
      <CustomText style={styles.bottomSheetTitle}>{title}</CustomText>
    </ImageBackground>
  );
};

BottomSheetHandleComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BottomSheetHandleComponent;

const styles = StyleSheet.create({
  bottomSheetTitle: {
    width: 212,
    marginTop: "10%",
    marginLeft: "7%",
    fontSize: FONTSIZES.size24,
    fontFamily: FONT.semiBold,
    textShadowColor: "rgba(22, 91, 16, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 5,
  },

  headerWave: {
    width: "100%",
    height: 135,
    zIndex: -1,
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  handleIndicator: {
    backgroundColor: COLORS.white,
    width: 68,
    height: 6.8,
    borderRadius: 10,
    marginTop: "2%",
    alignSelf: "center",
  },
});
