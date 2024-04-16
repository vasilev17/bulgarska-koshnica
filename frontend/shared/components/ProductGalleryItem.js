import { Dimensions, ImageBackground, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import CustomText from "./CustomText";
import { COLORS, FONT, FONTSIZES } from "../constants";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const ProductGalleryItem = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const vw = Dimensions.get("window").width;
  const vh = Dimensions.get("window").height;
  return (
    <TouchableWithoutFeedback
      activeOpacity={0.8}
      onPress={() => setIsSelected(!isSelected)}
      style={[
        styles.container,
        { width: vw * 0.43, height: vh * 0.2 },
        props.style,
      ]}
    >
      <ImageBackground
        imageStyle={[styles.image, { width: vw * 0.43, height: vh * 0.2 }]}
        source={props.image}
      >
        {isSelected && <View style={styles.overlay} />}

        {isSelected && (
          <CustomText style={[styles.text, { width: vw * 0.385 }]}>
            {props.name}
          </CustomText>
        )}
        <View style={[styles.priceTag, { marginTop: vh * 0.173 }]}>
          <View style={styles.price}>
            <CustomText style={styles.tagText}>{props.price}лв</CustomText>
          </View>
          <View style={styles.measurement}>
            <CustomText style={styles.tagText}>/{props.measurement}</CustomText>
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default ProductGalleryItem;

const styles = StyleSheet.create({
  container: {
    marginRight: "0.5%",
  },
  image: {
    borderRadius: 10,
  },
  text: {
    position: "absolute",
    top: "5%",
    left: "5%",
    fontSize: FONTSIZES.size14,
    color: COLORS.white,
    fontFamily: FONT.semiBold,
  },
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.black,
    opacity: 0.5,
    borderRadius: 10,
  },
  priceTag: {
    flexDirection: "row",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    position: "absolute",
  },
  price: {
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    paddingHorizontal: "5%",
  },
  measurement: {
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 10,
    paddingHorizontal: "5%",
  },
  tagText: {
    color: COLORS.white,
    fontSize: FONTSIZES.size15,
  },
});
