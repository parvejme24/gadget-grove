import React, { useState } from "react";
import { Link } from "react-router-dom";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  fetch("https://brand-shop-server-seven-gold.vercel.app/brands")
    .then((res) => res.json())
    .then((data) => setBrands(data));
  return (
    <div className="py-10 container mx-auto w-full overflow-hidden">
      <h2 className="text-4xl text-center font-bold text-blue-600 dark:text-blue-600">
        Popular Brands
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 mx-4 md:mx-0">
        {brands.map((brand) => (
          <div
            className="border border-blue-900 shadow-xl bg-blue-100 dark:bg-blue-950 rounded-lg p-4"
            key={brand._id}
          >
            <img className="rounded-lg mb-2" src={brand.image} alt="" />
            <Link
              to={`products/brand/${brand.brand}`}
              className="text-2xl font-semibold uppercase"
            >
              {brand.brand}
            </Link>
          </div>
        ))}
      </div>
      <div>
        {brands.length === 0 && (
          <div className="flex justify-center items-center">
            <span className="loading loading-spinner text-primary w-8"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Brands;
