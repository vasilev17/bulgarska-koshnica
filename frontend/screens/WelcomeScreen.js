import { View, Text } from "react-native";
import React from "react";
import BaseAppComponent from "../shared/components/BaseAppComponent";
import { COLORS, FONTSIZES, FOOTERSTYLES, SIZES } from "../shared/constants";
import CustomText from "../shared/components/CustomText";
import { globalStyles } from "../shared/globalStyles";
import CustomButton from "../shared/components/CustomButton";

const WelcomeScreen = () => {
  //Fetch the user's first name instead of:
  const name = "Ivan";

  return (
    <BaseAppComponent
      screenHeaderTitle={`Добре дошли ${name}`}
      contentOffset={"17%"}
      footerWaveType={FOOTERSTYLES.footerEmpty}
    >
      <CustomText
        style={[
          globalStyles.infoText,
          { fontSize: FONTSIZES.size24, textAlign: "center", width: 360 },
          { marginTop: "5%", marginBottom: "3%" },
        ]}
      >
        Надяваме се това приложение от българи за българи да помогне, както на
        българските производители, така и на потребителите да достигат до
        качествена българска храна!
      </CustomText>

      <CustomButton
        size={SIZES.medium}
        buttonColor={COLORS.secondary}
        fontColor={COLORS.white}
        hasShadow={true}
        style={{ marginTop: "7%", marginBottom: "3%" }}
      >
        Продължи
      </CustomButton>

      <CustomButton
        size={SIZES.small}
        buttonColor={COLORS.white}
        fontColor={COLORS.secondary}
        hasShadow={false}
        outlineColor={COLORS.primary}
        style={{ marginTop: "1%" }}
      >
        Назад
      </CustomButton>
    </BaseAppComponent>
  );
};

export default WelcomeScreen;
