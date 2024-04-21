import {
  Dimensions,
  Easing,
  Image,
  Linking,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { forwardRef, useState } from "react";
import { COLORS, FONT, FONTSIZES, icons } from "../constants";
import BottomSheetModalComponent from "./BottomSheetModalComponent";
import CustomText from "./CustomText";
import Tooltip from "rn-tooltip";
import ShadowBorder from "./ShadowBorder";
import { FlashList } from "@shopify/flash-list";
import ProductGalleryItem from "./ProductGalleryItem";
import { ScrollView } from "react-native-gesture-handler";
import StarRating from "react-native-star-rating-widget";
import { useAtom } from "jotai";
import { currentLocationRating } from "../globalState";
import UserReview from "./UserReview";
import WarningButton from "./WarningButton";

const ShopLocationBottomSheet = forwardRef((props, ref) => {
  const vh = Dimensions.get("window").height;
  const [isDescriptionShown, setIsDescriptionShown] = useState(false);
  const [rating, setRating] = useAtom(currentLocationRating);

  //Fetch Filter Tags from API instead of:
  const reviews = [
    {
      user: "Бонавентура Балестриери",
      rating: 4,
      date: "13/10/2023",
      comment:
        "С Polenity/ истински мед сме в партньорски отношения повече от 2 години. До момента сме успели да извървим доста дълъг път заедно и надявам се занапред да продължим да сме заедно в мисията по опазване на пчелите и осигуряване на истински качествени пчелни продукти!",
    },
    {
      user: "Ivan Petrov",
      rating: 2,
      date: "05/09/2023",
      comment:
        "Въобще не беше хубав медът... Със семейството ми сме много разочаровани.",
    },
    {
      user: "Елен Бобева",
      rating: 5,
      date: "25/04/2023",
      comment:
        "Много хъбав мед! Поръчвам си вече за 4ти път и съм много доволна.",
    },
  ];

  const formatDeliveryText = () => {
    switch (props.delivery) {
      case "Да, в цяла България":
        return "Доставка в цяла България";
      case "Да, в населеното място":
        return "Доставка в населеното място";
      default:
        return (
          <View style={{ flexDirection: "row" }}>
            <CustomText style={styles.sectionText}>
              Доставка в радиус: {props.delivery?.replace(/^\D+/g, "")}
            </CustomText>
          </View>
        );
    }
  };

  const constructCategoriesString = () => {
    if (
      props.categories?.length !== undefined &&
      props.categories?.length > 0
    ) {
      let result = "";
      if (props.categories.includes("Други")) {
        if (props.categories?.length > 1) {
          props.categories.splice(props.categories.indexOf("Други"), 1);
          result = props.categories.join(", ");
          result += " и други";
          return "Магазин за " + result.toLowerCase();
        } else {
          return "";
        }
      } else {
        if (props.categories?.length > 1) {
          let last = props.categories.pop();
          result = props.categories.join(", ");
          result += " и " + last;
          return "Магазин за " + result.toLowerCase();
        } else {
          return "Магазин за " + props.categories[0]?.toLowerCase();
        }
      }
    }
  };

  return (
    <BottomSheetModalComponent
      hasBackdrop={false}
      snapPoints={["40%", "15.5%", "95%"]}
      ref={ref}
      title={props.title}
      titleWidth={270}
      underFooterComponent={
        <WarningButton icon={icons.danger}>
          Докладвайте този бизнес
        </WarningButton>
      }
    >
      <View style={{ paddingHorizontal: "4%" }}>
        <View style={styles.ratingContainer}>
          <Image source={icons.ratings[props.rating]} style={styles.rating} />
          <CustomText style={styles.usersRatedText}>
            ({props.usersRated})
          </CustomText>
        </View>

        <View style={styles.categoryContainer}>
          <CustomText style={styles.categoryText}>
            {constructCategoriesString()}
          </CustomText>
          {props.hasCardPayment && (
            <Tooltip
              popover={
                <CustomText
                  style={{
                    color: COLORS.white,
                    fontSize: FONTSIZES.size14,
                    textAlign: "center",
                  }}
                >
                  Плащане с карта
                </CustomText>
              }
              backgroundColor={COLORS.primary}
              height={55}
              width={100}
              withOverlay={false}
            >
              <Image source={icons.cardPayment} style={styles.card} />
            </Tooltip>
          )}
          {props.delivery !== "Не" && (
            <Tooltip
              popover={
                <CustomText
                  style={{ color: COLORS.white, fontSize: FONTSIZES.size14 }}
                >
                  Предлага доставка
                </CustomText>
              }
              backgroundColor={COLORS.primary}
              height={55}
              width={100}
              withOverlay={false}
            >
              <Image source={icons.deliveryTruck} style={styles.delivery} />
            </Tooltip>
          )}
        </View>

        {props.image && (
          <Image
            source={props.image}
            style={[styles.shopImage, { height: vh * 0.33 }]}
          />
        )}

        <TouchableOpacity
          onPress={() => setIsDescriptionShown(!isDescriptionShown)}
          activeOpacity={0.7}
          style={[
            styles.descriptionButton,
            isDescriptionShown && {
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            },
          ]}
        >
          <CustomText style={styles.descriptionButtonText}>Описание</CustomText>
          <Image
            source={icons.arrowDown}
            style={[
              styles.descriptionButtonIcon,
              isDescriptionShown && { transform: [{ rotate: "180deg" }] },
            ]}
          />
        </TouchableOpacity>

        {isDescriptionShown && (
          <View style={styles.descriptionContainer}>
            <CustomText style={styles.descriptionText}>
              {props.description}
            </CustomText>
          </View>
        )}
      </View>

      <ShadowBorder />

      <View style={styles.rowContainer}>
        <Image source={icons.location} style={styles.locationIcon} />
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              Platform.select({
                ios: `maps:0,0?q=${props.coordinate.latitude}, ${props.coordinate.longitude}`,
                android: `geo:0,0?q=${props.coordinate.latitude}, ${props.coordinate.longitude}`,
              })
            )
          }
        >
          <CustomText style={styles.sectionText}>{props.address}</CustomText>
        </TouchableOpacity>
      </View>

      <View style={styles.rowContainer}>
        <Image source={icons.phone} style={styles.phoneIcon} />
        <TouchableOpacity
          onPress={() => Linking.openURL(`tel:${props.contactNumber}`)}
        >
          <CustomText style={styles.sectionText}>
            {props.contactNumber}
          </CustomText>
        </TouchableOpacity>
      </View>

      <View style={[styles.rowContainer, { alignItems: "flex-start" }]}>
        <Image source={icons.clock} style={styles.businessHoursIcon} />

        <View>
          {props.businessHours &&
            Object.keys(props.businessHours).map((prop) => (
              <CustomText
                style={[styles.sectionText, { marginVertical: "0.5%" }]}
              >
                {prop}
              </CustomText>
            ))}
        </View>

        <View style={{ marginLeft: "27%" }}>
          {props.businessHours &&
            Object.keys(props.businessHours).map((prop) => (
              <CustomText
                style={[styles.sectionText, { marginVertical: "0.5%" }]}
              >
                {props.businessHours[prop]}
              </CustomText>
            ))}
        </View>
      </View>

      <View style={styles.rowContainer}>
        <Image source={icons.websitePlanet} style={styles.websiteIcon} />
        <TouchableOpacity
          onPress={() => Linking.openURL(`https://${props.website}`)}
        >
          <CustomText style={styles.sectionText}>{props.website}</CustomText>
        </TouchableOpacity>
      </View>

      {props.delivery != "Не" && (
        <View style={styles.rowContainer}>
          <Image source={icons.deliveryTruck} style={styles.deliveryIcon} />
          <CustomText style={styles.sectionText}>
            {formatDeliveryText()}
          </CustomText>
        </View>
      )}

      {props.hasCardPayment && (
        <View style={styles.rowContainer}>
          <Image source={icons.cardPayment} style={styles.cardIcon} />
          <CustomText style={styles.sectionText}>
            Приема се плащане с карта
          </CustomText>
        </View>
      )}

      <ShadowBorder isTopBorder={false} />

      {props.products && (
        <View style={{ marginTop: "3%" }}>
          <FlashList
            contentContainerStyle={{ paddingHorizontal: 15 }}
            overScrollMode="never"
            horizontal
            showsHorizontalScrollIndicator={false}
            renderScrollComponent={ScrollView}
            data={props.products}
            renderItem={({ item }) => (
              <ProductGalleryItem
                name={item.name}
                image={item.image}
                price={item.price}
                measurement={item.measurement}
              />
            )}
            estimatedItemSize={10}
          />
        </View>
      )}

      <View style={styles.ratingSection}>
        <CustomText style={styles.ratingText}>Напишете отзив:</CustomText>
        <StarRating
          rating={rating}
          onChange={setRating}
          color={COLORS.yellow}
          starSize={50}
          emptyColor={COLORS.secondary}
          enableHalfStar={false}
          starStyle={{ marginRight: -7 }}
          onRatingEnd={() => props.onRatingEnd()}
          animationConfig={{
            scale: 1.2,
            delay: 150,
            duration: 150,
            easing: Easing.elastic(1),
          }}
        />
      </View>

      {/* <View style={{ flex: 1 }}>
        <FlashList
          contentContainerStyle={{ paddingVertical: vh / 75 }}
          showsVerticalScrollIndicator={false}
          data={reviews}
          //Render load more button in the list footer component
          ListFooterComponent={
            <View>
              <TouchableOpacity>Прочетете още...</TouchableOpacity>
            </View>
          }
          renderItem={({ item }) => (
            <UserReview
              user={item.user}
              rating={item.rating}
              date={item.date}
              comment={item.comment}
            />
          )}
          estimatedItemSize={25}
        />
      </View> */}

      <UserReview
        user={reviews[0].user}
        rating={reviews[0].rating}
        date={reviews[0].date}
        comment={reviews[0].comment}
      />
    </BottomSheetModalComponent>
  );
});

