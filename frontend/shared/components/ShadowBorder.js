import { Dimensions, StyleSheet, View } from "react-native";
import React from "react";
import { Shadow } from "react-native-shadow-2";
import { COLORS } from "../constants";
import PropTypes from "prop-types";

const ShadowBorder = (props) => {
  const vw = Dimensions.get("window").width;
  return (
    <Shadow
      distance={5}
      startColor={"#e3e8e3"}
      endColor={COLORS.white}
      offset={props.isTopBorder ? [0, 2] : [0, -2]}
    >
      <View
        style={[
          styles.topBorder,
          {
            width: vw,
          },
        ]}
      />
    </Shadow>
  );
};

ShadowBorder.propTypes = {
  isTopBorder: PropTypes.bool.isRequired,
};

ShadowBorder.defaultProps = {
  isTopBorder: true,
};

export default ShadowBorder;

const styles = StyleSheet.create({
  topBorder: {
    backgroundColor: "#d4ded3",
    height: 2,
  },
});
