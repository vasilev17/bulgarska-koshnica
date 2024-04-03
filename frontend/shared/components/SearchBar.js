import { Image, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONT, FONTSIZES, icons } from "../constants";
import { globalStyles } from "../globalStyles";
import { FlashList } from "@shopify/flash-list";
import FilterTag from "./FilterTag";
import PropTypes from "prop-types";

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TouchableOpacity activeOpacity={0.5} style={styles.accountMenuButton}>
          <Image style={styles.accountMenuIcon} source={icons.accountMenu} />
        </TouchableOpacity>

        <TextInput
          placeholder="Търсене..."
          placeholderTextColor={"rgba(19, 54, 16, 0.35)"}
          selectionColor={COLORS.primary}
          style={[styles.textInputBar, { marginTop: "0%", marginBottom: "0%" }]}
        />

        <TouchableOpacity activeOpacity={0.5} style={styles.filtersButton}>
          <Image style={styles.filtersIcon} source={icons.filters} />
        </TouchableOpacity>
      </View>

      <View style={styles.filterTagsContainer}>
        <FlashList
          contentContainerStyle={{ padding: 15 }}
          overScrollMode="never"
          horizontal
          showsHorizontalScrollIndicator={false}
          data={props.filterTags}
          renderItem={({ item }) => (
            <FilterTag icon={item.icon} title={item.title} />
          )}
          estimatedItemSize={10}
        />
      </View>
    </View>
  );
};

SearchBar.propTypes = {
  filterTags: PropTypes.arrayOf(PropTypes.object),
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "7%",
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "rgba(255, 255, 255, 0.0)",
    marginHorizontal: "5%",
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
  filterTagsContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: -5,
    marginLeft: -15,
  },
});
