import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES, SHADOWS } from "../shared/Constants";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },

  headerWave: {
    width: 428,
    height: 154,
  },

  footerWaveEmpty: {
    width: 428,
    height: 154,
  },

  footerWaveWithContent: {
    width: 428,
    height: 227,
  },
});
