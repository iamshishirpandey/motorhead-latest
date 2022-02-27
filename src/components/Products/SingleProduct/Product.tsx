import React from "react";
import Details from "./Detail";
import MobDiscloser from "./MobDiscloser";
import ProductDetails from "./ProductDetails";

type Props = {};

const Product = (props: Props) => {
  return (
    <>
      <ProductDetails />
      <div className="hidden sm:block">
        <Details />
      </div>
      <div className="block sm:hidden">
        <MobDiscloser />
      </div>
    </>
  );
};

export default Product;
