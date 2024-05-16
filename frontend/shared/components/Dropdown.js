import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { MultiSelect } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import TagComponent from "./TagComponent";
import { COLORS, FONT, FONTSIZES, icons } from "../constants";
import CustomText from "./CustomText";

const MultiSelectComponent = (props) => {
  const [selected, setSelected] = useState([]);

  const menuItem = (item) => {
    return (
      <View style={styles.menuOption}>
        <CustomText style={styles.menuText}>{item.label}</CustomText>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <MultiSelect
        showsVerticalScrollIndicator={false}
        activeColor={COLORS.warningLightRed}
        containerStyle={{
          borderRadius: 10,
          backgroundColor: COLORS.white,
          borderColor: COLORS.primary,
          elevation: 5,
        }}
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        data={props.data}
        fontFamily={FONT.regular}
        labelField="label"
        valueField="value"
        placeholder="Изберете причини за докладването"
        value={selected}
        onChange={(item) => {
          setSelected(item);
        }}
        renderItem={menuItem}
      />
    </View>
  );
};

export default MultiSelectComponent;

const styles = StyleSheet.create({
  container: { padding: 16 },
  dropdown: {
    width: 357,
    alignSelf: "center",
    backgroundColor: COLORS.white,
    borderRadius: 10,
    borderColor: COLORS.primary,
    borderWidth: 1,
    padding: 12,
    elevation: 5,
    marginTop:'-2%'
  },
  menuText: {
    fontSize: FONTSIZES.size14,
  },
  menuOption: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  placeholderStyle: {
    color: COLORS.secondary,
  },
});
