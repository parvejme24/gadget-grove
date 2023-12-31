import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "./../Shared/Navbar/Navbar";

const Layout = () => {
  return (
    <div className="bg-white text-black dark:bg-[#00071A] dark:text-white">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
