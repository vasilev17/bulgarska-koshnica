import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES, SHADOWS } from "./constants";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },

  headerWave: {
    width: "100%",
    height: 154, //aprox. = 18%
  },

  footerWaveEmpty: {
    width: "100%",
    height: 154, //aprox. = 18%
  },

  footerWaveWithContent: {
    width: "100%",
    height: 227,
  },

  logo: {
    width: 84,
    height: 84,
  },

  title: {
    fontFamily: FONT.regular,
    fontSize: SIZES.size30,
    color: COLORS.text,
  },

  infoText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.size18,
    color: COLORS.text,
    textAlign: 'center',
    width: 300,
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

    zIndex: 99,

    paddingLeft: 40,
    paddingRight: 10,
    borderRadius: 5,
    fontSize: SIZES.size24,
    fontFamily: FONT.regular,
    color: COLORS.text,
    backgroundColor: COLORS.white,
    borderTopColor: COLORS.graySecondary,
    borderTopWidth: 0.7,
  },
});
