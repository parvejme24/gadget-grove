import React from "react";
import Banner from "./Banner/Banner";
import Brands from "./Brands/Brands";
import HowItWork from "./HowItWork/HowItWork";
import Newsletter from "./Newsletter/Newsletter";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Brands></Brands>
      <HowItWork></HowItWork>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
