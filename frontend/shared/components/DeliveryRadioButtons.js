import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import CustomText from "./CustomText";
import { COLORS, FONT, FONTSIZES } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

const DeliveryRadioButtons = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [deliveryRadius, setDeliveryRadius] = useState(null);

  const handleRadioButtonPressed = (index) => {
    setSelectedIndex(index);
    if (index !== 3) setDeliveryRadius(null);
  };

  return (
    <View>
      <CustomText style={[styles.title, { marginBottom: "1.5%" }]}>
        Предлагате ли доставка?
      </CustomText>
      <TouchableOpacity
        onPress={() => handleRadioButtonPressed(0)}
        style={styles.container}
      >
        <View
          style={[
            styles.radioButton,
            selectedIndex === 0 && styles.radioButtonSelected,
            { marginRight: "4%" },
          ]}
        />
        <CustomText
          style={[
            styles.deliveryText,
            selectedIndex === 0 && { color: COLORS.primary },
          ]}
        >
          Не
        </CustomText>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleRadioButtonPressed(1)}
        style={styles.container}
      >
        <View
          style={[
            styles.radioButton,
            selectedIndex === 1 && styles.radioButtonSelected,
            { marginRight: "4%" },
          ]}
        />
        <CustomText
          style={[
            styles.deliveryText,
            selectedIndex === 1 && { color: COLORS.primary },
          ]}
        >
          Да, в цяла България
        </CustomText>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleRadioButtonPressed(2)}
        style={styles.container}
      >
        <View
          style={[
            styles.radioButton,
            selectedIndex === 2 && styles.radioButtonSelected,
            { marginRight: "4%" },
          ]}
        />
        <CustomText
          style={[
            styles.deliveryText,
            selectedIndex === 2 && { color: COLORS.primary },
          ]}
        >
          Да, в населеното място
        </CustomText>
      </TouchableOpacity>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.container}
          onPress={() => handleRadioButtonPressed(3)}
        >
          <View
            style={[
              styles.radioButton,
              selectedIndex === 3 && styles.radioButtonSelected,
              { marginRight: "4%" },
            ]}
          />
          <CustomText
            style={[
              styles.deliveryText,
              selectedIndex === 3 && { color: COLORS.primary },
            ]}
          >
            Да, в радиус от
          </CustomText>
        </TouchableOpacity>
        <TextInput
          keyboardType="numeric"
          maxLength={3}
          selectionColor={COLORS.primary}
          style={[
            styles.hourInput,
            { marginLeft: "3%", marginRight: "2%" },
            selectedIndex !== 3 && { backgroundColor: COLORS.lightGray },
          ]}
          value={deliveryRadius}
          onChangeText={(text) => setDeliveryRadius(text)}
          editable={selectedIndex === 3 && true}
        />
        <CustomText
          style={[
            styles.deliveryText,
            selectedIndex === 3 && { color: COLORS.primary },
          ]}
        >
          км
        </CustomText>
      </View>
    </View>
  );
};

export default DeliveryRadioButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: "0.3%",
  },
  title: {
    fontSize: FONTSIZES.size22,
  },
  radioButton: {
    width: 17,
    aspectRatio: 1,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  radioButtonSelected: {
    backgroundColor: COLORS.primary,
    elevation: 10,
    shadowColor: COLORS.primary,
    borderWidth: 0,
  },
  deliveryText: {
    fontSize: FONTSIZES.size20,
  },
  hourInput: {
    width: 55,
    height: 35,
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

    elevation: 7,
  },
});
