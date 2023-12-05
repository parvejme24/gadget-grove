import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";

const BrandDetails = () => {
  let brand = useLoaderData();
  console.log(brand);

  return (
    <div>
      <div className="container mx-auto">
        <div className="mt-10">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="w-full h-[200px] max-h-[200px] md:h-[600px] md:max-h-[600px]"
                src="https://gloos3.s3.ap-southeast-1.amazonaws.com/category/samsung/xcover.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-[200px] max-h-[200px] md:h-[600px] md:max-h-[600px]"
                src="https://i.ytimg.com/vi/ZZyJFbWK2Y4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCH8SE_nXYQioSDbG924Fbe5dlBdQ"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-[200px] max-h-[200px] md:h-[600px] md:max-h-[600px]"
                src="https://i0.wp.com/corecart.pk/wp-content/uploads/2022/09/Weekly-Deals-1.png?resize=1920%2C770&ssl=1"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-[200px] max-h-[200px] md:h-[600px] md:max-h-[600px]"
                src="https://pbs.twimg.com/media/FEbI_rrVkAAWZ3g.jpg:large"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* products  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10 container mx-auto shadow-xl">
        {brand?.map((product) => (
          <div className="bg-blue-100 dark:bg-blue-950 p-6 rounded-sm">
            <img className="w-full max-h-[300px]" src={product.image} alt="" />
            <h2 className="text-3xl font-bold text-center my-4">
              {product.product_name}
            </h2>
            <p className="flex justify-between items-center">
              <span className="capitalize">
                <span className="font-semibold">Brand:</span> {product.brand}
              </span>
              <span>
                <span className="font-semibold">Type:</span> {product.type}
              </span>
            </p>
            <p className="text-xl font-semibold text-blue-600">
              <span className="text-black dark:text-white">Price:</span>{" "}
              {product.price} TK
            </p>
            <p className="flex gap-2 items-center">
              <span className="font-semibold">Rating:</span>
              <Rating
                style={{ maxWidth: 130 }}
                value={product.rating}
                readOnly
              />
            </p>
            <div className="mt-4 space-x-6">
              <Link
                to={`/products/${product._id}`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 font-semibold"
              >
                Details
              </Link>
              <Link
                to={`/updateProductDetails/${product._id}`}
                className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 font-semibold"
              >
                Update
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div>
        {brand.length === 0 && (
          <div className="py-24 flex justify-center items-center text text-blue-600 text-2xl font-semibold">
            No Product Available
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandDetails;
