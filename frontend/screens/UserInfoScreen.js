import { TextInput } from "react-native";
import React, { useRef } from "react";
import { COLORS } from "../shared/constants";
import { globalStyles } from "../shared/globalStyles";
import CheckBoxPrompt from "../shared/components/CheckBoxPrompt";
import BottomSheetModalComponent from "../shared/components/BottomSheetModalComponent";
import CustomText from "../shared/components/CustomText";
import BaseAppComponent from "../shared/components/BaseAppComponent";

const UserInfoScreen = () => {
  const termsAndConditionsBottomSheetModalRef = useRef(null);
  const privacyPolicyBottomSheetModalRef = useRef(null);

  const handleTermsAndConditionsBottomSheetOpen = () =>
    termsAndConditionsBottomSheetModalRef.current?.present();
  const handlePrivacyPolicyBottomSheetOpen = () =>
    privacyPolicyBottomSheetModalRef.current?.present();

  return [
    <BaseAppComponent
      contentOffset={"12.5%"}
      screenHeaderTitle={"Моля попълнете следните полета"}
      key={0}
    >
      <TextInput
        placeholder="Имейл"
        selectionColor={COLORS.primary}
        style={[
          globalStyles.textInput,
          globalStyles.textTile,
          { marginTop: "5%" },
        ]}
      />

      <TextInput
        placeholder="Телефонен номер"
        selectionColor={COLORS.primary}
        style={[globalStyles.textInput, globalStyles.textTile]}
      />

      <TextInput
        placeholder="Парола"
        selectionColor={COLORS.primary}
        style={[globalStyles.textInput, globalStyles.textTile]}
      />

      <TextInput
        placeholder="Повторете паролата"
        selectionColor={COLORS.primary}
        style={[globalStyles.textInput, globalStyles.textTile]}
      />

      <CheckBoxPrompt
        style={{ marginTop: "3%" }}
        width={262}
        termsAndConditionsOnPress={handleTermsAndConditionsBottomSheetOpen}
        privacyPolicyOnPress={handlePrivacyPolicyBottomSheetOpen}
      />
    </BaseAppComponent>,

    // -- Terms and Conditions BottomSheetModal --

    <BottomSheetModalComponent
      key={1}
      snapPoints={["80%"]}
      ref={termsAndConditionsBottomSheetModalRef}
      title={"Общи условия"}
    >
      {/* Change to real terms and conditions instead of: */}
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
      {/* Change to real privacy policy instead of: */}
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
