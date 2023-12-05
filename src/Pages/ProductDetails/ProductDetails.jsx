import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const product = useLoaderData();
  const { product_name, brand, image, price, rating, type, short_description } =
    product;
  const updateProduct = {
    product_name,
    brand,
    image,
    price,
    rating,
    type,
    short_description,
  };
  console.log("product", updateProduct);

  const handleAddToCart = () => {
    fetch("https://brand-shop-server-seven-gold.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Successfully Add To Cart",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="container mx-auto py-24 min-h-screen grid items-center">
      <div className="bg-blue-100 dark:bg-blue-950 rounded-lg p-8">
        <div className="md:grid grid-cols-2 gap-5">
          <img className="w-full" src={image} alt="" />
          <div>
            <h2 className="text-2xl font-bold mb-2 mt-4 md:mt-0">
              {product_name}
            </h2>
            <h2 className="capitalize text-xl">
              <span className="font-semibold">Brand:</span> {brand}
            </h2>
            <div>
              <p className="dark:text-blue-400">
                <span className="font-semibold dark:text-white">Price:</span>{" "}
                {price} TK
              </p>
              <p>
                <span className="font-semibold">Type:</span> {type}
              </p>
            </div>
            <p className="flex gap-2 items-center">
              <span className="font-semibold">Rating:</span>{" "}
              <Rating style={{ maxWidth: 130 }} value={rating} readOnly />
            </p>
            <p className="dark:text-gray-200 py-1">
              <span className="font-semibold dark:text-white">
                Description:
              </span>{" "}
              {short_description}
            </p>
            <button
              onClick={handleAddToCart}
              className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 font-bold mt-3 hover:rounded-full"
            >
              <FaCartPlus /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
