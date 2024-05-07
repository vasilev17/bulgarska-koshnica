const COLORS = {
  primary: "#6AC57E",
  secondary: "#23233C",
  tertriary: "#133610",

  lightPrimary: "#80CC90",
  shadowPrimary: "#00ff38",

  text: "#133610",

  lightGray: "#D9D9D9",
  gray: "#878794",
  graySecondary: "#F4F5FA",

  white: "#FFFFFF",
  whiteDarker: "#F4F5FA",

  red: "#FF0000",
  warningLightRed: "#eee8e9",
  yellow: "#FFB554",

  black: "#000000",
};

const FONT = {
  regular: "Inter-Regular",
  italic: "Inter-Italic",
  boldItalic: "Inter-BoldItalic",
  thinItalic: "Inter-ThinItalic",
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

const BULGARIA_BOUNDARIES = {
  northEast: { latitude: 44.22501876753331, longitude: 28.602242578947614 },
  southWest: { latitude: 41.231853961326166, longitude: 22.293343826295025 },
};

const MAP_INITIAL_REGION = {
  latitude: 42.6294024271361,
  longitude: 25.276131942786883,
  latitudeDelta: 4.5,
  longitudeDelta: 4.5,
};

export {
  COLORS,
  FONT,
  FONTSIZES,
  SIZES,
  FOOTERSTYLES,
  SHADOWS,
  BULGARIA_BOUNDARIES,
  MAP_INITIAL_REGION,
};
