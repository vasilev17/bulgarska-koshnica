import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS, FONT, icons } from "../constants";
import CustomText from "./CustomText";

const AddNewProductTile = (props) => {
  const vh = Dimensions.get("window").height;

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.container, { height: vh * 0.13 }, props.style]}
    >
      <View style={styles.imageSkeleton} />

      <View style={styles.centerContent}>
        <CustomText style={styles.title}>Добавете нов продукт</CustomText>
        <Image style={styles.image} source={icons.add} />
      </View>

      <View style={styles.priceTag}>
        <View style={styles.price}>
          <CustomText style={styles.tagText}>Цена</CustomText>
        </View>
        <View style={styles.measurement}>
          <CustomText style={styles.tagText}>/</CustomText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

AddNewProductTile.propTypes = {
  style: Text.propTypes.style,
};

export default AddNewProductTile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    width: "96%",
    borderRadius: 10,
    flexDirection: "row",
    marginVertical: "1%",
    alignSelf: "center",
    borderWidth: 2,
    borderColor: COLORS.primary,

    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.15,
    shadowRadius: 13,

    elevation: 7,
  },
  imageSkeleton: {
    height: "75%",
    aspectRatio: 1,
    backgroundColor: "#C9C9C9",
    borderRadius: 10,
    marginLeft: "2%",
    marginRight: "5.5%",
    alignSelf: "center",
    opacity: 0.75,
  },

  title: {
    color: "#878787",
    fontFamily: FONT.bold,
    marginTop: "3.5%",
  },
  image: {
    height: "52%",
    aspectRatio: 1,
    alignSelf: "center",
    marginTop: "2%",
    opacity: 0.75,
  },
  priceTag: {
    flexDirection: "row",
    height: "25%",
    position: "absolute",
    width: 220,
    right: -103,
    bottom: -2,
    opacity: 0.95,
  },
  price: {
    backgroundColor: COLORS.primary,
    width: "37%",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
  },
  measurement: {
    backgroundColor: COLORS.secondary,
    width: "17%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 10,
  },
  tagText: {
    color: COLORS.white,
  },
});
