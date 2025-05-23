import React from "react";
import Navbar from "app/ui/nav-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="flex-grow md:overflow-y-auto">{children}</div>
    </div>
  );
}
