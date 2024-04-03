import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import {
  BULGARIA_BOUNDARIES,
  COLORS,
  MAP_INITIAL_REGION,
  icons,
  images,
} from "../shared/constants";
import * as Location from "expo-location";
import MapViewSwitch from "../shared/components/MapViewSwitch";
import CurrentLocationButton from "../shared/components/CurrentLocationButton";
import SearchBar from "../shared/components/SearchBar";
import DismissKeyboardView from "../shared/components/DismissKeyboardView";
import { ScrollView } from "react-native-gesture-handler";
import FilterTag from "../shared/components/FilterTag";
import { FlashList } from "@shopify/flash-list";

export default function MapScreen() {
  const mapRef = useRef(null);
  const [location, setLocation] = useState(null);
  const [mapType, setMapType] = useState("standard");

  //Fetch Filter Tags from API instead of:
  const filterTags = [
    {
      icon: images.basketLogo,
      title: "Хранителни продукти",
    },
    {
      icon: images.basketLogo,
      title: "Дрехи",
    },
    {
      icon: images.basketLogo,
      title: "Изделия",
    },
    {
      icon: images.basketLogo,
      title: "Семена",
    },
  ];

  useEffect(() => {
    Location.requestForegroundPermissionsAsync();
    getUserLocation();
  }, []);

  const getUserLocation = async () => {
    try {
      await Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High },
        (loc) => {
          setLocation(loc.coords);
        }
      );
    } catch (err) {
      console.warn("User location is turned OFF!", err);
    }
  };

  const toggleMapType = () => {
    setMapType(mapType === "standard" ? "hybrid" : "standard");
  };

  return (
    <DismissKeyboardView>
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

        <SearchBar filterTags={filterTags} />

        <CurrentLocationButton
          mapRef={mapRef}
          currentLocation={location}
          getUserLocation={getUserLocation}
        />

        <MapViewSwitch
          mapType={mapType}
          toggleMapType={toggleMapType}
          style={{ top: "84%", left: "2%" }}
        />

        {/* <StatusBar backgroundColor={COLORS.primary} barStyle="default" /> */}
      </SafeAreaView>
    </DismissKeyboardView>
  );
}

const styles = StyleSheet.create({
  filterTags: {
    position: "absolute",
  },
});
