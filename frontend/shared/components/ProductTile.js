import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { COLORS, icons } from "../constants";
import CustomText from "./CustomText";
import PropTypes from "prop-types";

const ProductTile = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.container, props.style]}
    >
      <Image style={styles.image} source={props.image} />
      <CustomText style={styles.title}>{props.title}</CustomText>

      <View style={styles.priceTag}>
        <View style={styles.price}>
          <CustomText style={styles.tagText}>{props.price}лв</CustomText>
        </View>
        <View style={styles.measurement}>
          <CustomText style={styles.tagText}>/{props.measurement}</CustomText>
        </View>
      </View>
      <TouchableOpacity style={styles.closeIconContainer}>
        <Image style={styles.closeIcon} source={icons.closeCard} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

ProductTile.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
  price: PropTypes.string.isRequired,
  measurement: PropTypes.string.isRequired,
  style: Text.propTypes.style,
};

export default ProductTile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    width: "96%",
    height: 105,
    borderRadius: 10,
    flexDirection: "row",
    marginVertical: "1%",
    alignSelf: "center",

    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.15,
    shadowRadius: 13,

    elevation: 7,
  },
  image: {
    height: "85%",
    width: "22%",
    marginLeft: "2%",
    marginRight: "3%",
    borderRadius: 10,
    alignSelf: "center",
  },
  title: {
    width: "55%",
    marginTop: "2%",
    color: COLORS.secondary,
  },
  priceTag: {
    flexDirection: "row",
    height: "25%",
    alignSelf: "flex-end",
    left: "-11%",
  },
  price: {
    backgroundColor: COLORS.primary,
    width: "37%", //75
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
  },
  measurement: {
    backgroundColor: COLORS.secondary,
    width: "17%", //35
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 10,
  },
  tagText: {
    color: COLORS.white,
  },
  closeIconContainer: {
    position: "absolute",
    right: 0,
    width: "8%",
    height: "35%",
    justifyContent: "center",
  },
  closeIcon: {
    height: 17,
    aspectRatio: 1,
  },
});
