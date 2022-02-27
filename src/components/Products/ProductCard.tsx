import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const ProductCard = (props: Props) => {
  const [show, setShow] = useState(false);
  return (
    <Link passHref href="/singleProduct">
      <div
        className="block border border-gray-100 shadow relative overflow-hidden rounded cursor-pointer"
        onMouseOver={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <div
          className="bg-red-700 text-white absolute top-0 left-0 p-2 pb-10 pr-10"
          style={{ clipPath: "polygon(100% 0, 0% 100%, 0 0)" }}
        >
          <div className=" -rotate-45 font-bold">New</div>
        </div>
        <img src="bike2.jpeg" className="w-full h-96" alt="" />
        <div className="p-5 capitalize">
          <div className="text-xl font-light">MRP - Rs.2133000</div>
          <div className="">teken 250</div>
        </div>
        <div
          className={`${
            show ? "flex" : "hidden"
          } absolute bottom-0 left-0 right-0 p-5  justify-center bg-gray-200`}
        >
          <button className="p-3 px-5 bg-white rounded hover:bg-red-700 hover:text-white capitalize">
            view product
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
