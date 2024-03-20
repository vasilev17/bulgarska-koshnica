import React from "react";
import { globalStyles } from "../shared/globalStyles";
import { images } from "../shared/constants";
import UserTypeCard from "../shared/components/UserTypeCard";
import BaseAppComponent from "../shared/components/BaseAppComponent";

const UserTypeScreen = () => {
  return (
    <BaseAppComponent contentOffset={"16%"} screenHeaderTitle="Вие сте?" hasContinueButton={false}>
      <UserTypeCard
        style={[
          globalStyles.userTypeCard,
          { marginTop: "5%", marginBottom: "7%" },
        ]}
        image={images.buyer}
        title={"Купувач"}
      />

      <UserTypeCard
        style={globalStyles.userTypeCard}
        image={images.producer}
        title={"Продавач"}
      />
    </BaseAppComponent>
  );
};

export default UserTypeScreen;
