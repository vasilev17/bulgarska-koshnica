import { View, SafeAreaView, Image, ImageBackground } from "react-native";
import React from "react";
import DismissKeyboardView from "../shared/components/DismissKeyboardView";
import { globalStyles } from "../shared/globalStyles";
import ScreenHeader from "../shared/components/ScreenHeader";
import { COLORS, SIZES, images } from "../shared/constants";
import CustomButton from "../shared/components/CustomButton";
import UserTypeCard from "../shared/components/UserTypeCard";

const UserTypeScreen = () => {
  return (
    <DismissKeyboardView>
      <SafeAreaView style={globalStyles.appContainer}>
        <Image style={globalStyles.headerWave} source={images.headerWave} />
        <View
          style={[globalStyles.screenContentContainer, { marginTop: "0%" }]}
        >
          <ScreenHeader>Вие сте?</ScreenHeader>

          <UserTypeCard
            style={[globalStyles.userTypeCard, {marginTop: "5%", marginBottom: "7%"}]}
            image={images.buyer}
            title={"Купувач"}
          />

          <UserTypeCard
            style={globalStyles.userTypeCard}
            image={images.producer}
            title={"Продавач"}
          />
        </View>

        <CustomButton
          size={SIZES.small}
          buttonColor={COLORS.white}
          fontColor={COLORS.text}
          hasShadow={false}
          style={{ position: "absolute", left: "3.5%", bottom: "5%" }}
        >
          Назад
        </CustomButton>
        <Image
          style={globalStyles.footerWaveWithContent}
          source={images.footerWaveWithContent}
        />
      </SafeAreaView>
    </DismissKeyboardView>
  );
};

export default UserTypeScreen;
