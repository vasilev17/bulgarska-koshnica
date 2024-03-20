import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import CustomText from "./CustomText";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONT, FONTSIZES, icons } from "../constants";

const WorkingDayHours = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const [startHours, setStartHours] = useState("9:00");
  const [endHours, setEndHours] = useState("17:00");

  const handleCheckBoxPressed = () => {
    if (isOpen) {
      setStartHours("");
      setEndHours("");
    } else {
      setStartHours("9:00");
      setEndHours("17:00");
    }
    setIsOpen(!isOpen);
  };

  return (
    <View style={[styles.container, { marginVertical: "1.7%" }, props.style]}>
      <View style={styles.subContainer}>
        <TouchableOpacity
          onPress={() => handleCheckBoxPressed()}
          style={[
            styles.checkBox,
            isOpen
              ? { borderColor: COLORS.primary }
              : { borderColor: COLORS.red },
          ]}
        >
          <Image source={isOpen ? icons.tickIcon : icons.xIcon} />
        </TouchableOpacity>
        <CustomText style={[styles.title, { marginLeft: "6.5%" }]}>
          {props.title}
        </CustomText>
      </View>
      <View style={styles.subContainer}>
        <TextInput
          keyboardType="numeric"
          maxLength={5}
          selectionColor={COLORS.primary}
          style={[
            styles.hourInput,
            !isOpen && { backgroundColor: COLORS.lightGray },
          ]}
          value={startHours}
          onChangeText={(text) => text.includes(":") && setStartHours(text)}
          editable={isOpen && true}
        />

        <CustomText style={[styles.hourSeparator, { marginHorizontal: "2%" }]}>
          -
        </CustomText>

        <TextInput
          keyboardType="numeric"
          maxLength={5}
          selectionColor={COLORS.primary}
          style={[
            styles.hourInput,
            !isOpen && { backgroundColor: COLORS.lightGray },
          ]}
          value={endHours}
          onChangeText={(text) => text.includes(":") && setEndHours(text)}
          editable={isOpen && true}
        />
      </View>
    </View>
  );
};

WorkingDayHours.propTypes = {
  title: PropTypes.string.isRequired,
  style: Text.propTypes.style,
};

export default WorkingDayHours;

const styles = StyleSheet.create({
  container: {
    width: "93%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkBox: {
    width: 32,
    aspectRatio: 1,
    borderRadius: 5,
    borderWidth: 1,
  },
  title: {
    fontSize: FONTSIZES.size24,
  },
  hourInput: {
    width: 65,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    fontFamily: FONT.regular,
    color: COLORS.text,
    fontSize: FONTSIZES.size20,
    textAlign: "center",

    borderTopColor: COLORS.graySecondary,
    borderTopWidth: 0.7,

    shadowColor: COLORS.gray,

    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.15,
    shadowRadius: 13,

    elevation: 20,
  },
  hourSeparator: {
    fontSize: FONTSIZES.size24,
  },
});
