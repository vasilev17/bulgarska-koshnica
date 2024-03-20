import { View, StyleSheet, ImageBackground, Image } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import BaseAppComponent from "../shared/components/BaseAppComponent";
import { COLORS, FONT, FONTSIZES, icons, images } from "../shared/constants";
import MapView from "react-native-maps";
import CustomText from "../shared/components/CustomText";
import { TouchableOpacity } from "react-native";
import * as Location from "expo-location";

const ChooseLocationScreen = () => {
  const bulgariaBoundaries = {
    northEast: { latitude: 44.22501876753331, longitude: 28.602242578947614 },
    southWest: { latitude: 41.231853961326166, longitude: 22.293343826295025 },
  };
  const mapInitialRegion = {
    latitude: 42.6294024271361,
    longitude: 25.276131942786883,
    latitudeDelta: 4.5,
    longitudeDelta: 4.5,
  };

  const mapRef = useRef(null);
  const [mapType, setMapType] = useState("standard");
  const [selectedRegion, setSelectedRegion] = useState({
    latitude: mapInitialRegion.latitude,
    longitude: mapInitialRegion.longitude,
  });

  useEffect(() => {
    Location.requestForegroundPermissionsAsync();
  }, []);

  const toggleMapType = () => {
    const newMapType = mapType === "standard" ? "hybrid" : "standard";
    setMapType(newMapType);
  };

  const pickLocation = () => {
    console.log(
      "Selected location is: " +
        selectedRegion.latitude +
        ", " +
        selectedRegion.longitude
    );
  };

  return (
    <BaseAppComponent
      contentOffset={"11.5%"}
      screenHeaderTitle="Посочете локацията на бизнеса Ви"
      onContinuePress={pickLocation}
    >
      <View style={[styles.locationPicker, { marginTop: "4.5%" }]}>
        <MapView
          ref={mapRef}
          onRegionChangeComplete={(region) =>
            setSelectedRegion({
              latitude: region.latitude,
              longitude: region.longitude,
            })
          }
          onMapLoaded={() =>
            mapRef.current.setMapBoundaries(
              bulgariaBoundaries.northEast,
              bulgariaBoundaries.southWest
            )
          }
          //provider={PROVIDER_GOOGLE}
          minZoomLevel={6.5}
          mapType={mapType}
          style={{ ...StyleSheet.absoluteFillObject }}
          initialRegion={mapInitialRegion}
          showsMyLocationButton={false}
          //  showsUserLocation={true}
          rotateEnabled={false}
          showsCompass={false}
          // -- Loading --
          loadingEnabled={true}
          loadingBackgroundColor={COLORS.lightGray}
          loadingIndicatorColor={COLORS.primary}
        ></MapView>

        <Image style={styles.mapMarker} source={icons.mapMarker} />

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
      </View>
    </BaseAppComponent>
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
    top: "82.5%",
    left: "1%",
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
    fontFamily: FONT.bold,
  },
  mapMarker: {
    width: 33,
    height: 45,
    alignSelf: "center",
    position: "absolute",
    top: "38%",
  },
});
