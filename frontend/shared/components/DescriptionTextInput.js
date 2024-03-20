import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { COLORS, FONT, FONTSIZES } from "../constants";
import CustomText from "./CustomText";

const DescriptionTextInput = (props) => {
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [businessDescription, setBusinessDescription] = useState("");

  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        multiline
        maxLength={545} //maybe 600 chars is fine
        onChangeText={(text) => setBusinessDescription(text)}
        onFocus={() => setShowPlaceholder(false)}
        onBlur={() => businessDescription === "" && setShowPlaceholder(true)}
        selectionColor={COLORS.primary}
        style={[styles.input]}
      />

      {showPlaceholder && (
        <CustomText style={styles.placeholder}>
          Описание на бизнеса (Може да го промените по-късно)
        </CustomText>
      )}
    </View>
  );
};

DescriptionTextInput.propTypes = {
  style: Text.propTypes.style,
};

export default DescriptionTextInput;

const styles = StyleSheet.create({
  container: {
    width: 355,
    height: 370,
    borderColor: COLORS.primary,
    borderWidth: 2,
    shadowColor: "black",
    backgroundColor: COLORS.white,
    elevation: 5,
    borderRadius: 10,
  },
  input: {
    width: "100%",
    height: "100%",
    fontSize: FONTSIZES.size16,
    textAlignVertical: "top",
    padding: 20,
    fontFamily: FONT.regular,
    color: COLORS.text,
    zIndex: 99,
  },
  placeholder: {
    textAlign: "center",
    fontSize: FONTSIZES.size24,
    width: 310,
    alignSelf: "center",
    top: 130,
    position: "absolute",
  },
});
