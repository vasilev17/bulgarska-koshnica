import { Image, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONT, FONTSIZES, icons } from "../constants";
import { globalStyles } from "../globalStyles";

const SearchBar = () => {
  return (
    <View style={styles.searchBarContainer}>
      <TouchableOpacity activeOpacity={0.5} style={styles.accountMenuButton}>
        <Image style={styles.accountMenuIcon} source={icons.accountMenu} />
      </TouchableOpacity>

      <TextInput
        placeholder="Търсене..."
        selectionColor={COLORS.primary}
        style={[styles.textInputBar, { marginTop: "0%", marginBottom: "0%" }]}
      />

      <TouchableOpacity activeOpacity={0.5} style={styles.filtersButton}>
        <Image style={styles.filtersIcon} source={icons.filters} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    position: "absolute",
    top: "5%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "rgba(255, 255, 255, 0.0)",
    marginHorizontal:'5%',
    elevation: 15,
  },
  accountMenuButton: {
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 13,
    borderBottomLeftRadius: 13,
    padding: 7,
  },
  accountMenuIcon: {
    height: 25,
    aspectRatio: 1,
  },
  textInputBar: {
    backgroundColor: COLORS.white,
    height: "100%",
    fontSize: FONTSIZES.size20,
    paddingRight: 10,
    paddingLeft: 10,
    fontFamily: FONT.regular,
    color: COLORS.text,
    width: "80%",
  },
  filtersIcon: {
    height: 25,
    aspectRatio: 1,
  },
  filtersButton: {
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 13,
    borderBottomRightRadius: 13,
    padding: 7,
  },
});
