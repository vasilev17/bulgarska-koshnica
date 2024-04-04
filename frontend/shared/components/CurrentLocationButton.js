import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../constants/theme";
import icons from "../constants/icons";
import PropTypes from "prop-types";

const CurrentLocationButton = (props) => {
  const handleButtonPress = () => {
    try {
      if (props.currentLocation === null) props.getUserLocation();

      props.mapRef.current.animateToRegion({
        latitude: props.currentLocation.latitude,
        longitude: props.currentLocation.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    } catch (err) {
      console.warn("Couldn't animate to current location!", err);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.currentLocationButtonContainer}
      onPress={() => handleButtonPress()}
    >
      <Image
        style={styles.currentLocationButton}
        source={icons.currentLocation}
      />
    </TouchableOpacity>
  );
};

CurrentLocationButton.propTypes = {
  getUserLocation: PropTypes.func.isRequired,
  mapRef: PropTypes.object.isRequired,
  currentLocation: PropTypes.object,
};

export default CurrentLocationButton;

const styles = StyleSheet.create({
  currentLocationButtonContainer: {
    width: 70,
    aspectRatio: 1,
    borderRadius: 100,
    position: "absolute",
    bottom: "15.5%",
    right: "1%",

    shadowColor: COLORS.shadowPrimary,
    elevation: 10,
  },
  currentLocationButton: {
    width: "100%",
    height: "100%",
  },
});
