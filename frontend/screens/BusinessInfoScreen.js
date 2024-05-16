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
      leftButtonText="Пропусни"
    >
      <TextInput
        placeholder="Име на бизнеса"
        selectionColor={COLORS.primary}
        style={[
          globalStyles.textInput,
          globalStyles.textTile,
          { marginTop: "5%" },
        ]}
      />

      <TextInput
        placeholder="Адрес"
        selectionColor={COLORS.primary}
        style={[globalStyles.textInput, globalStyles.textTile]}
      />

      <TextInput
        placeholder="Област"
        selectionColor={COLORS.primary}
        style={[globalStyles.textInput, globalStyles.textTile]}
      />

      <TextInput
        placeholder="Служебен тел. номер"
        selectionColor={COLORS.primary}
        style={[globalStyles.textInput, globalStyles.textTile]}
      />

      <TextInput
        placeholder="Електронна поща"
        selectionColor={COLORS.primary}
        style={[globalStyles.textInput, globalStyles.textTile]}
      />

      <CustomText style={[globalStyles.infoText, { marginTop: "2%" }]}>
        Тази информация ще бъде публична. Чрез нея хората ще достигат до Вас.
      </CustomText>
    </BaseAppComponent>
  );
};

export default BusinessInfoScreen;
