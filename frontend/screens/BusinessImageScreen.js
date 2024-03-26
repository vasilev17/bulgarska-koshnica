import { StyleSheet, Text, View } from "react-native";
import React from "react";

import BaseAppComponent from "../shared/components/BaseAppComponent";
import ImageUploader from "../shared/components/ImageUploader";
import CustomText from "../shared/components/CustomText";
import { globalStyles } from "../shared/globalStyles";
import { SIZES } from "../shared/constants";

const BusinessImageScreen = () => {
  return (
    <BaseAppComponent
      screenHeaderTitle="Качете снимка на бизнеса"
      screenHeaderSubtitle="(по желание)"
      contentOffset={"12.5%"}
    >
      <ImageUploader size={SIZES.large} aspectRatio={[17, 10]} style={{ marginVertical: "9%" }} />

      <CustomText style={[globalStyles.infoTextLong, { marginTop: "0%" }]}>
        Тази информация ще бъде публична. Чрез нея хората ще достигат до Вас.
      </CustomText>
    </BaseAppComponent>
  );
};

export default BusinessImageScreen;
