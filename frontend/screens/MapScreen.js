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
import ShopLocationBottomSheet from "../shared/components/ShopLocationBottomSheet";

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
      categories: ["Хранителни Продукти", "Други"],
      description:
        "Това е магазин в Пловдив",
      rating: 4,
      usersRated: 402,
      image: images.producer,
      contactNumber: "+359 888 888 888",
      businessHours: {
        monday: "08:00ч. - 20:00ч.",
        tuesday: "08:00ч. - 20:00ч.",
        wednesday: "08:00ч. - 20:00ч.",
        thursday: "08:00ч. - 20:00ч.",
        friday: "08:00ч. - 20:00ч.",
        saturday: "08:00ч. - 20:00ч.",
        sunday: "08:00ч. - 20:00ч.",
      },
      website: "istinskimed.bg",
      delivery: "Да, в радиус от 20км",
      hasCardPayment: true,
      products: [
        { image: images.buyer, price: 4.0 },
        { image: images.buyer, price: 155.0 },
      ],
      adress: "Баня Мадара, Булевард Прага 23, 1000 Петте Кюшета, София",
      reviews: [
        {
          user: "Бонавентура Балестриери",
          rating: 4,
          date: "13/10/2023",
          comment:
            "С Polenity истински мед сме в партньорски отношения повече от 2 години. До момента сме успели да извървим доста дълъг път заедно и надявам се занапред да продължим да сме заедно в мисията по опазване на пчелите и осигуряване на истински качествени пчелни продукти!",
        },
      ],
      coordinate: {
        latitude: 42.12219224316601,
        longitude: 24.737273375719596,
      },
    },
    {
      title: "Мед и медни продукти Бояжиеви",
      categories: ["Хранителни Продукти", "Други", "Семена"],
      description:
        "Медни продукти Бояджиеви е място от където всеки може да купува мед за себе си и своите близки без да се притеснява за качеството на продуктите. Те са от домашни пчели отглеждани в перфектни условия от професионалисти.",
      rating: 4,
      usersRated: 402,
      image: images.producer,
      contactNumber: "+359 888 888 888",
      businessHours: {
        monday: "08:00ч. - 20:00ч.",
        tuesday: "08:00ч. - 20:00ч.",
        wednesday: "08:00ч. - 20:00ч.",
        thursday: "08:00ч. - 20:00ч.",
        friday: "08:00ч. - 20:00ч.",
        saturday: "08:00ч. - 20:00ч.",
        sunday: "08:00ч. - 20:00ч.",
      },
      website: "istinskimed.bg",
      delivery: "Да, в радиус от 20км",
      hasCardPayment: true,
      products: [
        { image: images.buyer, price: 4.0 },
        { image: images.buyer, price: 155.0 },
      ],
      adress: "Баня Мадара, Булевард Прага 23, 1000 Петте Кюшета, София",
      reviews: [
        {
          user: "Бонавентура Балестриери",
          rating: 4,
          date: "13/10/2023",
          comment:
            "С Polenity истински мед сме в партньорски отношения повече от 2 години. До момента сме успели да извървим доста дълъг път заедно и надявам се занапред да продължим да сме заедно в мисията по опазване на пчелите и осигуряване на истински качествени пчелни продукти!",
        },
      ],
      coordinate: {
        latitude: 42.6910439913755,
        longitude: 23.311293253307266,
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
    setSelectedShopLocation(shops[index]);
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
                <CustomText style={{ fontSize: 12 }}>Marker Title</CustomText>
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
          style={{ bottom: "8%", right: "2%" }}
        />

        {/* <StatusBar backgroundColor={COLORS.primary} barStyle="default" /> */}
      </SafeAreaView>
    </DismissKeyboardView>,

    // -- Shop Location BottomSheetModal --

    <ShopLocationBottomSheet
      key={1}
      ref={locationBottomSheetModalRef}
      title={selectedShopLocation?.title}
      rating={selectedShopLocation?.rating}
      usersRated={selectedShopLocation?.usersRated}
      categories={selectedShopLocation?.categories}
      hasCardPayment={selectedShopLocation?.hasCardPayment}
      delivery={selectedShopLocation?.delivery}
      image={selectedShopLocation?.image}
      description={selectedShopLocation?.description}
    />,
  ];
}
