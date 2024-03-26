import { TextInput } from "react-native";
import React from "react";
import { globalStyles } from "../shared/globalStyles";
import { COLORS, FOOTERSTYLES, SIZES } from "../shared/constants";
import CustomText from "../shared/components/CustomText";
import CustomButton from "../shared/components/CustomButton";
import BaseAppComponent from "../shared/components/BaseAppComponent";

const LoginScreen = () => {
  return (
    <BaseAppComponent
    contentOffset={"19.5%"}
      screenHeaderTitle="Влезте в профила си!"
      footerWaveType={FOOTERSTYLES.footerEmpty}
    >
      <TextInput
        selectionColor={COLORS.primary}
        style={[globalStyles.textInput, globalStyles.textTile, { marginTop: "5%" }]}
      >
        Имейл или тел. номер
      </TextInput>

      <TextInput
        selectionColor={COLORS.primary}
        style={[globalStyles.textInput, globalStyles.textTile, { marginBottom: "10%" }]}
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
    </BaseAppComponent>
  );
};

export default LoginScreen;
