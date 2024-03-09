import { Image, View } from "react-native";
import React, { Component } from "react";
import { HeadingText } from "./HeadingText";
import { globalStyles } from "../globalStyles";
import { images } from "../constants";

export class ScreenHeader extends Component {
  render() {
    return (
      <View style={[this.props.style, { alignItems: "center" }]}>
        <Image style={globalStyles.logo} source={images.basketLogo} />
        <HeadingText style={globalStyles.title}>
          {this.props.children}
        </HeadingText>
      </View>
    );
  }
}

export default ScreenHeader;
