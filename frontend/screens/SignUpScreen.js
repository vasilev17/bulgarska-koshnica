import {
  Image,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { globalStyles } from "../shared/globalStyles";
import { icons, images, SIZES, FONT, COLORS } from "../shared/constants";
import DismissKeyboardView from "../shared/components/DismissKeyboardView";

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
