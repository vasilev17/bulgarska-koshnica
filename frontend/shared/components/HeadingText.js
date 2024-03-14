import { FONTSIZES } from "../constants";
import CustomText from "./CustomText";
import { StyleSheet, Text } from "react-native";
import PropTypes, { arrayOf, oneOfType } from "prop-types";

const HeadingText = (props) => {
  return (
    <CustomText {...props} style={[styles.headingText, props.style]}>
      {props.children}
    </CustomText>
  );
};

HeadingText.propTypes = {
  style: Text.propTypes.style,
  children: oneOfType([arrayOf(PropTypes.string), PropTypes.string]),
};

export default HeadingText;

const styles = StyleSheet.create({
  headingText: {
    fontSize: FONTSIZES.size30,
  },
});
