import React from "react";
import {
  HeroSection,
  Banner,
  AboutSection,
  HowToSection,
  CommunitySection,
} from "@/src/components/export_components";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <Banner label="Sign up/Log in"/>
      <AboutSection />
      <HowToSection />
      <Banner label="Get started" />
      <CommunitySection />
	  
    </main>
  );
};

export default Home;
