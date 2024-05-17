import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeadingText from "./HeadingText";
import { FONT, FONTSIZES, images } from "../constants";
import PropTypes, { arrayOf, oneOfType } from "prop-types";
import CustomText from "./CustomText";

const ScreenHeader = (props) => {
  return (
    <View style={[props.style, { alignItems: "center" }]}>
      {props.hasIcon && (
        <Image style={styles.logo} source={images.basketLogo} />
      )}

      <HeadingText
        style={[styles.title, props.isBold && { fontFamily: FONT.semiBold }]}
      >
        {props.children}
      </HeadingText>
      {props.subtitle !== null && (
        <CustomText style={styles.subtitle}>{props.subtitle}</CustomText>
      )}
    </View>
  );
};

ScreenHeader.propTypes = {
  hasIcon: PropTypes.bool.isRequired,
  isBold: PropTypes.bool.isRequired,
  subtitle: PropTypes.string,
  style: Text.propTypes.style,
  children: oneOfType([arrayOf(PropTypes.string), PropTypes.string]),
};

ScreenHeader.defaultProps = {
  subtitle: null,
  hasIcon: true,
  isBold:false,
};

export default ScreenHeader;

const styles = StyleSheet.create({
  logo: {
    width: 84,
    height: 84,
    marginBottom: "1.5%",
  },

  title: {
    textAlign: "center",
    width: 360,
  },

  subtitle: {
    textAlign: "center",
    fontSize: FONTSIZES.size24,
    marginTop: "-1.5%",
  },
});
