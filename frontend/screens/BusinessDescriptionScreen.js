import React from "react";
import BaseAppComponent from "../shared/components/BaseAppComponent";
import TextAreaInput from "../shared/components/TextAreaInput";
import CustomText from "../shared/components/CustomText";
import { globalStyles } from "../shared/globalStyles";

const BusinessDescriptionScreen = () => {
  return (
    <BaseAppComponent
      screenHeaderTitle="Попълнете информация за биснеса Ви"
      contentOffset={"8%"}
    >
      <TextAreaInput
        placeholder={"Описание на бизнеса\n (Може да го промените\n по-късно)"}
        maxLength={545}
        style={{ marginTop: "2%" }}
      />

      <CustomText style={[globalStyles.infoTextLong, { marginTop: "2%" }]}>
        Тази информация ще бъде публична. Чрез нея хората ще достигат до Вас.
      </CustomText>
    </BaseAppComponent>
  );
};

export default BusinessDescriptionScreen;
