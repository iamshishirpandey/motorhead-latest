import React from "react";
import Product from "../../../components/Products/SingleProduct/Product";

type Props = {};

const sinpleProduct = (props: Props) => {
  return (
    <div className="bg-gray-100">
      <div
        style={{
          backgroundImage: `url("bike2.jpeg")`,
        }}
        className="h-80 bg-cover bg-no-repeat bg-fixed"
      >
        <div className="flex justify-center items-end py-20 w-full h-full bg-black opacity-80 space-y-16 text-white text-3xl">
          Products Details
        </div>
      </div>
      <Product />
    </div>
  );
};

export default sinpleProduct;
