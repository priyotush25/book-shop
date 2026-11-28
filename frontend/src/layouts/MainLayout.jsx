import React from "react";
import { Outlet } from "react-router";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const MainLayout = () => {
  return (
    <div  className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
