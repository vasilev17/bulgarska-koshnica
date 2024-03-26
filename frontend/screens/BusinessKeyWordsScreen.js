import { View, Text } from "react-native";
import React from "react";
import BaseAppComponent from "../shared/components/BaseAppComponent";
import TagInput from "../shared/components/TagInput";

const BusinessKeyWordsScreen = () => {
  return (
    <BaseAppComponent
      screenHeaderTitle="Попълнете ключови думи за биснеса Ви"
      contentOffset={"9%"}
    >
      <TagInput />
      
    </BaseAppComponent>
  );
};

export default BusinessKeyWordsScreen;
