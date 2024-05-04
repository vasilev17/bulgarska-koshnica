import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import CustomText from "./CustomText";
import { COLORS, FONT, FONTSIZES, icons, images } from "../constants";
import PropTypes from "prop-types";
import DismissKeyboardView from "./DismissKeyboardView";

const BottomSheetHandleComponent = ({ title, titleWidth, icon }) => {
  return (
    <DismissKeyboardView>
      <View>
        <View style={{ flexDirection: "row" }}>
          <CustomText
            style={[styles.bottomSheetTitle, { maxWidth: titleWidth }]}
          >
            {title}
          </CustomText>
          {icon && (
            <TouchableOpacity style={styles.refreshResultsButton}>
              <Image style={styles.refreshResultsIcon} source={icon} />
            </TouchableOpacity>
          )}
        </View>
        <Image style={styles.headerWave} source={images.headerWave} />
        <View style={styles.handleIndicator} />
      </View>
    </DismissKeyboardView>
  );
};

BottomSheetHandleComponent.propTypes = {
  title: PropTypes.string.isRequired,
  icons: PropTypes.node,
};

export default BottomSheetHandleComponent;

const styles = StyleSheet.create({
  bottomSheetTitle: {
    minHeight: 75,
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
    zIndex: -99,
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
  refreshResultsButton: {
    alignSelf: "center",
    marginTop: "2%",
    marginLeft: "5.5%",
  },
  refreshResultsIcon: {
    height: 30,
    aspectRatio: 1,
  },
});
