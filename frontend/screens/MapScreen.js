import { Image, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
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
import BottomSheetModalComponent from "../shared/components/BottomSheetModalComponent";
import CustomText from "../shared/components/CustomText";

export default function MapScreen() {
  const mapRef = useRef(null);
  const [location, setLocation] = useState(null);
  const [mapType, setMapType] = useState("standard");
  const [selectedShopLocation, setSelectedShopLocation] = useState(null);

  const locationBottomSheetModalRef = useRef(null);

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

  //Fetch Shops from API instead of:
  const shops = [
    {
      title: "Локация Магазин Пловдив 1",
      coordinate: {
        latitude: 42.16419970972591,
        longitude: 24.739422035052804,
      },
    },
    {
      title: "Локация Магазин Пловдив 2",
      coordinate: {
        latitude: 42.14889737233893,
        longitude: 24.73239116289792,
      },
    },
    {
      title: "Локация Магазин Варна",
      coordinate: {
        latitude: 43.237982054953974,
        longitude: 27.91447072795025,
      },
    },
    {
      title: "Локация Магазин Плевен",
      coordinate: {
        latitude: 43.453698724518794,
        longitude: 24.60758610316779,
      },
    },
    {
      title: "Локация Магазин София",
      coordinate: {
        latitude: 42.70744896555424,
        longitude: 23.311199439631807,
      },
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

  const onMarkerPress = (index) => {
    console.log("Marker : ", index);
    setSelectedShopLocation(shops[index])
    locationBottomSheetModalRef.current?.present();
  };

  return [
    <DismissKeyboardView key={0}>
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
          loadingBackgroundColor={COLORS.white}
          loadingIndicatorColor={COLORS.primary}
        >
          {location !== null && (
            <Marker coordinate={location} image={icons.userCurrentLocation} />
          )}

          {shops.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.coordinate}
              // image={icons.mapMarker}
              onPress={() => onMarkerPress(index)}
            >
              <View style={{ alignItems: "center", overflow: "visible" }}>
                <Image
                  source={icons.mapMarker}
                  style={{ width: 22, height: 32 }}
                />
                <CustomText style={{ fontSize: 12 }}>Your text here</CustomText>
              </View>
            </Marker>
          ))}
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
          style={{ bottom: "7.5%", right: "2%" }}
        />

        {/* <StatusBar backgroundColor={COLORS.primary} barStyle="default" /> */}
      </SafeAreaView>
    </DismissKeyboardView>,

    // -- Shop Location BottomSheetModal --

    <BottomSheetModalComponent
      key={1}
      snapPoints={["80%"]}
      ref={locationBottomSheetModalRef}
      title={selectedShopLocation?.title}
    >
      <CustomText>
        Това са общите условия за ползване на приложението!{"\n"}
        {"\n"}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu
        justo augue. Pellentesque vel tincidunt metus. Suspendisse a erat
        dictum, porta nisl non, imperdiet tellus. Proin fermentum placerat quam
        ut facilisis. Nulla eu condimentum odio. Sed gravida bibendum suscipit.
        Aenean venenatis sagittis tortor. Quisque nisl lorem, posuere nec lorem
        at, ullamcorper facilisis urna. Nullam bibendum, neque dapibus ultrices
        aliquet, massa tellus volutpat mi, et congue mi lacus quis ante. Donec
        in massa id enim commodo placerat. Maecenas in sem velit. Fusce
        efficitur volutpat posuere. Sed eu dui quis neque aliquam finibus.
        Curabitur non ligula ac lorem convallis blandit quis a enim. Etiam
        dictum massa non sagittis scelerisque. Nulla molestie, nunc vel semper
        pellentesque, justo augue semper diam, eu fermentum nunc nisl vel
        sapien. Sed in elit varius, malesuada felis vel, cursus urna. Praesent
        in finibus purus, vel maximus lectus. Nullam erat sem, posuere eu
        malesuada aliquet, volutpat ac mi. Vestibulum.
      </CustomText>
    </BottomSheetModalComponent>,
  ];
}
