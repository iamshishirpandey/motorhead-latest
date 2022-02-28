import React from "react";
import Swipers from "./Swiper";

type Props = {};

const ProductDetails = (props: Props) => {
  return (
    <div className="bg-gray-100 lg:p-10 xl:p-28">
      <div className="bg-white p-5 lg:p-10 rounded grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div>
          <Swipers />
        </div>
        <div className="py-5 space-y-8">
          <h1 className="text-4xl font-light ">AGV K-3 – Matt Black</h1>
          <p className="text-xl">$157.00</p>
          <p className="text-sm text-gray-700">
            The interior pads are made from Dri-Lex and microfibre with a
            sanitising treatment
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3  gap-3">
            <span className="text-lg">Model:</span>
            <span className="md:col-span-2 text-gray-700 font-light">
              {" "}
              TEKKEN 250
            </span>
            <span className="text-lg">Displacement :</span>
            <span className="md:col-span-2 text-gray-700 font-light">
              {" "}
              250cc with inner balancer
            </span>
            <span className="text-lg">L*W*H／mm :</span>
            <span className="md:col-span-2 text-gray-700 font-light">
              2145*850*1175
            </span>
            <span className="text-lg">TAG :</span>
            <span className="md:col-span-2 text-gray-700 font-light">
              {" "}
              AGV, Full-face
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
