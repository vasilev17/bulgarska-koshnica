import { Easing, StyleSheet, View } from "react-native";
import React, { forwardRef } from "react";
import BottomSheetModalComponent from "./BottomSheetModalComponent";
import CustomText from "./CustomText";
import { COLORS, FONT, SIZES } from "../constants";
import StarRating from "react-native-star-rating-widget";
import { useAtom } from "jotai";
import { currentLocationRating } from "../globalState";
import TextAreaInput from "./TextAreaInput";
import CustomButton from "./CustomButton";

const ShopLocationBottomSheet = forwardRef((props, ref) => {
  const [rating, setRating] = useAtom(currentLocationRating);

  //Fetch username from session or DB instead of:
  const username = "Иван Петров";
  //Fetch current date from server instead of:
  const date =
    (new Date().getDate() < 10
      ? "0" + new Date().getDate()
      : new Date().getDate()) +
    "/" +
    (new Date().getMonth() < 10
      ? "0" + (new Date().getMonth() + 1)
      : new Date().getMonth() + 1) +
    "/" +
    new Date().getFullYear();

  return (
    <BottomSheetModalComponent
      hasBackdrop={true}
      snapPoints={["100%"]}
      ref={ref}
      title={props.title}
      titleWidth={270}
    >
      <View style={styles.container}>
        <CustomText style={styles.userAndDateText}>
          {username}&nbsp;{date}
        </CustomText>

        <StarRating
          rating={rating}
          onChange={setRating}
          color={COLORS.yellow}
          starSize={50}
          emptyColor={COLORS.secondary}
          enableHalfStar={false}
          starStyle={{ marginRight: -7 }}
          animationConfig={{
            scale: 1.2,
            delay: 150,
            duration: 150,
            easing: Easing.elastic(1),
          }}
        />

        <TextAreaInput
          showBigPlaceholder={false}
          placeholder={"Споделете впечатленията си"}
          maxLength={450}
          style={{ marginTop: "5%", height: 295 }}
        />

        <CustomButton
          size={SIZES.large}
          buttonColor={COLORS.secondary}
          fontColor={COLORS.white}
          hasShadow={true}
          style={{ marginTop: "7%", marginBottom: "3%" }}
        >
          Публикуване
        </CustomButton>

        <CustomButton
          size={SIZES.small}
          buttonColor={COLORS.white}
          fontColor={COLORS.secondary}
          outlineColor={COLORS.primary}
          hasShadow={false}
        >
          Отказ
        </CustomButton>
      </View>
    </BottomSheetModalComponent>
  );
});

export default ShopLocationBottomSheet;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    top: "3%",
  },
  userAndDateText: {
    fontFamily: FONT.semiBold,
    marginBottom: "1%",
  },
});