export default ShopLocationBottomSheet;

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  rating: {
    height: 17,
    width: 100,
    resizeMode: "contain",
  },
  usersRatedText: {
    color: COLORS.yellow,
    fontSize: FONTSIZES.size14,
    fontFamily: FONT.semiBold,
  },
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  categoryText: {
    marginRight: 20,
    width: "77%",
    fontSize: FONTSIZES.size17,
  },
  card: {
    height: 20,
    width: 25,
    resizeMode: "contain",
    marginRight: 5,
  },
  delivery: {
    height: 20,
    width: 25,
    resizeMode: "contain",
  },
  shopImage: {
    width: "100%",
    // height: "43%",
    borderRadius: 10,
    marginTop: "3%",
  },
  descriptionButton: {
    backgroundColor: COLORS.lightPrimary,
    borderRadius: 10,
    alignSelf: "flex-start",
    flexDirection: "row",
    gap: 7,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 2,
    shadowColor: COLORS.primary,
    elevation: 5,
    marginTop: "4%",
    marginBottom: "5%",
  },
  descriptionButtonText: {
    color: COLORS.white,
  },
  descriptionButtonIcon: {
    width: 18,
    aspectRatio: 1,
    top: 1.5,
  },
  descriptionContainer: {
    backgroundColor: COLORS.lightPrimary,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: "2.5%",
    paddingBottom: "4%",
    paddingTop: "2.5%",
    marginTop: "-5%",
    marginBottom: "5%",
    shadowColor: COLORS.primary,
    elevation: 5,
  },
  descriptionText: {
    color: COLORS.white,
    fontSize: FONTSIZES.size16,
  },
  rowContainer: {
    flexDirection: "row",
    paddingVertical: "4%",
    borderBottomColor: "#d4ded3",
    borderBottomWidth: 1,
    paddingLeft: "4%",
    paddingRight: "16%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  locationIcon: {
    width: 24,
    height: 34,
    marginRight: "5%",
  },
  phoneIcon: {
    width: 28,
    aspectRatio: 1,
    marginRight: "5%",
  },
  websiteIcon: {
    width: 25,
    aspectRatio: 1,
    marginRight: "5%",
  },
  cardIcon: {
    width: 25,
    height: 20,
    marginRight: "5%",
  },
  deliveryIcon: {
    width: 27,
    height: 20,
    marginRight: "5%",
  },
  businessHoursIcon: {
    width: 25,
    aspectRatio: 1,
    marginRight: "5%",
    marginTop: "0.5%",
  },
  sectionText: {
    fontSize: FONTSIZES.size16,
  },
  ratingSection: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
  },
  ratingText: {
    fontFamily: FONT.semiBold,
    fontSize: FONTSIZES.size16,
    marginBottom: "0.5%",
  },
});
