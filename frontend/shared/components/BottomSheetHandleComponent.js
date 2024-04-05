import { Image, ImageBackground, StyleSheet, View } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import { COLORS, FONT, FONTSIZES, images } from "../constants";
import PropTypes from "prop-types";

const BottomSheetHandleComponent = ({ title }) => {
  return (
    <View>
      <CustomText style={styles.bottomSheetTitle}>{title}</CustomText>
      <Image style={styles.headerWave} source={images.headerWave} />
      <View style={styles.handleIndicator} />
    </View>
  );
};

BottomSheetHandleComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BottomSheetHandleComponent;

const styles = StyleSheet.create({
  bottomSheetTitle: {
    width: 270,
    minHeight: 100,
    marginBottom: "3%",
    marginLeft: "4%",
    marginTop: "15%",
    fontSize: FONTSIZES.size24,
    fontFamily: FONT.semiBold,
    textShadowColor: "rgba(22, 91, 16, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 5,
  },

  headerWave: {
    width: "100%",
    height: 145,
    zIndex: -1,
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: "absolute",
  },

  handleIndicator: {
    backgroundColor: COLORS.white,
    width: 68,
    height: 0.1,
    borderRadius: 10,
    marginTop: "2%",
    alignSelf: "center",
    position: "absolute",
  },
});
