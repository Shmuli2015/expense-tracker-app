import { colors } from "@/constants/theme";
import { ScreenWrapperProps } from "@/types";
import { isIos } from "@/utils/common";
import React from "react";
import { Dimensions, StatusBar, StyleSheet, View } from "react-native";

const { height } = Dimensions.get("window");

const ScreenWrapper = ({ style, children }: ScreenWrapperProps) => {
  const paddingTop = isIos ? height * 0.06 : 50;
  return (
    <View
      style={[
        style,
        {
          paddingTop,
          flex: 1,
          backgroundColor: colors.neutral900,
        },
      ]}
    >
        <StatusBar barStyle="light-content" />
      {children}
    </View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({});
