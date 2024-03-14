import { TouchableWithoutFeedback, Keyboard } from "react-native";
import React from "react";
import PropTypes from "prop-types";

const DismissKeyboardView = (props) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {props.children}
    </TouchableWithoutFeedback>
  );
};

DismissKeyboardView.propTypes = {
  children: PropTypes.node,
};

export default DismissKeyboardView;
