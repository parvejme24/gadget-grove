import React from "react";

function Banner() {
  return (
    <section className="bg-[url('https://i.ibb.co/6nW0kwv/Asset-1.png')] bg-no-repeat bg-center bg-cover max-h-[600px] h-[600px] -mt-24 pt-48 py-20">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-center">
          Welcome to
          <br />
          Gadget Grove
        </h1>
        <p className="text-white text-xl sm:text-2xl md:text-3xl text-center max-w-lg mb-8">
          Discover the latest tech innovations and electronics at your
          fingertips.
        </p>
        <a
          href="#"
          className="bg-white text-blue-900 hover:bg-blue-200 py-3 px-8 sm:py-4 sm:px-10 rounded-full text-lg font-semibold transition duration-300 ease-in-out"
        >
          Explore Now
        </a>
      </div>
    </section>
  );
}

export default Banner;
