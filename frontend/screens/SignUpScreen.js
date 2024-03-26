import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { globalStyles } from "../shared/globalStyles";
import { COLORS, SIZES, FOOTERSTYLES } from "../shared/constants";
import CustomButton from "../shared/components/CustomButton";
import CustomText from "../shared/components/CustomText";
import BaseAppComponent from "../shared/components/BaseAppComponent";

const SignUpScreen = () => {
  return (
    <BaseAppComponent
      contentOffset={"14.5%"}
      screenHeaderTitle="Добър ден!"
      footerWaveType={FOOTERSTYLES.footerEmpty}
    >
      <CustomText
        style={[globalStyles.infoText, { marginTop: "5%", marginBottom: "3%" }]}
      >
        Ако желаете профил, моля въведете името си
      </CustomText>

      <TextInput
        selectionColor={COLORS.primary}
        style={[globalStyles.textInput, globalStyles.textTile]}
      >
        Име
      </TextInput>

      <TextInput
        selectionColor={COLORS.primary}
        style={[
          globalStyles.textInput,
          globalStyles.textTile,
          { marginBottom: "6%" },
        ]}
      >
        Фамилия
      </TextInput>

      <CustomButton
        size={SIZES.small}
        buttonColor={COLORS.primary}
        fontColor={COLORS.white}
        hasShadow={true}
      >
        Напред
      </CustomButton>

      <CustomText style={{ marginVertical: "3%" }}>Или</CustomText>

      <CustomButton
        size={SIZES.large}
        buttonColor={COLORS.secondary}
        fontColor={COLORS.white}
        hasShadow={true}
      >
        Не желая профил
      </CustomButton>

      <View style={styles.textWrapper}>
        <CustomText>Вече имате профил? </CustomText>
        <TouchableOpacity>
          <CustomText
            style={[globalStyles.boldText, globalStyles.underlinedText]}
          >
            Вход
          </CustomText>
        </TouchableOpacity>
      </View>
    </BaseAppComponent>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  textWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "5%",
  },
});
