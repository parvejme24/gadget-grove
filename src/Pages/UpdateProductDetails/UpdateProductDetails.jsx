import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProductDetails = () => {
  const oldProduct = useLoaderData();
  const {
    _id,
    product_name,
    image,
    brand,
    type,
    price,
    rating,
    short_description,
  } = oldProduct;
  const handleUpdateProductDetails = (event) => {
    event.preventDefault();
    const form = event.target;
    const product_name = form.name.value;
    const image = form.image.value;
    const brandUpper = form.brand.value;
    const brand = brandUpper.toLowerCase();
    const type = form.type.value;
    const priceString = form.price.value;
    const price = parseFloat(priceString);
    const ratingString = form.rating.value;
    const rating = parseFloat(ratingString);
    const short_description = form.description.value;
    const updateProduct = {
      product_name,
      image,
      brand,
      type,
      price,
      rating,
      short_description,
    };
    fetch(`https://brand-shop-server-seven-gold.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Update Product Details Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="max-w-[700px] w-[700px] mx-4 my-4 md:mx-auto bg-blue-950 p-8">
        <h2 className="text-4xl mb-8 text-center font-bold text-white">
          Update Product Details
        </h2>
        <form onSubmit={handleUpdateProductDetails} className="space-y-4">
          {/* form row  */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="font-semibold text-xl text-white">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                defaultValue={product_name}
                required
                className="p-2 mt-1 text-gray-200 bg-[#1e3b8a75] border border-blue-800"
              />
            </div>
            <div className="form-control">
              <label className="font-semibold text-xl text-white">
                Image URL
              </label>
              <input
                type="text"
                name="image"
                placeholder="Photo URL"
                defaultValue={image}
                required
                className="p-2 mt-1 text-gray-200 bg-[#1e3b8a75] border border-blue-800"
              />
            </div>
          </div>

          {/* form row  */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="font-semibold text-xl text-white">Brand</label>
              <input
                type="text"
                name="brand"
                placeholder="Brand"
                defaultValue={brand}
                required
                className="p-2 mt-1 text-gray-200 bg-[#1e3b8a75] border border-blue-800"
              />
            </div>
            <div className="form-control">
              <label className="font-semibold text-xl text-white">Type</label>
              <input
                type="text"
                name="type"
                placeholder="Type"
                defaultValue={type}
                required
                className="p-2 mt-1 text-gray-200 bg-[#1e3b8a75] border border-blue-800"
              />
            </div>
          </div>

          {/* form row  */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="font-semibold text-xl text-white">Price</label>
              <input
                type="text"
                name="price"
                placeholder="Price"
                defaultValue={price}
                required
                className="p-2 mt-1 text-gray-200 bg-[#1e3b8a75] border border-blue-800"
              />
            </div>
            <div className="form-control">
              <label className="font-semibold text-xl text-white">Rating</label>
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                defaultValue={rating}
                required
                className="p-2 mt-1 text-gray-200 bg-[#1e3b8a75] border border-blue-800"
              />
            </div>
          </div>

          {/* form row  */}
          <div className="form-control">
            <label className="font-semibold text-xl text-white">
              Short Description
            </label>
            <textarea
              type="text"
              name="description"
              rows="3"
              placeholder="Short Description"
              defaultValue={short_description}
              required
              className="p-2 mt-1 text-gray-200 bg-[#1e3b8a75] border border-blue-800"
            />
          </div>
          <div className="form-control">
            <input
              type="submit"
              value="Update"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 text-xl font-semibold shadow-xl"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProductDetails;
