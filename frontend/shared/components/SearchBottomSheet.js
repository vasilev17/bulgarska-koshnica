import { StyleSheet, View } from "react-native";
import React, { forwardRef } from "react";
import BottomSheetModalComponent from "./BottomSheetModalComponent";
import CustomText from "./CustomText";

const SearchBottomSheet = forwardRef((props, ref) => {
  return (
    <BottomSheetModalComponent
      hasBackdrop={false}
      snapPoints={["40%", "15.5%", "95%"]}
      ref={ref}
      title={"Резултати:"}
      titleWidth={270}
    >
      <View style={{ paddingHorizontal: "4%" }}>
        <CustomText>Търсене</CustomText>
      </View>
    </BottomSheetModalComponent>
  );
});

export default SearchBottomSheet;

const styles = StyleSheet.create({});
