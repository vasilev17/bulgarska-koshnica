import { View, Text } from "react-native";
import React from "react";
import BaseAppComponent from "../shared/components/BaseAppComponent";
import TagInput from "../shared/components/TagInput";
import CustomText from "../shared/components/CustomText";
import { globalStyles } from "../shared/globalStyles";

const BusinessKeyWordsScreen = () => {
  return (
    <BaseAppComponent
      screenHeaderTitle="Попълнете ключови думи за биснеса Ви"
      contentOffset={"7%"}
    >
      <TagInput style={{marginTop:'3%'}}/>
      
      <CustomText style={[globalStyles.infoTextLong, { marginTop: "2%" }]}>
        Тази информация ще бъде публична. Чрез нея хората ще достигат до Вас.
      </CustomText>

    </BaseAppComponent>
  );
};

export default BusinessKeyWordsScreen;
