import { View, SafeAreaView, Image, StyleSheet } from "react-native";
import React from "react";
import DismissKeyboardView from "./DismissKeyboardView";
import ScreenHeader from "./ScreenHeader";
import { COLORS, FOOTERSTYLES, SIZES, images } from "../constants";
import { arrayOf, oneOfType } from "prop-types";
import PropTypes from "prop-types";
import CustomButton from "./CustomButton";

const BaseAppScreen = (props) => {
  const renderFooter = () => {
    if (props.footerWaveType === FOOTERSTYLES.footerWithContent)
      return (
        <Image
          style={styles.footerWaveWithContent}
          source={images.footerWaveWithContent}
        />
      );
    else
      return (
        <Image style={styles.footerWaveEmpty} source={images.footerWaveEmpty} />
      );
  };

  const renderBackButton = () => {
    if (props.hasBackButton === true)
      return (
        <CustomButton
          size={SIZES.small}
          buttonColor={COLORS.white}
          fontColor={COLORS.text}
          hasShadow={false}
          style={styles.backButton}
        >
          Назад
        </CustomButton>
      );
  };

  const renderContinueButton = () => {
    if (props.hasContinueButton === true)
      return (
        <CustomButton
          size={SIZES.small}
          buttonColor={COLORS.secondary}
          fontColor={COLORS.white}
          hasShadow={true}
          style={styles.continueButton}
        >
          Напред
        </CustomButton>
      );
  };

  return (
    <DismissKeyboardView>
      <SafeAreaView style={styles.appContainer}>
        <Image style={styles.headerWave} source={images.headerWave} />

        <View
          style={[styles.screenContentContainer, { top: props.contentOffset }]}
        >
          <ScreenHeader>{props.screenHeaderTitle}</ScreenHeader>
          {props.children}
        </View>

        {renderFooter()}
        {renderBackButton()}
        {renderContinueButton()}
      </SafeAreaView>
    </DismissKeyboardView>
  );
};

BaseAppScreen.propTypes = {
  footerWaveType: PropTypes.number.isRequired,
  hasBackButton: PropTypes.bool.isRequired,
  hasContinueButton: PropTypes.bool.isRequired,
  screenHeaderTitle: PropTypes.string.isRequired,
  contentOffset: oneOfType([PropTypes.number, PropTypes.string]),
  children: oneOfType([arrayOf(PropTypes.node), PropTypes.node]),
};

BaseAppScreen.defaultProps = {
  footerWaveType: FOOTERSTYLES.footerWithContent,
  hasBackButton: true,
  hasContinueButton: true,
  contentOffset: 0,
};

export default BaseAppScreen;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },

  screenContentContainer: {
    position: "absolute",
    alignItems: "center",
    left: 0,
    right: 0,
  },

  headerWave: {
    width: "100%",
    height: 135, //aprox. = 18%
    zIndex: -1,
  },

  footerWaveEmpty: {
    width: "100%",
    height: 154, //aprox. = 18%
    zIndex: -1,
  },

  footerWaveWithContent: {
    width: "100%",
    height: 200,
    zIndex: -1,
  },

  backButton: {
    position: "absolute",
    left: "3.5%",
    bottom: "6%",
  },

  continueButton: {
    position: "absolute",
    right: "7.5%",
    bottom: "6%",
  },
});
