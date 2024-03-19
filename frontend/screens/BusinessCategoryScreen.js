import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BaseAppScreen from "../shared/components/BaseAppScreen";
import ToggleTile from "../shared/components/ToggleTile";
import { globalStyles } from "../shared/globalStyles";
import CustomText from "../shared/components/CustomText";

const BusinessCategoryScreen = () => {
  return (
    <BaseAppScreen
      screenHeaderTitle="Изберете категориите, отговарящи на бизнеса"
      contentOffset={"9.5%"}
    >
      <ToggleTile title={"Хранителни Продукти"} style={{ marginTop: "5%" }} />
      <ToggleTile title={"Дрехи"} />
      <ToggleTile title={"Изделия"} />
      <ToggleTile title={"Семена"} />
      <ToggleTile title={"Други"} />

      <CustomText style={[globalStyles.infoText, { marginTop: "2%" }]}>
        Тази информация ще бъде публична. Чрез нея хората ще достигат до Вас.
      </CustomText>
    </BaseAppScreen>
  );
};

export default BusinessCategoryScreen;
