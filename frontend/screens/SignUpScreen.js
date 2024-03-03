import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../shared/globalStyles";

import { icons, images, SIZES, FONT } from "../shared/Constants";


import {InterRegular} from "../assets/fonts/Inter-Bold.ttf"

const SignUpScreen = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Image style={globalStyles.headerWave} source={images.headerWave} />

      <View>
        <Text style={styles.test}>BG Кошница!</Text>
      </View>

      <Image
        style={globalStyles.footerWaveEmpty}
        source={images.footerWaveEmpty}
      />
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  test: {
    fontSize: SIZES.size24,
    fontFamily: FONT.bold,
  },
});
