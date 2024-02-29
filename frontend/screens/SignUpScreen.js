import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../shared/globalStyles";

const signUpScreen = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Image
        style={globalStyles.headerWave}
        source={require("../assets/images/headerWave.png")}
      />

      <View>
        <Text>BG Кошница</Text>
      </View>

      <Image
        style={globalStyles.footerWaveEmpty}
        source={require("../assets/images/footerWaveEmpty.png")}
      />
    </SafeAreaView>
  );
};

export default signUpScreen;

const styles = StyleSheet.create({});
