import { StyleSheet, Text, View } from "react-native";
import React, { forwardRef } from "react";
import BottomSheetModalComponent from "./BottomSheetModalComponent";
import TextAreaInput from "./TextAreaInput";
import CustomButton from "./CustomButton";
import { COLORS, SIZES } from "../constants";
import Dropdown from "./Dropdown";

const ReportBottomSheet = forwardRef((props, ref) => {
  //Fetch report types from server instead of:
  const reportTypes = [
    { label: "Обектът не съществува", short: "Не съществува", value: "0" },
    { label: "Грешно оказана локация", short: "Локация", value: "1" },
    { label: "Лошо отношение", short: "Отношение", value: "2" },
    { label: "Лоша хигиена", short: "Хигиена", value: "3" },
    { label: "Изтекъл срок на годност", short: "Годност", value: "4" },
    { label: "Несъществуващи продукти", short: "Продукти", value: "5" },
    { label: "Измама", short: "Измама", value: "6" },
    { label: "Други", short: "Други", value: "7" },
  ];

  return (
    <BottomSheetModalComponent
      hasBackdrop={true}
      snapPoints={["100%"]}
      ref={ref}
      title={props.title}
      titleWidth={270}
    >
      <View style={styles.container}>
        {/* Dropdown */}
        <Dropdown data={reportTypes} />

        <TextAreaInput
          showBigPlaceholder={false}
          placeholder={"Описание на проблемите"}
          maxLength={450}
          style={{ marginTop: "5%", height: 295 }}
        />

        <CustomButton
          size={SIZES.large}
          buttonColor={COLORS.red}
          fontColor={COLORS.white}
          hasShadow={true}
          style={{ marginTop: "7%", marginBottom: "3%" }}
        >
          Докладване
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

export default ReportBottomSheet;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    top: "3%",
  },
});
