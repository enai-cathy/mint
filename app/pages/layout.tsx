import React from "react";
import Navbar from "app/ui/nav-bar";
import Footer from "../components/Footer";
import GoogleAnalytics from "../components/GoogleAnalytics";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="flex-grow md:overflow-y-auto">
        <GoogleAnalytics GA_ID="G-267Z40X0H3" />
        {children}
        <Footer />
      </div>
    </div>
  );
}
