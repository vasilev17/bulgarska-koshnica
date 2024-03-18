import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BaseAppScreen from "../shared/components/BaseAppScreen";
import DescriptionTextInput from "../shared/components/DescriptionTextInput";
import CustomText from "../shared/components/CustomText";
import { globalStyles } from "../shared/globalStyles";

const BusinessDescriptionScreen = () => {
  return (
    <BaseAppScreen
      screenHeaderTitle="Попълнете информация за биснеса Ви"
      contentOffset={"8%"}
    >
      <DescriptionTextInput style={{ marginTop: "2%" }} />

      <CustomText style={[globalStyles.infoTextLong, { marginTop: "2%" }]}>
        Тази информация ще бъде публична. Чрез нея хората ще достигат до Вас.
      </CustomText>
    </BaseAppScreen>
  );
};

export default BusinessDescriptionScreen;
