import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS, FONT, FONTSIZES } from "../constants/theme";
import CustomText from "./CustomText";
import images from "../constants/images";
import PropTypes from "prop-types";

const MapViewSwitch = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={props.activeOpacity}
      style={[styles.mapTypePicker, props.style]}
      onPress={props.toggleMapType}
    >
      <ImageBackground
        style={styles.mapTypeImage}
        source={
          props.mapType === "standard"
            ? images.satelliteMap
            : images.standardMap
        }
      >
        <View style={styles.overlay} />
        <CustomText style={styles.mapTypeText}>
          {props.mapType === "standard" ? "Сателит" : "Основна"}
        </CustomText>
      </ImageBackground>
    </TouchableOpacity>
  );
};

MapViewSwitch.propTypes = {
  activeOpacity: PropTypes.number.isRequired,
  toggleMapType: PropTypes.func.isRequired,
  mapType: PropTypes.string.isRequired,
  style: Text.propTypes.style,
};

MapViewSwitch.defaultProps = {
  activeOpacity: 0.5,
  mapType: "standard",
};

export default MapViewSwitch;

const styles = StyleSheet.create({
  mapTypePicker: {
    backgroundColor: COLORS.white,
    width: 61,
    aspectRatio: 1,
    borderRadius: 8,
    borderColor: COLORS.primary,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    padding: 2,
  },
  mapTypeImage: {
    aspectRatio: 1,
    borderRadius: 8,
    overflow: "hidden",
  },

  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.black,
    opacity: 0.4,
    borderRadius: 8,
  },
  mapTypeText: {
    textAlign: "center",
    position: "absolute",
    top: "33%",
    left: 0,
    right: 0,
    fontSize: FONTSIZES.size12,
    color: COLORS.white,
    fontFamily: FONT.bold,
  },
});
