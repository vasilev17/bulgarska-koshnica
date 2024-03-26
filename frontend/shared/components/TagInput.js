import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useRef } from "react";
import { COLORS, FONT, FONTSIZES } from "../constants";
import CustomText from "./CustomText";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const TagInput = () => {
  const inputRef = useRef();

  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={() => inputRef.current.focus()}
    >
      <CustomText
        style={{
          height: 28,
          backgroundColor: COLORS.primary,
        }}
      >
        Конституционни X
      </CustomText>
      <CustomText
        style={{
          height: 28,
          backgroundColor: COLORS.primary,
        }}
      >
        мед X
      </CustomText>
      <CustomText
        style={{
          height: 28,
          backgroundColor: COLORS.primary,
        }}
      >
        пчели X
      </CustomText>
      <CustomText
        style={{
          height: 28,
          backgroundColor: COLORS.primary,
        }}
      >
        домашен X
      </CustomText>
      <CustomText
        style={{
          height: 28,
          backgroundColor: COLORS.primary,
        }}
      >
        производство X
      </CustomText>
      <CustomText
        style={{
          height: 28,
          backgroundColor: COLORS.primary,
        }}
      >
        пчелен X
      </CustomText>
      <CustomText
        style={{
          height: 28,
          backgroundColor: COLORS.primary,
        }}
      >
        кошери X
      </CustomText>
      <CustomText
        style={{
          height: 28,
          backgroundColor: COLORS.primary,
        }}
      >
        пресен X
      </CustomText>
      <CustomText
        style={{
          height: 28,
          backgroundColor: COLORS.primary,
        }}
      >
        сладък X
      </CustomText>
      <CustomText
        style={{
          height: 28,
          backgroundColor: COLORS.primary,
        }}
      >
        различни сортове X
      </CustomText>

      <TextInput
        ref={inputRef}
        maxLength={27}
        selectionColor={COLORS.primary}
        placeholder="дума,"
        style={styles.input}
      />
    </TouchableWithoutFeedback>
  );
};

export default TagInput;

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
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    gap: 7,
  },
  input: {
    fontSize: FONTSIZES.size18,
    textAlignVertical: "top",
    fontFamily: FONT.regular,
    color: COLORS.text,
    zIndex: 99,
    flexGrow: 1,
  },
});
