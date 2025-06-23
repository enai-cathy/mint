import React from "react";
import GoogleAnalytics from "../components/GoogleAnalytics";
import {Toaster} from "react-hot-toast";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex-grow md:overflow-y-auto">
        <GoogleAnalytics GA_ID="G-267Z40X0H3" />
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
}
