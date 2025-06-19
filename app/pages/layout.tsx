import React from "react";
import Navbar from "app/ui/nav-bar";
import Footer from "../components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="flex-grow md:overflow-y-auto">
        {children}
        <Footer/>
        </div>
    </div>
  );
}
