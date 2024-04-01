import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import {
  BULGARIA_BOUNDARIES,
  COLORS,
  MAP_INITIAL_REGION,
} from "../shared/constants";
import * as Location from "expo-location";
import MapViewSwitch from "../shared/components/MapViewSwitch";
import CurrentLocationButton from "../shared/components/CurrentLocationButton";
import icons from "../shared/constants/icons";

export default function MapScreen() {
  const mapRef = useRef(null);
  const [location, setLocation] = useState(null);
  const [mapType, setMapType] = useState("standard");

  useEffect(() => {
    Location.requestForegroundPermissionsAsync();
    getUserLocation();
  }, []);

  const getUserLocation = async () => {
    await Location.watchPositionAsync(
      { accuracy: Location.Accuracy.High },
      (loc) => {
        setLocation(loc.coords);
      }
    );
  };

  const toggleMapType = () => {
    setMapType(mapType === "standard" ? "hybrid" : "standard");
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
        showsUserLocation={false}
        rotateEnabled={false}
        showsCompass={false}
        // -- Loading --
        loadingEnabled={true}
        loadingBackgroundColor={COLORS.lightGray}
        loadingIndicatorColor={COLORS.primary}
      >
        {location !== null && (
          <Marker coordinate={location} image={icons.userCurrentLocation} />
        )}
      </MapView>

      <MapViewSwitch
        mapType={mapType}
        toggleMapType={toggleMapType}
        style={{ top: "84%", left: "2%" }}
      />

      <CurrentLocationButton mapRef={mapRef} currentLocation={location} />

      <StatusBar backgroundColor={COLORS.primary} barStyle="default" />
    </SafeAreaView>
  );
}
