import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomText from "./CustomText";
import { COLORS, FONTSIZES } from "../constants";
import { globalStyles } from "../globalStyles";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native-gesture-handler";

const ToggleTile = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <TouchableOpacity
    onPress={()=>setIsSelected(!isSelected)}
      style={[
        globalStyles.textTile,
        styles.tileConatiner,
        isSelected && styles.selected,
        props.style,
      ]}
    >
      <CustomText
        style={[styles.tileText, isSelected && { color: COLORS.white }]}
      >
        {props.title}
      </CustomText>
    </TouchableOpacity>
  );
};

ToggleTile.propTypes = {
  title: PropTypes.string.isRequired,
  style: Text.propTypes.style,
};

export default ToggleTile;

const styles = StyleSheet.create({
  tileConatiner: {
    justifyContent: "center",
    alignItems: "center",
  },
  tileText: {
    fontSize: FONTSIZES.size24,
    textAlign: "center",
  },
  selected: {
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.shadowPrimary,
    elevation: 10,
  },
});
