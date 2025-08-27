import React from "react";
import { useRouter } from "expo-router";
import ScreenWrapper from "@/components/layout/ScreenWrapper";
import WelcomeFooter from "@/components/welcome/WelcomeFooter";
import WelcomeHeader from "@/components/welcome/WelcomeHeader";

const Welcome = () => {
  const router = useRouter();
  const handleLoginPress = () => {
    // Handle login navigation logic here
    console.log("Login pressed");
    router.push("/(auth)/login");
  };

  const handleGetStartedPress = () => {
    // Handle get started navigation logic here
    console.log("Get started pressed");
    router.push("/(auth)/register");
  };

  return (
    <ScreenWrapper>
      <WelcomeHeader 
        onLoginPress={handleLoginPress}
        welcomeImageSource={require("../../assets/images/welcome.png")}
      />
      
      <WelcomeFooter 
        onGetStartedPress={handleGetStartedPress}
      />
    </ScreenWrapper>
  );
};

export default Welcome;