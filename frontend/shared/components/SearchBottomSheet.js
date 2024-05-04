import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import React, { forwardRef } from "react";
import BottomSheetModalComponent from "./BottomSheetModalComponent";
import CustomText from "./CustomText";
import { icons } from "../constants";

const SearchBottomSheet = forwardRef((props, ref) => {
  return (
    <BottomSheetModalComponent
      hasBackdrop={false}
      snapPoints={["40%", "15.5%", "95%"]}
      ref={ref}
      title={"Резултати:"}
      titleWidth={270}
      icon={icons.refreshSearchResults}
    >
      <View style={{ paddingHorizontal: "4%" }}>
        <CustomText>Търсене</CustomText>

        <CustomText>В района:</CustomText>
        <CustomText>{props.regionalResults[0].title}</CustomText>

        {/* <FlashList
          data={props.regionalResults}
          ListFooterComponent={<SearchResult />}
          ItemSeparatorComponent={() => (
            <View style={styles.reviewSeparator}></View>
          )}
          renderItem={({ item }) => (
            <UserReview
              user={item.user}
              rating={item.rating}
              date={item.date}
              comment={item.comment}
            />
          )}
          estimatedItemSize={25}
        /> */}

        <CustomText>Още:</CustomText>
        <CustomText>{props.moreResults[0].title}</CustomText>

        {/* <FlashList
          data={props.moreResults}
          ListFooterComponent={<SearchResult />}
          ItemSeparatorComponent={() => (
            <View style={styles.reviewSeparator}></View>
          )}
          renderItem={({ item }) => (
            <UserReview
              user={item.user}
              rating={item.rating}
              date={item.date}
              comment={item.comment}
            />
          )}
          estimatedItemSize={25}
        /> */}
      </View>
    </BottomSheetModalComponent>
  );
});

export default SearchBottomSheet;

const styles = StyleSheet.create({
  refreshResultsButton: {
    position: "absolute",
    top: -25,
    zIndex: 99999999,
    elevation: 99,
  },
  refreshResultsIcon: {
    height: 30,
    aspectRatio: 1,
  },
});
