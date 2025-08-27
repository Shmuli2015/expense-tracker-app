import AnimatedSection from "@/components/common/AnimatedSection";
import Button from "@/components/ui/Button";
import Typo from "@/components/ui/Typo";
import WelcomeContent from "@/components/welcome/WelcomeContent";
import { colors, spacingX } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { FadeInDown } from "react-native-reanimated";

interface WelcomeFooterProps {
  onGetStartedPress?: () => void;
  buttonText?: string;
  buttonTextColor?: string;
  buttonTextSize?: number;
  buttonTextWeight?: string;
  mainTitle?: string[];
  subtitle?: string[];
  style?: ViewStyle;
  buttonDelay?: number;
}

const WelcomeFooter = ({
  onGetStartedPress,
  buttonText = "Get Started",
  buttonTextColor = colors.neutral900,
  buttonTextSize = 22,
  buttonTextWeight = "600",
  mainTitle,
  subtitle,
  style,
  buttonDelay = 200,
}: WelcomeFooterProps) => {
  return (
    <AnimatedSection containerStyle={StyleSheet.flatten([styles.footer, style])}>
      <WelcomeContent
        mainTitle={mainTitle}
        subtitle={subtitle}
        titleDelay={0}
        subtitleDelay={100}
      />

      <AnimatedSection
        containerStyle={styles.buttonContainer}
        entering={FadeInDown.duration(1000)
          .delay(buttonDelay)
          .springify()
          .damping(12)}
      >
        <Button onPress={onGetStartedPress}>
          <Typo 
            size={buttonTextSize} 
            color={buttonTextColor} 
            fontWeight={buttonTextWeight as any}
          >
            {buttonText}
          </Typo>
        </Button>
      </AnimatedSection>
    </AnimatedSection>
  );
};

export default WelcomeFooter;

const styles = StyleSheet.create({
  footer: {
    backgroundColor: colors.neutral900,
    alignItems: "center",
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(45),
    gap: spacingX._20,
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: -10,
    },
    elevation: 10,
    shadowRadius: 25,
    shadowOpacity: 0.15,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: spacingX._25,
  },
});