import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { forwardRef } from "react";
import BottomSheetModalComponent from "./BottomSheetModalComponent";
import CustomText from "./CustomText";
import { COLORS, FONT, icons } from "../constants";
import SearchResult from "./SearchResult";
import { FlashList } from "@shopify/flash-list";

const SearchBottomSheet = forwardRef((props, ref) => {
  const vh = Dimensions.get("window").height;
  return (
    <BottomSheetModalComponent
      hasBackdrop={false}
      snapPoints={["40%", "15.5%", "95%"]}
      ref={ref}
      title={"Резултати:"}
      titleWidth={270}
      icon={icons.refreshSearchResults}
    >
      <View style={{ paddingHorizontal: "4%", gap: vh * 0.02 }}>
        {props.regionalResults.length != 0 && (
          <FlashList
            data={props.regionalResults}
            ListHeaderComponent={
              <CustomText style={styles.resultSectionTitle}>
                В района:
              </CustomText>
            }
            ItemSeparatorComponent={() => (
              <View style={styles.resultsSeparator}></View>
            )}
            renderItem={({ item }) => (
              <SearchResult
                icon={item.icon}
                title={item.title}
                address={item.address}
              />
            )}
            estimatedItemSize={8}
          />
        )}
        {props.regionalResults.length != 0 &&
        props.moreResults.length == 0 ? null : (
          <FlashList
            data={props.moreResults}
            ListHeaderComponent={
              <CustomText style={styles.resultSectionTitle}>Всички:</CustomText>
            }
            ItemSeparatorComponent={() => (
              <View style={styles.resultsSeparator}></View>
            )}
            ListEmptyComponent={
              props.regionalResults.length == 0 && (
                <View style={styles.listEmptyContainer}>
                  <Image
                    style={styles.noResultsIcon}
                    source={icons.noSearchResults}
                  ></Image>
                  <CustomText style={styles.listEmptyText}>
                    Няма резултати
                  </CustomText>
                </View>
              )
            }
            renderItem={({ item }) => (
              <SearchResult
                icon={item.icon}
                title={item.title}
                address={item.address}
              />
            )}
            estimatedItemSize={8}
          />
        )}
      </View>
    </BottomSheetModalComponent>
  );
});

export default SearchBottomSheet;

const styles = StyleSheet.create({
  refreshResultsButton: {
    position: "absolute",
    top: -25,
    zIndex: 999,
    elevation: 99,
  },
  refreshResultsIcon: {
    height: 30,
    aspectRatio: 1,
  },
  resultsSeparator: {
    height: 1,
    backgroundColor: "#f0f0fc",
    marginRight: "4%",
  },
  resultSectionTitle: {
    fontFamily: FONT.semiBold,
  },
  listEmptyText: {
    alignSelf: "center",
    color: COLORS.gray,
    fontFamily: FONT.semiBold,
  },
  noResultsIcon: {
    width: 25,
    aspectRatio: 1,
  },
  listEmptyContainer: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
