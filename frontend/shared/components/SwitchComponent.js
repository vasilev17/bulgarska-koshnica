import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import CustomText from "./CustomText";
import { COLORS, FONTSIZES } from "../constants";

const option = {
  left: 0,
  right: 1,
};

const SwitchComponent = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <View style={[styles.switchContainer, props.style]}>
      <TouchableOpacity
        onPress={() => setSelectedOption(option.left)}
        style={[
          styles.switchOption,
          styles.switchOptionLeft,
          selectedOption === option.left && styles.switchOptionSelected,
        ]}
      >
        <CustomText
          style={[
            styles.switchOptionText,
            selectedOption === option.left && { color: COLORS.white },
          ]}
        >
          {props.leftOption}
        </CustomText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSelectedOption(option.right)}
        style={[
          styles.switchOption,
          styles.switchOptionRight,
          selectedOption === option.right && styles.switchOptionSelected,
        ]}
      >
        <CustomText
          style={[
            styles.switchOptionText,
            selectedOption === option.right && { color: COLORS.white },
          ]}
        >
          {props.rightOption}
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default SwitchComponent;

const styles = StyleSheet.create({
  switchContainer: {
    width: 165,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    shadowColor: COLORS.gray,
    borderRadius: 10,
    borderTopColor: COLORS.graySecondary,
    borderTopWidth: 0.7,

    backgroundColor: COLORS.white,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.15,
    shadowRadius: 13,

    elevation: 15,
  },
  switchOption: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  switchOptionSelected: {
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.shadowPrimary,
    elevation: 10,
  },
  switchOptionLeft: {
    borderRightColor: COLORS.graySecondary,
    borderRightWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  switchOptionRight: {
    borderLeftColor: COLORS.graySecondary,
    borderLeftWidth: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  switchOptionText: {
    fontSize: FONTSIZES.size24,
  },
});
