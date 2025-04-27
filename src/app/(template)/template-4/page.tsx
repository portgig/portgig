import {
  TemplateFourHero,
  TemplateFourAboutMe,
} from "@/src/components/export_components";
import React from "react";

const page = () => {
  return (
    <main className="bodyMargin font-montserrat">
      <TemplateFourHero />
      <TemplateFourAboutMe />
    </main>
  );
};

export default page;
