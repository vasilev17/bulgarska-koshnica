import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import { FONT, FONTSIZES } from "../constants";

const SearchResult = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.shopIcon} source={props.icon} />
      <View>
        <CustomText style={styles.titleText}>{props.title}</CustomText>
        <CustomText numberOfLines={1} style={styles.addressText}>
          {props.address}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: "2%",
  },
  shopIcon: {
    objectFit: "contain",
    width: 40,
    aspectRatio: 1,
    marginRight: "5%",
  },
  titleText: {
    maxWidth: "85%",
    fontSize: FONTSIZES.size17,
    textShadowColor: "rgba(22, 91, 16, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 5,
  },
  addressText: {
    maxWidth: "90%",
    fontSize: FONTSIZES.size15,
    fontFamily: FONT.thinItalic,
  },
});
