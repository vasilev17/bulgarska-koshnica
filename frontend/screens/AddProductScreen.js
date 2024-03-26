import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import BaseAppComponent from "../shared/components/BaseAppComponent";
import {
  COLORS,
  FONT,
  FONTSIZES,
  FOOTERSTYLES,
  SIZES,
} from "../shared/constants";
import { globalStyles } from "../shared/globalStyles";
import SwitchComponent from "../shared/components/SwitchComponent";
import ImageUploader from "../shared/components/ImageUploader";
import CustomButton from "../shared/components/CustomButton";

const AddProductScreen = () => {
  return (
    <BaseAppComponent
      screenHeaderTitle="Нов продукт"
      contentOffset={"9%"}
      footerWaveType={FOOTERSTYLES.footerEmpty}
    >
      <TextInput
        selectionColor={COLORS.primary}
        style={[
          globalStyles.textInput,
          globalStyles.textTile,
          { marginTop: "5%", marginBottom: "5%" },
        ]}
      >
        Име на продукта
      </TextInput>

      <View style={styles.priceSectionContainer}>
        <TextInput
          keyboardType="numeric"
          maxLength={7}
          selectionColor={COLORS.primary}
          style={[styles.priceInput, { marginRight: "3%" }]}
        >
          Цена
        </TextInput>

        <SwitchComponent
          size={SIZES.small}
          leftOption="/бр"
          rightOption="/кг"
        />
      </View>

      <ImageUploader size={SIZES.small} style={{ marginTop: "7%" }} />

      <CustomButton
        size={SIZES.large}
        buttonColor={COLORS.secondary}
        fontColor={COLORS.white}
        hasShadow={true}
        style={{ marginTop: "7%", marginBottom: "3%" }}
      >
        Добавяне
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
    </BaseAppComponent>
  );
};

export default AddProductScreen;

const styles = StyleSheet.create({
  priceSectionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceInput: {
    width: 107,
    height: 58,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    fontFamily: FONT.regular,
    color: COLORS.text,
    fontSize: FONTSIZES.size21,
    textAlign: "center",

    borderTopColor: COLORS.graySecondary,
    borderTopWidth: 0.7,

    shadowColor: COLORS.gray,

    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.15,
    shadowRadius: 13,

    elevation: 7,
  },
});
