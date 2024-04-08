import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { forwardRef, useState } from "react";
import { COLORS, FONT, FONTSIZES, icons } from "../constants";
import BottomSheetModalComponent from "./BottomSheetModalComponent";
import CustomText from "./CustomText";
import Tooltip from "rn-tooltip";
import { Shadow } from "react-native-shadow-2";

const ShopLocationBottomSheet = forwardRef((props, ref) => {
  const vh = Dimensions.get("window").height;
  const vw = Dimensions.get("window").width;
  const [isDescriptionShown, setIsDescriptionShown] = useState(false);

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

      <Shadow
        distance={5}
        startColor={"#e3e8e3"}
        endColor={"#ffffff"}
        offset={[0, 2]}
      >
        <View
          style={[
            styles.topBorder,
            {
              width: vw,
            },
          ]}
        />
      </Shadow>

      <CustomText style={{ marginTop: 40 }}>
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
  topBorder: {
    backgroundColor: "#d4ded3",
    height: 2,
  },
  descriptionContainer: {
    backgroundColor: COLORS.lightPrimary,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal:'2.5%',
    paddingBottom:'4%',
    paddingTop:'2.5%',
    marginTop: "-5%",
    marginBottom:'5%',
    shadowColor: COLORS.primary,
    elevation: 5,
  },
  descriptionText: {
    color: COLORS.white,
  },
});
