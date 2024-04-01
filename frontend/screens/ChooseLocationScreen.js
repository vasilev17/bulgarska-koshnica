import { View, StyleSheet, ImageBackground, Image } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import BaseAppComponent from "../shared/components/BaseAppComponent";
import {
  BULGARIA_BOUNDARIES,
  COLORS,
  FONT,
  FONTSIZES,
  MAP_INITIAL_REGION,
  icons,
  images,
} from "../shared/constants";
import MapView from "react-native-maps";
import CustomText from "../shared/components/CustomText";
import { TouchableOpacity } from "react-native";
import * as Location from "expo-location";
import MapViewSwitch from "../shared/components/MapViewSwitch";

const ChooseLocationScreen = () => {
  const mapRef = useRef(null);
  const [mapType, setMapType] = useState("standard");
  const [selectedRegion, setSelectedRegion] = useState({
    latitude: MAP_INITIAL_REGION.latitude,
    longitude: MAP_INITIAL_REGION.longitude,
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
              BULGARIA_BOUNDARIES.northEast,
              BULGARIA_BOUNDARIES.southWest
            )
          }
          //provider={PROVIDER_GOOGLE}
          minZoomLevel={6.5}
          mapType={mapType}
          style={{ ...StyleSheet.absoluteFillObject }}
          initialRegion={MAP_INITIAL_REGION}
          showsMyLocationButton={false}
          //  showsUserLocation={true}
          rotateEnabled={false}
          showsCompass={false}
          // -- Loading --
          loadingEnabled={true}
          loadingBackgroundColor={COLORS.lightGray}
          loadingIndicatorColor={COLORS.primary}
        />

        <Image style={styles.mapMarker} source={icons.mapMarker} />

        <MapViewSwitch
          mapType={mapType}
          toggleMapType={toggleMapType}
          activeOpacity={0.8}
          style={{ top: "82.5%", left: "1%" }}
        />
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
  mapMarker: {
    width: 33,
    height: 45,
    alignSelf: "center",
    position: "absolute",
    top: "38%",
  },
});
