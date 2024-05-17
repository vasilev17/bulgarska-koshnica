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

  const renderLeftButton = () => {
    if (
      props.hasLeftButton === true &&
      props.footerWaveType !== FOOTERSTYLES.footerEmpty
    )
      return (
        <CustomButton
          size={SIZES.small}
          buttonColor={COLORS.white}
          fontColor={COLORS.text}
          hasShadow={false}
          style={styles.leftButton}
        >
          {props.leftButtonText}
        </CustomButton>
      );
  };

  const renderContinueButton = () => {
    if (
      props.hasContinueButton === true &&
      props.footerWaveType !== FOOTERSTYLES.footerEmpty
    )
      return (
        <CustomButton
          size={SIZES.small}
          buttonColor={COLORS.secondary}
          fontColor={COLORS.white}
          hasShadow={true}
          style={styles.continueButton}
          onPress={props.onContinuePress}
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
          <ScreenHeader subtitle={props.screenHeaderSubtitle} hasIcon={props.hasHeaderIcon} isBold={props.isHeaderBold}>
            {props.screenHeaderTitle}
          </ScreenHeader>
          {props.children}
        </View>

        {renderFooter()}
        {renderLeftButton()}
        {renderContinueButton()}
      </SafeAreaView>
    </DismissKeyboardView>
  );
};

BaseAppScreen.propTypes = {
  footerWaveType: PropTypes.number.isRequired,
  hasLeftButton: PropTypes.bool.isRequired,
  leftButtonText: PropTypes.string.isRequired,
  hasContinueButton: PropTypes.bool.isRequired,
  screenHeaderTitle: PropTypes.string.isRequired,
  hasHeaderIcon:PropTypes.bool.isRequired,
  isHeaderBold:PropTypes.bool.isRequired,
  screenHeaderSubtitle: PropTypes.string,
  onContinuePress: PropTypes.func,
  contentOffset: oneOfType([PropTypes.number, PropTypes.string]),
  children: oneOfType([arrayOf(PropTypes.node), PropTypes.node]),
};

BaseAppScreen.defaultProps = {
  footerWaveType: FOOTERSTYLES.footerWithContent,
  hasLeftButton: true,
  leftButtonText: "Назад",
  hasContinueButton: true,
  screenHeaderSubtitle: null,
  contentOffset: 0,
  hasHeaderIcon:true,
  isHeaderBold:false,
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

  leftButton: {
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
