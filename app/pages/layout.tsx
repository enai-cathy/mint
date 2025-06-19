import React from "react";
import GoogleAnalytics from "../components/GoogleAnalytics";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      
      <div className="flex-grow md:overflow-y-auto">
        <GoogleAnalytics GA_ID="G-267Z40X0H3" />
        {children}
      
      </div>
    </div>
  );
}
