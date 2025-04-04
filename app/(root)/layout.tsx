import { NavigationBar, Footer } from "@/components/export_cmponents";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
