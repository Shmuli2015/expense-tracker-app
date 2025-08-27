import ScreenWrapper from "@/components/layout/ScreenWrapper";
import WelcomeFooter from "@/components/welcome/WelcomeFooter";
import WelcomeHeader from "@/components/welcome/WelcomeHeader";
import React from "react";

const Welcome = () => {
  const handleLoginPress = () => {
    // Handle login navigation logic here
    console.log("Login pressed");
  };

  const handleGetStartedPress = () => {
    // Handle get started navigation logic here
    console.log("Get Started pressed");
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
