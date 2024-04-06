import { Image, StyleSheet, Text, View } from "react-native";
import React, { forwardRef } from "react";
import { COLORS, FONT, FONTSIZES, icons } from "../constants";
import BottomSheetModalComponent from "./BottomSheetModalComponent";
import CustomText from "./CustomText";
import Tooltip from 'rn-tooltip';

const ShopLocationBottomSheet = forwardRef((props, ref) => {
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
      snapPoints={["40%", "15%", "100%"]}
      ref={ref}
      title={props.title}
    >
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
          popover={<CustomText style={{color:COLORS.white, fontSize:FONTSIZES.size14, textAlign:"center"}}>Плащане с карта</CustomText>}
          backgroundColor={COLORS.primary}
          
          height={60}
          width={100}
          withOverlay={false}
          >
          <Image source={icons.cardPayment} style={styles.card} />
          </Tooltip>
        )}
        {props.delivery !== "Не" && (
          <Tooltip 
          popover={<CustomText style={{color:COLORS.white, fontSize:FONTSIZES.size14}}>Предлага доставка</CustomText>}
          backgroundColor={COLORS.primary}
          height={60}
          width={100}
          withOverlay={false}
          >
          <Image source={icons.deliveryTruck} style={styles.delivery} />
          </Tooltip>
        )}
      </View>

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
    width: "75%",
    fontSize:FONTSIZES.size17,
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
});
