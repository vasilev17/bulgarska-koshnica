import {
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { globalStyles } from "../shared/globalStyles";
import {
  icons,
  images,
  FONTSIZES,
  FONT,
  COLORS,
  SIZES,
} from "../shared/constants";
import DismissKeyboardView from "../shared/components/DismissKeyboardView";
import CustomButton from "../shared/components/CustomButton";
import CustomText from "../shared/components/CustomText";
import { HeadingText } from "../shared/components/HeadingText";

const SignUpScreen = () => {
  return (
    <DismissKeyboardView>
      <SafeAreaView style={globalStyles.appContainer}>
        <Image style={globalStyles.headerWave} source={images.headerWave} />

        <View style={[globalStyles.screenContentContainer, {marginTop: '-7%'}]}>
          <Image style={globalStyles.logo} source={images.basketLogo} />

          <HeadingText style={[globalStyles.title, { marginTop: "1.5%" }]}>
            Добър ден!
          </HeadingText>

          <CustomText
            style={[
              globalStyles.infoText,
              { marginTop: "5%", marginBottom: "5%" },
            ]}
          >
            Ако желаете профил, моля въведете името си
          </CustomText>

          <TextInput
            selectionColor={COLORS.primary}
            style={globalStyles.textInput}
          >
            Име
          </TextInput>

          <TextInput
            selectionColor={COLORS.primary}
            style={[
              globalStyles.textInput,
              { marginTop: "2%", marginBottom: "8%" },
            ]}
          >
            Фамилия
          </TextInput>

          <CustomButton
            size={SIZES.small}
            buttonColor={COLORS.primary}
            fontColor={COLORS.white}
            hasShadow={true}
          >
            Напред
          </CustomButton>

          <CustomText style={{ marginTop: "3%", marginBottom: "3%" }}>
            Или
          </CustomText>

          <CustomButton
            size={SIZES.large}
            buttonColor={COLORS.secondary}
            fontColor={COLORS.white}
            hasShadow={true}
          >
            Не желая профил
          </CustomButton>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: "5%",
            }}
          >
            <CustomText>Вече имате профил? </CustomText>
            <TouchableOpacity>
              <CustomText
                style={[globalStyles.boldText, globalStyles.underlinedText]}
              >
                Вход
              </CustomText>
            </TouchableOpacity>
          </View>
        </View>
        <Image
          style={globalStyles.footerWaveEmpty}
          source={images.footerWaveEmpty}
        />
      </SafeAreaView>
    </DismissKeyboardView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
