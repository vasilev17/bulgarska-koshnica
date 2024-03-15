import { TextInput } from "react-native";
import React from "react";
import { globalStyles } from "../shared/globalStyles";
import { COLORS, FOOTERSTYLES, SIZES } from "../shared/constants";
import CustomText from "../shared/components/CustomText";
import CustomButton from "../shared/components/CustomButton";
import BaseAppScreen from "../shared/components/BaseAppScreen";

const LoginScreen = () => {
  return (
    <BaseAppScreen
    contentOffset={"19.5%"}
      screenHeaderTitle="Влезте в профила си!"
      footerWaveType={FOOTERSTYLES.footerEmpty}
      hasBackButton={false}
      hasContinueButton={false}
    >
      <TextInput
        selectionColor={COLORS.primary}
        style={[globalStyles.textInput, { marginTop: "5%" }]}
      >
        Имейл или тел. номер
      </TextInput>

      <TextInput
        selectionColor={COLORS.primary}
        style={[globalStyles.textInput, { marginBottom: "10%" }]}
      >
        Парола
      </TextInput>

      <CustomButton
        size={SIZES.small}
        buttonColor={COLORS.primary}
        fontColor={COLORS.white}
        hasShadow={true}
      >
        Напред
      </CustomButton>

      <CustomText style={{ marginVertical: "5%" }}>Нямате профил?</CustomText>

      <CustomButton
        size={SIZES.large}
        buttonColor={COLORS.secondary}
        fontColor={COLORS.white}
        hasShadow={true}
      >
        Регистрация
      </CustomButton>
    </BaseAppScreen>
  );
};

export default LoginScreen;
