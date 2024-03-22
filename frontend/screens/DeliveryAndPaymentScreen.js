import { TextInput } from "react-native";
import React from "react";
import BaseAppComponent from "../shared/components/BaseAppComponent";
import { globalStyles } from "../shared/globalStyles";
import { COLORS } from "../shared/constants";
import DeliveryRadioButtons from "../shared/components/DeliveryRadioButtons";
import POSTerminalPrompt from "../shared/components/POSTerminalPrompt";
import CustomText from "../shared/components/CustomText";

const DeliveryAndPaymentScreen = () => {
  return (
    <BaseAppComponent
      screenHeaderTitle="Попълнете информация за доставка и плащане"
      contentOffset={"7.5%"}
    >
      <TextInput
        selectionColor={COLORS.primary}
        style={[
          globalStyles.textInput,
          globalStyles.textTile,
          { marginVertical: "3.5%" },
        ]}
      >
        Уеб сайт (по желание)
      </TextInput>

      <DeliveryRadioButtons />

      <POSTerminalPrompt />

      <CustomText style={[globalStyles.infoTextLong, { marginTop: "4%" }]}>
        Тази информация ще бъде публична. Чрез нея хората ще достигат до Вас.
      </CustomText>
    </BaseAppComponent>
  );
};

export default DeliveryAndPaymentScreen;
