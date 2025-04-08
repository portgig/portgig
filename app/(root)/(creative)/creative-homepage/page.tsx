import {
  CreativeHeroSection,
  CreativeBanner,
  ExploreJob,
  DiscoverMore,
  ExploreCreative,
  DashboardSection,
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
    </main>
  );
};

export default CreativeHomePage;
