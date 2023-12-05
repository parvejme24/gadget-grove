import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[700px] max-w-[700px]">
        <img
          className="mx-auto"
          src="https://i.ibb.co/f8m0sR7/404.png"
          alt=""
        />
        <div className="flex justify-center mt-12">
          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-800 px-6 py-3 text-xl font-semibold text-white"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
