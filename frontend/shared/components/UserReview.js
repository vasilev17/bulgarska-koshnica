import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import { FONT, FONTSIZES, icons } from "../constants";

const UserReview = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <CustomText style={styles.reviewText}>{props.user}</CustomText>
      <View style={styles.ratingAndDateContainer}>
        <Image source={icons.ratings[props.rating]} style={styles.rating} />
        <CustomText style={styles.reviewText}>{props.date}</CustomText>
      </View>
      <CustomText style={styles.comment}>{props.comment}</CustomText>
    </View>
  );
};

export default UserReview;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "4%",
    marginVertical: "4%",
  },
  reviewText: {
    fontSize: FONTSIZES.size15,
    fontFamily: FONT.semiBold,
  },
  ratingAndDateContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: "-0.5%",
  },
  rating: {
    height: 25,
    width: 120,
    resizeMode: "contain",
    marginRight: "2%",
  },
  comment: {
    marginTop: "1%",
    fontSize: FONTSIZES.size15,
  },
});
