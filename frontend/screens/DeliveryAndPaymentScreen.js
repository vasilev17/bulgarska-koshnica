import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import BaseAppComponent from "../shared/components/BaseAppComponent";
import { globalStyles } from "../shared/globalStyles";
import { COLORS, FONTSIZES } from "../shared/constants";
import DeliveryRadioButtons from "../shared/components/DeliveryRadioButtons";
import CustomText from "../shared/components/CustomText";
import SwitchComponent from "../shared/components/SwitchComponent";

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

      <View style={styles.container}>
        <CustomText style={[styles.title, { marginTop: "3.5%" }]}>
          Притежавате ли POS терминал?
        </CustomText>
        <SwitchComponent
          leftOption="Да"
          rightOption="Не"
          style={{ marginTop: "2.5%" }}
        />
      </View>

      <CustomText style={[globalStyles.infoTextLong, { marginTop: "4%" }]}>
        Тази информация ще бъде публична. Чрез нея хората ще достигат до Вас.
      </CustomText>
    </BaseAppComponent>
  );
};

export default DeliveryAndPaymentScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    width: 230,
    textAlign: "center",
    fontSize: FONTSIZES.size22,
  },
});
