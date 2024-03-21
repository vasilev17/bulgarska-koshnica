import { StyleSheet, TextInput } from "react-native";
import React from "react";
import BaseAppComponent from "../shared/components/BaseAppComponent";
import { globalStyles } from "../shared/globalStyles";
import { COLORS } from "../shared/constants";
import DeliveryRadioButtons from "../shared/components/DeliveryRadioButtons";
import POSTerminalPrompt from "../shared/components/POSTerminalPrompt";

const DeliveryAndPaymentScreen = () => {
  return (
    <BaseAppComponent
      screenHeaderTitle="Попълнете информация за доставка и плащане"
      contentOffset={"8%"}
    >
      <TextInput
        selectionColor={COLORS.primary}
        style={[
          globalStyles.textInput,
          globalStyles.textTile,
          { marginVertical: "5.5%" },
        ]}
      >
        Уеб сайт (по желание)
      </TextInput>

      <DeliveryRadioButtons />
      <POSTerminalPrompt />
    </BaseAppComponent>
  );
};

export default DeliveryAndPaymentScreen;
const styles = StyleSheet.create({});
