import { StyleSheet, Platform } from "react-native";
import { COLORS, FONT, FONTSIZES, SHADOWS } from "./constants";

export const globalStyles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },

  screenContentContainer: {
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerWave: {
    width: "100%",
    height: 135, //aprox. = 18%
    zIndex: -1,
  },

  footerWaveEmpty: {
    width: "100%",
    height: 154, //aprox. = 18%
    zIndex: -1,
  },

  footerWaveWithContent: {
    width: "100%",
    height: 200,
    zIndex: -1,
  },

  logo: {
    width: 84,
    height: 84,
    marginBottom: "1.5%",
  },

  infoText: {
    textAlign: "center",
    width: 300,
  },

  title: {
    textAlign: "center",
    width: 350,
  },

  backButton: {
    position: "absolute",
    left: "3.5%",
    bottom: "6%",
  },

  continueButton: {
    position: "absolute",
    right: "7.5%",
    bottom: "6%",
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
    marginVertical: "2%",
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
