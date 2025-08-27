import { colors, radius } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import React, { ReactNode } from "react";
import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";
import Loading from "./Loading";

interface ButtonProps {
  style?: ViewStyle;
  onPress?: () => void;
  loading?: boolean;
  children: ReactNode;
}

const Button = ({ style, onPress, loading, children }: ButtonProps) => {
  if (loading) {
    return (
      <View style={[styles.button, styles.loading, style]}>
        <Loading />
      </View>
    );
  }
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: radius._17,
    borderCurve: "continuous",
    height: verticalScale(52),
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    backgroundColor: "transparent",
  },
});
