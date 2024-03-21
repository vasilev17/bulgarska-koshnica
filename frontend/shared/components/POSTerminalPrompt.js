import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import { FONTSIZES } from "../constants";

const POSTerminalPrompt = () => {
  return (
    <View>
      <CustomText style={[styles.title, { marginTop: "5%" }]}>
        Притежавате ли POS терминал?
      </CustomText>
      {/* Yes/No switch */}
    </View>
  );
};

export default POSTerminalPrompt;

const styles = StyleSheet.create({
  title: {
    width: 230,
    textAlign: "center",
    fontSize: FONTSIZES.size22,
  },
});
