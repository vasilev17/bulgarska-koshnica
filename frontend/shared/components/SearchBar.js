import {
  Image,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { COLORS, FONT, FONTSIZES, icons } from "../constants";
import { FlashList } from "@shopify/flash-list";
import FilterTag from "./FilterTag";
import PropTypes from "prop-types";

const SearchBar = (props) => {
  const [searchString, setSearchString] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TouchableOpacity activeOpacity={0.5} style={styles.accountMenuButton}>
          <Image style={styles.searchBarIcon} source={icons.accountMenu} />
        </TouchableOpacity>

        <TextInput
          placeholder="Търсене..."
          value={searchString}
          onChangeText={setSearchString}
          placeholderTextColor={"rgba(19, 54, 16, 0.35)"}
          selectionColor={COLORS.primary}
          style={[styles.textInputBar, { marginTop: "0%", marginBottom: "0%" }]}
          onSubmitEditing={props.onSubmit}
        />

        {searchString && (
          <TouchableOpacity
            onPress={() => setSearchString("")}
            activeOpacity={0.5}
            style={styles.closeSearchButton}
          >
            <Image style={styles.searchBarIcon} source={icons.closeSearch} />
          </TouchableOpacity>
        )}

        <TouchableOpacity activeOpacity={0.5} style={styles.filtersButton}>
          <Image style={styles.searchBarIcon} source={icons.filters} />
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
  searchBarIcon: {
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
  filtersButton: {
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 13,
    borderBottomRightRadius: 13,
    padding: 7,
  },
  closeSearchButton: {
    position: "absolute",
    zIndex: 999,
    right: "13%",
  },
  filterTagsContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: -5,
    marginLeft: -15,
  },
});
