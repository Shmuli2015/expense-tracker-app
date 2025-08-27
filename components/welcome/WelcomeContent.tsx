import AnimatedSection from "@/components/common/AnimatedSection";
import Typo from "@/components/ui/Typo";
import { colors } from "@/constants/theme";
import React from "react";
import { TextStyle } from "react-native";
import { FadeInDown } from "react-native-reanimated";

interface WelcomeContentProps {
  mainTitle?: string[];
  subtitle?: string[];
  titleFontSize?: number;
  titleFontWeight?: TextStyle["fontWeight"];
  subtitleFontSize?: number;
  subtitleColor?: string;
  titleDelay?: number;
  subtitleDelay?: number;
}

const WelcomeContent = ({
  mainTitle = ["Always take control", "of your finances"],
  subtitle = [
    "Finances must be arranged to set a better",
    "lifestyle in the future",
  ],
  titleFontSize = 30,
  titleFontWeight = "800",
  subtitleFontSize = 17,
  subtitleColor = colors.textLight,
  titleDelay = 0,
  subtitleDelay = 100,
}: WelcomeContentProps) => {
  return (
    <>
      <AnimatedSection
        containerStyle={{ alignItems: "center" }}
        entering={FadeInDown.duration(1000).springify().damping(12)}
      >
        {mainTitle.map((line, index) => (
          <Typo key={index} size={titleFontSize} fontWeight={titleFontWeight}>
            {line}
          </Typo>
        ))}
      </AnimatedSection>

      <AnimatedSection
        containerStyle={{ alignItems: "center" }}
        entering={FadeInDown.duration(1000)
          .delay(subtitleDelay)
          .springify()
          .damping(12)}
      >
        {subtitle.map((line, index) => (
          <Typo key={index} size={subtitleFontSize} color={subtitleColor}>
            {line}
          </Typo>
        ))}
      </AnimatedSection>
    </>
  );
};

export default WelcomeContent;