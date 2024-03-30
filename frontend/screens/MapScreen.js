import {
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MapView from "react-native-maps";
import {
  BULGARIA_BOUNDARIES,
  COLORS,
  FONT,
  FONTSIZES,
  MAP_INITIAL_REGION,
  icons,
  images,
} from "../shared/constants";
import CustomText from "../shared/components/CustomText";
import * as Location from "expo-location";

export default function MapScreen() {
  const mapRef = useRef(null);
  const [mapType, setMapType] = useState("standard");
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    Location.requestForegroundPermissionsAsync();
    getCurrentUserLocation();
  }, []);

  const getCurrentUserLocation = async () => {
    setCurrentLocation(await Location.getCurrentPositionAsync({}));
  };

  const toggleMapType = () => {
    const newMapType = mapType === "standard" ? "hybrid" : "standard";
    setMapType(newMapType);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
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
        showsUserLocation={true}
        rotateEnabled={false}
        showsCompass={false}
        // -- Loading --
        loadingEnabled={true}
        loadingBackgroundColor={COLORS.lightGray}
        loadingIndicatorColor={COLORS.primary}
      ></MapView>

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

      <TouchableOpacity
        style={styles.currentLocationButtonContainer}
        onPress={() => {
          getCurrentUserLocation();
          mapRef.current.animateToRegion({
            latitude: currentLocation.coords.latitude,
            longitude: currentLocation.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          });
        }}
      >
        <Image
          style={styles.currentLocationButton}
          source={icons.currentLocation}
        />
      </TouchableOpacity>

      <StatusBar backgroundColor={COLORS.primary} barStyle="default" />
    </SafeAreaView>
  );
}

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
    top: "87%",
    left: "2%",
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
  currentLocationButtonContainer: {
    width: "18%",
    aspectRatio: 1,
    borderRadius: 100,
    position:"absolute",
    bottom:'5%',
    right:'5%',

    shadowColor: COLORS.shadowPrimary,
    elevation: 10,
  },
  currentLocationButton: {
    width: "100%",
    height: "100%",
  },
});
