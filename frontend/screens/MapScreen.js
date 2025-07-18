import {
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import {
  BULGARIA_BOUNDARIES,
  COLORS,
  FONT,
  MAP_INITIAL_REGION,
  icons,
  images,
} from "../shared/constants";
import * as Location from "expo-location";
import MapViewSwitch from "../shared/components/MapViewSwitch";
import CurrentLocationButton from "../shared/components/CurrentLocationButton";
import SearchBar from "../shared/components/SearchBar";
import DismissKeyboardView from "../shared/components/DismissKeyboardView";
import CustomText from "../shared/components/CustomText";
import ShopLocationBottomSheet from "../shared/components/ShopLocationBottomSheet";
import RatingBottomSheet from "../shared/components/RatingBottomSheet";
import SearchBottomSheet from "../shared/components/SearchBottomSheet";
import SideDrawer from "../shared/components/SideDrawer";
import ReportBottomSheet from "../shared/components/ReportBottomSheet";

export default function MapScreen() {
  const mapRef = useRef(null);
  const [location, setLocation] = useState(null);
  const [mapType, setMapType] = useState("standard");
  const [selectedShopLocation, setSelectedShopLocation] = useState(null);
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const locationBottomSheetModalRef = useRef(null);
  const searchBottomSheetModalRef = useRef(null);
  const ratingBottomSheetModalRef = useRef(null);
  const reportBottomSheetModalRef = useRef(null);

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
      description: "Това е магазин в Пловдив",
      rating: 4,
      usersRated: 402,
      image: images.producer,
      contactNumber: "+359 888 888 888",
      businessHours: {
        Понеделник: "8:00ч. - 20:00ч.",
        Вторник: "8:00ч. - 20:00ч.",
        Сряда: "8:00ч. - 20:00ч.",
        Четвъртък: "8:00ч. - 20:00ч.",
        Петък: "8:00ч. - 20:00ч.",
        Събота: "8:00ч. - 20:00ч.",
        Неделя: "8:00ч. - 20:00ч.",
      },
      website: "istinskimed.bg",
      delivery: "Да, в радиус от 20км",
      hasCardPayment: true,
      products: [
        {
          name: "Буркан сладък пчелен дъбов мед",
          image: images.buyer,
          price: 4.0,
        },
        { name: "Пчелна пита", image: images.buyer, price: 155.0 },
      ],
      address: "Баня Мадара, Булевард Прага 23, 1000 Петте Кюшета, София",
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
        Понеделник: "8:00ч. - 20:00ч.",
        Вторник: "8:00ч. - 20:00ч.",
        Сряда: "8:00ч. - 20:00ч.",
        Четвъртък: "8:00ч. - 20:00ч.",
        Петък: "8:00ч. - 20:00ч.",
        Събота: "10:00ч. - 20:00ч.",
        Неделя: "Затворено",
      },
      website: "istinskimed.bg",
      delivery: "Да, в радиус от 20км",
      hasCardPayment: true,
      products: [
        {
          name: "Буркан сладък пчелен дъбов мед",
          image: images.buyer,
          price: "4.00",
          measurement: "кг",
        },
        {
          name: "Пчелна пита ",
          image: images.buyer,
          price: "155.00",
          measurement: "бр",
        },
        {
          name: "Пчелна пита ",
          image: images.buyer,
          price: "12.99",
          measurement: "бр",
        },
        {
          name: "Пчелна пита ",
          image: images.buyer,
          price: 155.0,
          measurement: "бр",
        },
        {
          name: "Пчелна пита ",
          image: images.buyer,
          price: 155.0,
          measurement: "бр",
        },
        {
          name: "Пчелна пита ",
          image: images.buyer,
          price: 155.0,
          measurement: "бр",
        },
      ],
      address: "Баня Мадара, Булевард Прага 23, 1000 Петте Кюшета, София",
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

  //Fetch Regional Search Results from API instead of:
  const regionalSearchResults = [
    {
      icon: icons.shop,
      title: "Мед и медни продукти Бояджиеви",
      address: "София, Баня Мадара, Булевард Прага 23, 1000 София",
    },
    {
      icon: icons.shop,
      title: 'Мед "При Баба"',
      address: "София, бул. „Черни връх“ 49, 1407 Хладилника, 1407 София",
    },
    {
      icon: icons.shop,
      title: 'Мед "Бацето"',
      address: "София, бул. „Константин Величков“ 4, 130, 1309 София",
    },
  ];

  //Fetch More Search Results from API instead of:
  const moreSearchResults = [
    {
      icon: icons.shop,
      title: "Пчелен мед от производител гр. ВЪРШЕЦ",
      address: "Монтана, ул. Христо Ботев 43, 3540 Вършец",
    },
    {
      icon: icons.shop,
      title: "КумановМед",
      address: "Стара Загора, ул. „Братя Жекови“ 62, 6002 Стара Загора",
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
    searchBottomSheetModalRef.current?.close();
    locationBottomSheetModalRef.current?.present();
  };

  return [
    <SideDrawer
      key={0}
      open={sideDrawerOpen}
      onOpen={() => setSideDrawerOpen(true)}
      onClose={() => setSideDrawerOpen(false)}
    >
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
            toolbarEnabled={false}
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

                  {/* Make it so that the name is displayed only after a certain zoom level (map coordinate delta) */}
                  <CustomText
                    style={{
                      fontSize: 12,
                      maxWidth: 150,
                      textAlign: "center",
                      fontFamily: FONT.semiBold,
                    }}
                  >
                    {marker.title}
                  </CustomText>
                </View>
              </Marker>
            ))}
          </MapView>

          <View style={styles.mapDrawerOverlay} />

          <SearchBar
            filterTags={filterTags}
            onAccountButtonClick={() => setSideDrawerOpen(true)}
            onSubmit={() => {
              locationBottomSheetModalRef.current?.close();
              //Update the results that are sent to the searchBottomSheetModal before presenting it
              searchBottomSheetModalRef.current?.present();
            }}
          />

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
      </DismissKeyboardView>

      {/* Shop Location BottomSheetModal */}

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
        address={selectedShopLocation?.address}
        contactNumber={selectedShopLocation?.contactNumber}
        website={selectedShopLocation?.website}
        coordinate={selectedShopLocation?.coordinate}
        businessHours={selectedShopLocation?.businessHours}
        products={selectedShopLocation?.products}
        onRatingEnd={() =>
          setTimeout(() => {
            ratingBottomSheetModalRef.current?.present();
          }, 250)
        }
        onReportPress={() => reportBottomSheetModalRef.current?.present()}
      />

      {/* Search BottomSheetModal */}

      <SearchBottomSheet
        key={2}
        ref={searchBottomSheetModalRef}
        regionalResults={regionalSearchResults}
        moreResults={moreSearchResults}
      />
    </SideDrawer>,

    // -- Rating BottomSheetModal --

    <RatingBottomSheet
      key={3}
      ref={ratingBottomSheetModalRef}
      title={selectedShopLocation?.title}
    />,

    // -- Report BottomSheetModal --

    <ReportBottomSheet
      key={4}
      ref={reportBottomSheetModalRef}
      title={selectedShopLocation?.title}
    />,
  ];
}

const styles = StyleSheet.create({
  mapDrawerOverlay: {
    position: "absolute",
    left: 0,
    top: 0,
    opacity: 0.0,
    height: Dimensions.get("window").height,
    width: 10,
  },
});
