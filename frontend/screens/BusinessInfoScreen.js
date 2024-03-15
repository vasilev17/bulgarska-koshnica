import { View, Text } from "react-native";
import React from "react";
import BaseAppScreen from "../shared/components/BaseAppScreen";
import { TextInput } from "react-native-gesture-handler";
import { COLORS } from "../shared/constants";
import { globalStyles } from "../shared/globalStyles";
import CustomText from "../shared/components/CustomText";

const BusinessInfoScreen = () => {
  return (
    <BaseAppScreen
      screenHeaderTitle={"Моля попълнете следните полета"}
      contentOffset={"9.5%"}
    >
      <TextInput
        selectionColor={COLORS.primary}
        style={[globalStyles.textInput, { marginTop: "5%" }]}
      >
        Име на бизнеса
      </TextInput>
      <TextInput selectionColor={COLORS.primary} style={globalStyles.textInput}>
        Адрес
      </TextInput>
      <TextInput selectionColor={COLORS.primary} style={globalStyles.textInput}>
        Област
      </TextInput>
      <TextInput selectionColor={COLORS.primary} style={globalStyles.textInput}>
        Служебен тел. номер
      </TextInput>
      <TextInput selectionColor={COLORS.primary} style={globalStyles.textInput}>
        Електронна поща
      </TextInput>

      <CustomText style={[globalStyles.infoText, {marginTop:"2%"}]}>
        Тази информация ще бъде публична. Чрез нея хората ще достигат до Вас.
      </CustomText>
    </BaseAppScreen>
  );
};

export default BusinessInfoScreen;
