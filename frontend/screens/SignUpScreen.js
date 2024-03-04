import {
  Image,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
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

const SignUpScreen = () => {
  return (
    <DismissKeyboardView>
      <SafeAreaView style={globalStyles.container}>
        <Image style={globalStyles.headerWave} source={images.headerWave} />

        <Image style={globalStyles.logo} source={images.basketLogo} />
        <Text style={globalStyles.title}>Добър ден!</Text>
        <Text style={globalStyles.infoText}>
          Ако желаете профил, моля въведете името си
        </Text>

        <TextInput
          selectionColor={COLORS.primary}
          style={globalStyles.textInput}
        >
          Име
        </TextInput>

        <TextInput
          selectionColor={COLORS.primary}
          style={globalStyles.textInput}
        >
          Фамилия
        </TextInput>

        <CustomButton
          size={SIZES.small}
          buttonColor={COLORS.primary}
          fontColor={COLORS.white}
          hasShadow={true}
          text="Напред"
        />

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
