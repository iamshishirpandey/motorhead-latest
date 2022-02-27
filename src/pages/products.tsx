import React from "react";
import OurProduct from "../components/Products/OurProduct";

type Props = {};

const products = (props: Props) => {
  return (
    <div className="bg-gray-100">
      <div
        style={{
          backgroundImage: `url("bike2.jpeg")`,
        }}
        className="h-80 bg-cover bg-no-repeat bg-fixed"
      >
        <div className="flex justify-center items-end py-20 w-full h-full bg-black opacity-80 space-y-16 text-white text-3xl">
          Our Products
        </div>
      </div>
      <OurProduct />
    </div>
  );
};

export default products;
