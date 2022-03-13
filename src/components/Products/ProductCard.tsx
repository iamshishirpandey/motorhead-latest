import Link from "next/link";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { BsFillEyeFill, BsPlus } from "react-icons/bs";

type Props = {
  bike: {
    name: string;
    img: string[];
    price: string;
  };
};

const ProductCard = (props: Props) => {
  const { bike } = props;
  const [show, setShow] = useState(false);
  const [showbutton, setShowbutton] = useState(false);
  return (
    <Link passHref href={`products/details/${bike.name}`}>
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
        <img
          src={bike.img[0]}
          className="w-full h-64 sm:h-72 md:h-80 bg-cover"
          alt={bike.img[0]}
        />
        {/* {show && (
          <div className="-top-5 flex items-center justify-center absolute h-full w-full animate__animated animate__fadeUp animate__delay-3s">
            <BsPlus className="w-16 h-16 text-red-500" />
          </div>
        )} */}

        <div className="p-5 capitalize">
          <div className="text-xl font-light">MRP - Rs.{bike.price}</div>
          <div className="">{bike.name}</div>
        </div>
        <div
          className={`${
            show ? "flex" : "hidden"
          } absolute bottom-0 left-0 h-24 right-0 p-5 justify-center bg-zinc-200 animate__animated animate__fadeInUp animate__faster`}
        >
          <Link passHref href={`products/details/${bike.name}`}>
            <button
              className="bg-white capitalize flex justify-center items-center h-12 pl-4 px-2 text-zinc-400 hover:bg-red-700 hover:text-white  shadow border rounded-md"
              onMouseOver={() => setShowbutton(true)}
              onMouseLeave={() => setShowbutton(false)}
            >
              <span>view</span>
              <BsFillEyeFill
                className={`${
                  showbutton ? "text-white" : "text-zinc-400"
                } w-9 h-9  p-2`}
              />
            </button>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
