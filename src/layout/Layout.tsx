import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./HomeNav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="relative">
        <Navbar />
        <main className="overflow-y-auto overflow-x-hidden">
          <div className="mx-auto max-w-screen-2xl">{children}</div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
