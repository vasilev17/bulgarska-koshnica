import { useFonts } from "expo-font";

const COLORS = {
  primary: "#6AC57E",
  secondary: "#23233C",
  tertriary: "#133610",

  text: "#133610",

  lightGray: "#D9D9D9",
  gray: "#878794",
  graySecondary: "#F4F5FA",

  white: "#FFFFFF",
  whiteDarker: "#F4F5FA",

  black: "#000000",
};

const FONT = {
  regular: "Inter-Regular",
  semiBold: "Inter-SemiBold",
  bold: "Inter-Bold",
};

const FONTSIZES = {
  size8: 8,
  size10: 10,
  size12: 12,
  size14: 14,
  size15: 15,
  size16: 16,
  size17: 17,
  size18: 18,
  size20: 20,
  size21: 21,
  size22: 22,
  size23: 23,
  size24: 24,
  size25: 25,
  size28: 28,
  size30: 30,
};

const SIZES = {
  small: 0,
  medium: 1,
  large: 2,
};

const FOOTERSTYLES = {
  footerWithContent: 0,
  footerEmpty: 1,
};

const SHADOWS = {
  //Example shadows
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },

  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, FONTSIZES, SIZES, FOOTERSTYLES, SHADOWS };
