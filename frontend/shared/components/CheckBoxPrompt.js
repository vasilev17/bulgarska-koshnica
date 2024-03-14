import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomText from "./CustomText";
import { globalStyles } from "../globalStyles";
import { COLORS, FONTSIZES } from "../constants";
import Checkbox from "react-native-bouncy-checkbox";
import PropTypes, { oneOfType } from "prop-types";

const CheckBoxPrompt = (props) => {
  return (
    <View style={[styles.checkBoxPromptContainer, props.style]}>
      <Checkbox
        size={25}
        fillColor={COLORS.primary}
        unfillColor={COLORS.lightGray}
        iconStyle={{ borderRadius: 10 }}
        innerIconStyle={{ borderWidth: 0 }}
        onPress={(isChecked) => {}}
      />
      <View style={[styles.checkBoxPromptTextWrapper, { width: props.width }]}>
        <CustomText style={styles.checkBoxPromptText}>
          Запознах се с{" "}
        </CustomText>
        <TouchableOpacity onPress={props.termsAndConditionsOnPress}>
          <CustomText
            style={[
              globalStyles.semiBoldText,
              globalStyles.underlinedText,
              styles.checkBoxPromptText,
            ]}
          >
            Общите условия
          </CustomText>
        </TouchableOpacity>
        <CustomText style={styles.checkBoxPromptText}> и </CustomText>
        <CustomText style={styles.checkBoxPromptText}>правата по </CustomText>
        <TouchableOpacity onPress={props.privacyPolicyOnPress}>
          <CustomText
            style={[
              globalStyles.semiBoldText,
              globalStyles.underlinedText,
              styles.checkBoxPromptText,
            ]}
          >
            Защита на личните
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.privacyPolicyOnPress}>
          <CustomText
            style={[
              globalStyles.semiBoldText,
              globalStyles.underlinedText,
              styles.checkBoxPromptText,
            ]}
          >
            данни
          </CustomText>
        </TouchableOpacity>
        <CustomText style={styles.checkBoxPromptText}>
          {" "}
          и ги приемам.{" "}
        </CustomText>
      </View>
    </View>
  );
};

CheckBoxPrompt.propTypes = {
  style: Text.propTypes.style,
  width: oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  termsAndConditionsOnPress: PropTypes.func,
  privacyPolicyOnPress: PropTypes.func,
};

export default CheckBoxPrompt;

const styles = StyleSheet.create({
  checkBoxPromptContainer: {
    flexDirection: "row",
  },

  checkBoxPromptTextWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  checkBoxPromptText: {
    fontSize: FONTSIZES.size15,
  },
});
