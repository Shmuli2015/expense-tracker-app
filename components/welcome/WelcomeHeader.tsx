import Typo from "@/components/ui/Typo";
import { spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import React from "react";
import {
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

interface WelcomeHeaderProps {
  onLoginPress?: () => void;
  welcomeImageSource: ImageSourcePropType;
}

const WelcomeHeader = ({
  onLoginPress,
  welcomeImageSource,
}: WelcomeHeaderProps) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.loginButton} onPress={onLoginPress}>
          <Typo fontWeight={"500"}>Sign In</Typo>
        </TouchableOpacity>

        <Animated.Image
          entering={FadeIn.duration(1000)}
          source={welcomeImageSource}
          style={styles.welcomeImage}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default WelcomeHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: spacingY._7,
  },
  welcomeImage: {
    width: "100%",
    height: verticalScale(300),
    alignSelf: "center",
    marginTop: verticalScale(100),
  },
  loginButton: {
    alignSelf: "flex-end",
    marginRight: spacingX._20,
  },
});
