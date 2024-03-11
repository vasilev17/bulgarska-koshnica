import { Image, SafeAreaView, TextInput, View } from "react-native";
import React from "react";
import DismissKeyboardView from "../shared/components/DismissKeyboardView";
import { globalStyles } from "../shared/globalStyles";
import { COLORS, SIZES, images } from "../shared/constants";
import CustomText from "../shared/components/CustomText";
import CustomButton from "../shared/components/CustomButton";
import ScreenHeader from "../shared/components/ScreenHeader";

const LoginScreen = () => {
  return (
    <DismissKeyboardView>
      <SafeAreaView style={globalStyles.appContainer}>
        <Image style={globalStyles.headerWave} source={images.headerWave} />
        <View style={globalStyles.screenContentContainer}>
          <ScreenHeader style={{ marginBottom: "7%" }}>
            Влезте в профила си!
          </ScreenHeader>

          <TextInput
            selectionColor={COLORS.primary}
            style={globalStyles.textInput}
          >
            Имейл или тел. номер
          </TextInput>

          <TextInput
            selectionColor={COLORS.primary}
            style={[globalStyles.textInput, { marginBottom: "10%" }]}
          >
            Парола
          </TextInput>

          <CustomButton
            size={SIZES.small}
            buttonColor={COLORS.primary}
            fontColor={COLORS.white}
            hasShadow={true}
          >
            Напред
          </CustomButton>

          <CustomText style={{ marginVertical: "5%" }}>
            Нямате профил?
          </CustomText>

          <CustomButton
            size={SIZES.large}
            buttonColor={COLORS.secondary}
            fontColor={COLORS.white}
            hasShadow={true}
          >
            Регистрация
          </CustomButton>
        </View>
        <Image
          style={globalStyles.footerWaveEmpty}
          source={images.footerWaveEmpty}
        />
      </SafeAreaView>
    </DismissKeyboardView>
  );
};

export default LoginScreen;
