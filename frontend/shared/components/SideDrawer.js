import { StyleSheet, View } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import { Drawer } from "react-native-drawer-layout";

const SideDrawer = (props) => {
  return (
    <Drawer
      drawerStyle={{ width: "80%" }}
      open={props.open}
      onOpen={props.onOpen}
      onClose={props.onClose}
      renderDrawerContent={() => {
        return (
          <CustomText
            style={{ backgroundColor: "lightgreen", alignSelf: "center" }}
          >
            Профил
          </CustomText>
        );
      }}
    >
      {props.children}
    </Drawer>
  );
};

export default SideDrawer;

const styles = StyleSheet.create({});
