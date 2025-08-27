import { colors } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import React from "react";
import { Pressable, StyleSheet, Text, TextProps, TextStyle } from "react-native";

interface TypoProps {
  size?: number;
  color?: string;
  fontWeight?: TextStyle["fontWeight"];
  children: any | null;
  style?: TextStyle;
  textProps?: TextProps;
  onPress?: () => void;
};

const Typo = ({
  size,
  color = colors.text,
  fontWeight = "400",
  children,
  style,
  textProps = {},
  onPress,
}: TypoProps) => {
  const textStyle = {
    fontSize: size ? verticalScale(size) : verticalScale(18),
    color,
    fontWeight,
  };

  if (onPress) {
    return (
      <Pressable onPress={onPress}>
        <Text style={[textStyle, style]} {...textProps}>
          {children}
        </Text>
      </Pressable>
    );
  }

  return (
    <Text style={[textStyle, style]} {...textProps}>
      {children}
    </Text>
  );
};

export default Typo;

const styles = StyleSheet.create({});
