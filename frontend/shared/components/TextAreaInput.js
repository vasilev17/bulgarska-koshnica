import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { COLORS, FONT, FONTSIZES } from "../constants";
import CustomText from "./CustomText";
import PropTypes from "prop-types";

const TextAreaInput = (props) => {
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [businessDescription, setBusinessDescription] = useState("");

  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        multiline
        placeholder={
          props.showBigPlaceholder ? "" : "Споделете впечатленията си"
        }
        maxLength={props.maxLength}
        onChangeText={(text) => setBusinessDescription(text)}
        onFocus={() => setShowPlaceholder(false)}
        onBlur={() => businessDescription === "" && setShowPlaceholder(true)}
        selectionColor={COLORS.primary}
        style={[styles.input]}
      />

      {showPlaceholder && props.showBigPlaceholder && (
        <CustomText style={styles.placeholder}>{props.placeholder}</CustomText>
      )}
    </View>
  );
};

TextAreaInput.propTypes = {
  showBigPlaceholder: PropTypes.bool.isRequired,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number.isRequired,
  style: Text.propTypes.style,
};

TextAreaInput.defaultProps = {
  showBigPlaceholder: true,
};

export default TextAreaInput;

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
