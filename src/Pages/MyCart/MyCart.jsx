import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    fetch("https://brand-shop-server-seven-gold.vercel.app/cart")
      .then((res) => res.json())
      .then((data) => setCartItems(data));
  }, []);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://brand-shop-server-seven-gold.vercel.app/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Product has been deleted.",
                "success"
              );
              const remaining = cartItems.filter((item) => item._id !== _id);
              setCartItems(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto py-10 min-h-screen">
      <div className="mx-4 md:mx-0">
        {cartItems?.map((item) => (
          <div
            key={item._id}
            className="relative bg-blue-100 dark:bg-blue-950 p-4 rounded-lg mb-4 grid grid-cols-3 gap-4"
          >
            <img className="w-24" src={item.image} alt="" />
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{item.product_name}</h2>
                <p>Price: {item.price}</p>
                <p className="capitalize">Brand: {item.brand}</p>
              </div>
              <button
                onClick={() => handleDelete(item._id)}
                className="text-3xl text-red-600"
              >
                <span className="absolute right-4 top-[40%]">
                  <FaTrashAlt />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div>
        {cartItems.length === 0 && (
          <div className="text-blue-600 text-2xl font-semibold text-center min-h-screen flex justify-center items-center">
            No Product Available
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCart;
