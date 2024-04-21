import { Platform, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import BaseAppComponent from "../shared/components/BaseAppComponent";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { COLORS, FONTSIZES, FOOTERSTYLES, SIZES } from "../shared/constants";
import CustomText from "../shared/components/CustomText";
import CustomButton from "../shared/components/CustomButton";

const CELL_COUNT = 4;

const VerificationCodeScreen = () => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <BaseAppComponent
      contentOffset={"20%"}
      screenHeaderTitle="Потвърждение"
      footerWaveType={FOOTERSTYLES.footerWithContent}
      hasContinueButton={false}
    >
      <CustomText style={styles.subTitle}>
        Моля въведете кода,{"\n"} който Ви изпратихме на SMS
      </CustomText>

      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={{ marginTop: "10%" }}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        autoComplete={Platform.select({
          android: "sms-otp",
          default: "one-time-code",
        })}
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <CustomButton
        size={SIZES.large}
        buttonColor={COLORS.primary}
        fontColor={COLORS.white}
        hasShadow={true}
        style={{ marginTop: "12%" }}
      >
        Потвърди
      </CustomButton>
    </BaseAppComponent>
  );
};

export default VerificationCodeScreen;

const styles = StyleSheet.create({
  cell: {
    marginHorizontal: "2.1%",
    height: 70,
    width: 70,
    lineHeight: 70 - 5,
    fontSize: FONTSIZES.size30,
    textAlign: "center",
    borderRadius: 8,
    color: COLORS.secondary,
    backgroundColor: COLORS.white,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,

    // IOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    // Android
    elevation: 3,
  },
  subTitle: {
    marginTop: "5%",
    textAlign: "center",
  },
  focusCell: {
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 2,
  },
});
