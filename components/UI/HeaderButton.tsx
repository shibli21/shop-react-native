import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Platform, StyleSheet } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import colors from "../../constants/colors";

interface Props {}

const CustomHeaderButton = (props: Props) => {
  return (
    <HeaderButton
      title=""
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? "white" : colors.primary}
    />
  );
};

export default CustomHeaderButton;

const styles = StyleSheet.create({});
