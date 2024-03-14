import { Image, SafeAreaView, TextInput, View } from "react-native";
import React, { useRef } from "react";
import { COLORS, SIZES, images } from "../shared/constants";
import DismissKeyboardView from "../shared/components/DismissKeyboardView";
import { globalStyles } from "../shared/globalStyles";
import ScreenHeader from "../shared/components/ScreenHeader";
import CheckBoxPrompt from "../shared/components/CheckBoxPrompt";
import CustomButton from "../shared/components/CustomButton";
import BottomSheetModalComponent from "../shared/components/BottomSheetModalComponent";
import CustomText from "../shared/components/CustomText";

const UserInfoScreen = () => {
  const termsAndConditionsBottomSheetModalRef = useRef(null);
  const privacyPolicyBottomSheetModalRef = useRef(null);

  const handleTermsAndConditionsBottomSheetOpen = () =>
    termsAndConditionsBottomSheetModalRef.current?.present();
  const handlePrivacyPolicyBottomSheetOpen = () =>
    privacyPolicyBottomSheetModalRef.current?.present();

  return [
    <DismissKeyboardView key={0}>
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

          <CheckBoxPrompt
            style={{ marginTop: "3%" }}
            width={262}
            termsAndConditionsOnPress={handleTermsAndConditionsBottomSheetOpen}
            privacyPolicyOnPress={handlePrivacyPolicyBottomSheetOpen}
          />
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
    </DismissKeyboardView>,

    // -- Terms and Conditions BottomSheetModal --

    <BottomSheetModalComponent
      key={1}
      snapPoints={["80%"]}
      ref={termsAndConditionsBottomSheetModalRef}
      title={"Общи условия"}
    >
      <CustomText>
        Това са общите условия за ползване на приложението!{"\n"}
        {"\n"}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu
        justo augue. Pellentesque vel tincidunt metus. Suspendisse a erat
        dictum, porta nisl non, imperdiet tellus. Proin fermentum placerat quam
        ut facilisis. Nulla eu condimentum odio. Sed gravida bibendum suscipit.
        Aenean venenatis sagittis tortor. Quisque nisl lorem, posuere nec lorem
        at, ullamcorper facilisis urna. Nullam bibendum, neque dapibus ultrices
        aliquet, massa tellus volutpat mi, et congue mi lacus quis ante. Donec
        in massa id enim commodo placerat. Maecenas in sem velit. Fusce
        efficitur volutpat posuere. Sed eu dui quis neque aliquam finibus.
        Curabitur non ligula ac lorem convallis blandit quis a enim. Etiam
        dictum massa non sagittis scelerisque. Nulla molestie, nunc vel semper
        pellentesque, justo augue semper diam, eu fermentum nunc nisl vel
        sapien. Sed in elit varius, malesuada felis vel, cursus urna. Praesent
        in finibus purus, vel maximus lectus. Nullam erat sem, posuere eu
        malesuada aliquet, volutpat ac mi. Vestibulum.
      </CustomText>
    </BottomSheetModalComponent>,

    // -- Privacy Policy BottomSheetModal --

    <BottomSheetModalComponent
      key={2}
      snapPoints={["80%"]}
      ref={privacyPolicyBottomSheetModalRef}
      title={"Защита на личните данни"}
    >
      <CustomText>
        Това са условията за защита на личните данни!{"\n"}
        {"\n"}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu
        justo augue. Pellentesque vel tincidunt metus. Suspendisse a erat
        dictum, porta nisl non, imperdiet tellus. Proin fermentum placerat quam
        ut facilisis. Nulla eu condimentum odio. Sed gravida bibendum suscipit.
        Aenean venenatis sagittis tortor. Quisque nisl lorem, posuere nec lorem
        at, ullamcorper facilisis urna. Nullam bibendum, neque dapibus ultrices
        aliquet, massa tellus volutpat mi, et congue mi lacus quis ante. Donec
        in massa id enim commodo placerat. Maecenas in sem velit. Fusce
        efficitur volutpat posuere. Sed eu dui quis neque aliquam finibus.
        Curabitur non ligula ac lorem convallis blandit quis a enim. Etiam
        dictum massa non sagittis scelerisque. Nulla molestie, nunc vel semper
        pellentesque, justo augue semper diam, eu fermentum nunc nisl vel
        sapien. Sed in elit varius, malesuada felis vel, cursus urna. Praesent
        in finibus purus, vel maximus lectus. Nullam erat sem, posuere eu
        malesuada aliquet, volutpat ac mi. Vestibulum.
      </CustomText>
    </BottomSheetModalComponent>,
  ];
};

export default UserInfoScreen;
