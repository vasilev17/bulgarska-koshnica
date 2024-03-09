import { View, SafeAreaView, Image } from "react-native";
import React from "react";
import DismissKeyboardView from "../shared/components/DismissKeyboardView";
import { globalStyles } from "../shared/globalStyles";
import ScreenHeader from "../shared/components/ScreenHeader";
import { COLORS, SIZES, images } from "../shared/constants";
import CustomButton from "../shared/components/CustomButton";

const UserTypeScreen = () => {
  return (
    <DismissKeyboardView>
      <SafeAreaView style={globalStyles.appContainer}>
        <Image style={globalStyles.headerWave} source={images.headerWave} />
        <View
          style={[globalStyles.screenContentContainer, { marginTop: "0%" }]}
        >
          <ScreenHeader>Вие сте?</ScreenHeader>
          {/* Rest of Front End elements */}
        </View>

        <CustomButton
          size={SIZES.small}
          buttonColor={COLORS.white}
          fontColor={COLORS.text}
          hasShadow={false}
          style={{ position: "absolute", left: "4%", bottom: "5%" }}
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
