import React from "react";
import {
  HeroSection,
  Banner,
  AboutSection,
  HowToSection,
  CommunitySection,
} from "@/components/export_components";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <Banner />
      <AboutSection />
      <HowToSection />
      <Banner />
      <CommunitySection />
    </main>
  );
};

export default Home;
