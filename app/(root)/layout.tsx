import { NavigationBar, Footer } from "@/components/export_cmponents";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-whit">
      <div className="">
        <NavigationBar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default layout;
