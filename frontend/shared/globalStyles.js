import { StyleSheet } from "react-native";
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
    height: 154, //aprox. = 18%
    zIndex: -1,
    alignSelf: "flex-start",
  },

  footerWaveEmpty: {
    width: "100%",
    height: 154, //aprox. = 18%
    zIndex: -1,
    alignSelf: "flex-end",
  },

  footerWaveWithContent: {
    width: "100%",
    height: 227,
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

  boldText: {
    fontFamily: FONT.bold,
  },

  underlinedText: {
    textDecorationLine: "underline",
  },

  textInput: {
    width: 300,
    height: 60,

    shadowColor: COLORS.gray,

    //IOS
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.15,
    shadowRadius: 13,

    //Android
    elevation: 20,

    paddingLeft: 25,
    paddingRight: 10,
    borderRadius: 5,
    fontSize: FONTSIZES.size24,
    fontFamily: FONT.regular,
    color: COLORS.text,
    backgroundColor: COLORS.white,
    borderTopColor: COLORS.graySecondary,
    borderTopWidth: 0.7,
  },
});
