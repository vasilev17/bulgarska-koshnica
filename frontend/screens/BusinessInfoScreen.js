import { View, Text } from "react-native";
import React from "react";
import BaseAppComponent from "../shared/components/BaseAppComponent";
import { TextInput } from "react-native-gesture-handler";
import { COLORS } from "../shared/constants";
import { globalStyles } from "../shared/globalStyles";
import CustomText from "../shared/components/CustomText";

const BusinessInfoScreen = () => {
  return (
    <BaseAppComponent
      screenHeaderTitle={"Моля попълнете следните полета"}
      contentOffset={"9.5%"}
    >
      <TextInput
        selectionColor={COLORS.primary}
        style={[
          globalStyles.textInput,
          globalStyles.textTile,
          { marginTop: "5%" },
        ]}
      >
        Име на бизнеса
      </TextInput>
      <TextInput
        selectionColor={COLORS.primary}
        style={[globalStyles.textInput, globalStyles.textTile]}
      >
        Адрес
      </TextInput>
      <TextInput
        selectionColor={COLORS.primary}
        style={[globalStyles.textInput, globalStyles.textTile]}
      >
        Област
      </TextInput>
      <TextInput
        selectionColor={COLORS.primary}
        style={[globalStyles.textInput, globalStyles.textTile]}
      >
        Служебен тел. номер
      </TextInput>
      <TextInput
        selectionColor={COLORS.primary}
        style={[globalStyles.textInput, globalStyles.textTile]}
      >
        Електронна поща
      </TextInput>

      <CustomText style={[globalStyles.infoText, { marginTop: "2%" }]}>
        Тази информация ще бъде публична. Чрез нея хората ще достигат до Вас.
      </CustomText>
    </BaseAppComponent>
  );
};

export default BusinessInfoScreen;
