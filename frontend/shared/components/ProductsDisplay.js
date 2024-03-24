import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, images } from "../constants";
import ProductTile from "./ProductTile";
import { Dimensions } from "react-native";
import { FlashList } from "@shopify/flash-list";

const ProductsDisplay = (props) => {
  const vh = Dimensions.get("window").height;

  //Fetch Products from API instead of:
  const Products = [
    {
      id: 0,
      title: "Буркан сладък пчелен дъбов мед",
      image: images.producer,
      price: "12.00",
      measurement: "бр",
    },
    {
      id: 1,
      title: "Буркан сладък пчелен дъбов мед",
      image: images.buyer,
      price: "2.00",
      measurement: "кг",
    },
    {
      id: 2,
      title: "Буркан сладък пчелен дъбов мед",
      image: images.buyer,
      price: "2.00",
      measurement: "кг",
    },
    {
      id: 3,
      title: "Буркан сладък пчелен дъбов мед",
      image: images.buyer,
      price: "2.00",
      measurement: "кг",
    },
    {
      id: 4,
      title: "Буркан сладък пчелен дъбов мед",
      image: images.buyer,
      price: "2.00",
      measurement: "кг",
    },
    {
      id: 5,
      title: "Буркан сладък пчелен дъбов мед",
      image: images.buyer,
      price: "2.00",
      measurement: "кг",
    },
    {
      id: 6,
      title: "Буркан сладък пчелен дъбов мед",
      image: images.buyer,
      price: "2.00",
      measurement: "кг",
    },
  ];

  return (
    <View style={[styles.container, { height: vh / 2.25 }, props.style]}>
      <View style={styles.topBorder} />
      <View style={{ flex: 1 }}>
        <FlashList
        contentContainerStyle={{paddingVertical:vh / 75}}
          // showsVerticalScrollIndicator={false}
          data={Products}
          // NewProductTile
          renderItem={({ item }) => (
            <ProductTile
              title={item.title}
              image={item.image}
              price={item.price}
              measurement={item.measurement}
            />
          )}
          estimatedItemSize={20}
        />
      </View>
      <View style={styles.bottomBorder} />
    </View>
  );
};

ProductsDisplay.propTypes = {
  style: Text.propTypes.style,
};

export default ProductsDisplay;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: COLORS.graySecondary,
  },
  topBorder: {
    backgroundColor: COLORS.lightGray,
    height: 2,
    elevation: 5,
  },
  bottomBorder: {
    backgroundColor: COLORS.lightGray,
    height: 2,
    elevation: 1,
  },
});
