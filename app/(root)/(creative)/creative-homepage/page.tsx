import {
  CreativeHeroSection,
  CreativeBanner,
  ExploreJob,
  DiscoverMore,
  ExploreCreative,
  DashboardSection,
  Community,
} from "@/components/export_cmponents";
import React from "react";

const CreativeHomePage = () => {
  return (
    <main>
      <CreativeHeroSection />
      <CreativeBanner />
      <ExploreJob />
      <DiscoverMore />
      <ExploreCreative />
      <DashboardSection />
      <Community />
    </main>
  );
};

export default CreativeHomePage;
