import React from "react";

import ProductCard from "./ProductCard";
import SideBar from "./sideBar";

type Props = {};

const OurProduct = (props: Props) => {
  return (
    <div className="grid sm:grid-cols-3 gap-5 lg:gap-10 bg-gray-100 p-5 lg:p-10 xl:p-28">
      <div className="sm:col-span-2 grid md:grid-cols-2 gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="hidden sm:block bg-white">
        <SideBar />
      </div>
    </div>
  );
};

export default OurProduct;
