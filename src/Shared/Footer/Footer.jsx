import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-white bg-[#0d142d] dark:bg-transparent border-t-2 border-[#0d152f] py-8">
      <div className="container mx-auto text-center">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img
            className="w-16 md:w-24"
            src="https://i.ibb.co/2WxT285/logo-2.png"
            alt=""
          />
        </Link>
        <div className="text-2xl font-bold mb-4 lg:mb-0">Gadget Grove</div>
        <div className="flex justify-center space-x-4">
          <Link className="hover:text-blue-500">Home</Link>
          <Link className="hover:text-blue-500">About</Link>
          <Link className="hover:text-blue-500">All Products</Link>
          <Link className="hover:text-blue-500">FAQs</Link>
        </div>
      </div>
      <div className="container mx-auto text-center mt-4">
        <p>&copy; 2023 Gadget Grove. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
