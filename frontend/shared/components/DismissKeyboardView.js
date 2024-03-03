import { TouchableWithoutFeedback, Keyboard } from "react-native";
import React from "react";

const DismissKeyboardView = (props) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {props.children}
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboardView;
