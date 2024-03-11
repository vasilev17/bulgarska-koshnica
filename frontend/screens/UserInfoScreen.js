import { Image, SafeAreaView, TextInput, View } from "react-native";
import React from "react";
import { COLORS, SIZES, images } from "../shared/constants";
import DismissKeyboardView from "../shared/components/DismissKeyboardView";
import { globalStyles } from "../shared/globalStyles";
import ScreenHeader from "../shared/components/ScreenHeader";
import CheckBoxPrompt from "../shared/components/CheckBoxPrompt";
import CustomButton from "../shared/components/CustomButton";

const UserInfoScreen = () => {
  return (
    <DismissKeyboardView>
      <SafeAreaView style={globalStyles.appContainer}>
        <Image style={globalStyles.headerWave} source={images.headerWave} />

        <View
          style={[globalStyles.screenContentContainer, { marginTop: "-9%" }]}
        >
          <ScreenHeader>Моля попълнете следните полета</ScreenHeader>

          <TextInput
            selectionColor={COLORS.primary}
            style={[globalStyles.textInput, { marginTop: "5%" }]}
          >
            Имейл
          </TextInput>

          <TextInput
            selectionColor={COLORS.primary}
            style={globalStyles.textInput}
          >
            Телефонен номер
          </TextInput>

          <TextInput
            selectionColor={COLORS.primary}
            style={globalStyles.textInput}
          >
            Парола
          </TextInput>

          <TextInput
            selectionColor={COLORS.primary}
            style={globalStyles.textInput}
          >
            Повторете паролата
          </TextInput>

          <CheckBoxPrompt style={{ marginTop: "3%" }} width={262} />
        </View>

        <CustomButton
          size={SIZES.small}
          buttonColor={COLORS.white}
          fontColor={COLORS.text}
          hasShadow={false}
          style={globalStyles.backButton}
        >
          Назад
        </CustomButton>

        <CustomButton
          size={SIZES.small}
          buttonColor={COLORS.secondary}
          fontColor={COLORS.white}
          hasShadow={true}
          style={globalStyles.continueButton}
        >
          Напред
        </CustomButton>
        <Image
          style={globalStyles.footerWaveWithContent}
          source={images.footerWaveWithContent}
        />
      </SafeAreaView>
    </DismissKeyboardView>
  );
};

export default UserInfoScreen;
