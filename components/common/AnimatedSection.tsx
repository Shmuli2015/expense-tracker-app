import React, { ReactNode } from "react";
import { ViewStyle } from "react-native";
import Animated, { BaseAnimationBuilder } from "react-native-reanimated";

interface AnimatedSectionProps {
  children: ReactNode;
  entering?: BaseAnimationBuilder;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
}

const AnimatedSection = ({
  children,
  entering,
  style,
  containerStyle,
}: AnimatedSectionProps) => {
  return (
    <Animated.View entering={entering} style={[containerStyle, style]}>
      {children}
    </Animated.View>
  );
};

export default AnimatedSection;
