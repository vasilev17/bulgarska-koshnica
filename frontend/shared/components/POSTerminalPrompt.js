import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import CustomText from "./CustomText";
import { COLORS, FONTSIZES } from "../constants";
import { TouchableOpacity } from "react-native";

const POSTerminalPrompt = () => {
  const [hasPOSTerminal, setHasPOSTerminal] = useState(null);

  return (
    <View style={styles.container}>
      <CustomText style={[styles.title, { marginTop: "3.5%" }]}>
        Притежавате ли POS терминал?
      </CustomText>
      <View style={[styles.switchContainer, { marginTop: "2.5%" }]}>
        <TouchableOpacity
          onPress={() => setHasPOSTerminal(true)}
          style={[
            styles.switchOption,
            styles.switchOptionLeft,
            hasPOSTerminal === true && styles.switchOptionSelected,
          ]}
        >
          <CustomText
            style={[
              styles.switchOptionText,
              hasPOSTerminal === true && { color: COLORS.white },
            ]}
          >
            Да
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setHasPOSTerminal(false)}
          style={[
            styles.switchOption,
            styles.switchOptionRight,
            hasPOSTerminal === false && styles.switchOptionSelected,
          ]}
        >
          <CustomText
            style={[
              styles.switchOptionText,
              hasPOSTerminal === false && { color: COLORS.white },
            ]}
          >
            Не
          </CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default POSTerminalPrompt;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    width: 230,
    textAlign: "center",
    fontSize: FONTSIZES.size22,
  },
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
