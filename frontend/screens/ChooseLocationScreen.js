import { View, StyleSheet, ImageBackground } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import BaseAppScreen from "../shared/components/BaseAppScreen";
import { COLORS, FONT, FONTSIZES, images } from "../shared/constants";
import MapView from "react-native-maps";
import CustomText from "../shared/components/CustomText";
import { TouchableOpacity } from "react-native";

const ChooseLocationScreen = () => {
  const mapRef = useRef(null);
  const [mapType, setMapType] = useState("standard");

  const bulgariaBoundaries = {
    northEast: { latitude: 44.22501876753331, longitude: 28.602242578947614 },
    southWest: { latitude: 41.231853961326166, longitude: 22.293343826295025 },
  };

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setMapBoundaries(
        bulgariaBoundaries.northEast,
        bulgariaBoundaries.southWest
      );
    }
  }, []);

  const toggleMapType = () => {
    const newMapType = mapType === "standard" ? "hybrid" : "standard";
    setMapType(newMapType);
  };

  return (
    <BaseAppScreen
      contentOffset={"11.5%"}
      screenHeaderTitle="Посочете локацията на бизнеса Ви"
    >
      <View style={[styles.locationPicker, { marginTop: "4.5%" }]}>
        <MapView
          // -- Initial Props --
          ref={mapRef}
          //  provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          minZoomLevel={6}
          mapType={mapType}
          style={{ ...StyleSheet.absoluteFillObject }}
          initialRegion={{
            latitude: 42.6294024271361,
            longitude: 25.276131942786883,
            latitudeDelta: 4.5,
            longitudeDelta: 4.5,
          }}
          // -- Props --
          showsMyLocationButton={true}
          showsUserLocation={true}
          rotateEnabled={false}
          showsCompass={false}
          // -- Loading --
          loadingEnabled={true}
          loadingBackgroundColor={COLORS.lightGray}
          loadingIndicatorColor={COLORS.primary}
        ></MapView>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.mapTypePicker}
        onPress={toggleMapType}
      >
        <ImageBackground
          style={styles.mapTypeImage}
          source={
            mapType === "standard" ? images.satelliteMap : images.standardMap
          }
        >
          <View style={styles.overlay} />
          <CustomText style={styles.mapTypeText}>
            {mapType === "standard" ? "Сателит" : "Основна"}
          </CustomText>
        </ImageBackground>
      </TouchableOpacity>
    </BaseAppScreen>
  );
};

export default ChooseLocationScreen;

const styles = StyleSheet.create({
  locationPicker: {
    overflow: "hidden",
    width: "93%", //380
    height: "198%", //370
    borderRadius: 10,
    borderColor: COLORS.graySecondary,
    borderWidth: 2,
    elevation: 5,
  },
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
    top: "260%",
    left: "5%",
  },
  mapTypeImage: {
    width: 54,
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
    fontFamily: FONT.semiBold,
  },
});
