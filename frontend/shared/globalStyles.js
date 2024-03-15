import { StyleSheet } from "react-native";
import { COLORS, FONT, FONTSIZES } from "./constants";

export const globalStyles = StyleSheet.create({
  infoText: {
    textAlign: "center",
    width: 300,
  },

  userTypeCard: {
    height: 150,
    width: 320,
  },

  boldText: {
    fontFamily: FONT.bold,
  },

  semiBoldText: {
    fontFamily: FONT.semiBold,
  },

  underlinedText: {
    textDecorationLine: "underline",
  },

  textInput: {
    marginVertical: "1.3%",
    width: 300,
    height: 60,
    paddingLeft: 25,
    paddingRight: 10,
    borderRadius: 5,
    fontSize: FONTSIZES.size24,
    fontFamily: FONT.regular,
    color: COLORS.text,
    backgroundColor: COLORS.white,
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
});
