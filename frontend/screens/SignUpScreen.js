import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { globalStyles } from "../shared/globalStyles";
import { COLORS, SIZES, FOOTERSTYLES, FONT } from "../shared/constants";
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
        Ако желаете{" "}
        <CustomText style={{ fontFamily: FONT.bold }}>нов профил</CustomText>,
        моля въведете името си
      </CustomText>

      <TextInput
        placeholder="Име"
        selectionColor={COLORS.primary}
        style={[globalStyles.textInput, globalStyles.textTile]}
      />

      <TextInput
        placeholder="Фамилия"
        selectionColor={COLORS.primary}
        style={[
          globalStyles.textInput,
          globalStyles.textTile,
          { marginBottom: "6%" },
        ]}
      />

      <CustomButton
        size={SIZES.smallPlus}
        buttonColor={COLORS.primary}
        fontColor={COLORS.white}
        hasShadow={true}
      >
        Регистрация
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
