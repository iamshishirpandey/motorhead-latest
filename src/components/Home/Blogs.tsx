import React, { useState } from "react";
import BlogCard from "./BlogCard";
import ImgModel from "../common/ImgModel";

type Props = {};

const Blogs = (props: Props) => {
  const images = [
    "event1.jpg",
    "event3.jpg",
    "event4.jpg",
    "event5.jpg",
    "event6.jpg",
  ];
  const [show, setShow] = useState(false);
  const [showImg, setImgShow] = useState("");

  const [ind, setInd] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="pb-10 sm:pb-20 px-5  lg:px-10  xl:px-28">
        <div className="sm:text-center text-4xl font-bold py-16 uppercase">
          News & Events
        </div>

        <div className="md:col-span-2 sm:p-5 lg:p-10 bg-white rounded space-y-5 lg:space-y-10">
          <div className="space-y-2">
            <h1 className=" text-2xl text-red-700">
              Authorized Service Provider
            </h1>
            <p className="text-lg text-gray-500">
              Authorized Service Provider Opening in Chahabil on Poush 15, 2078.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-0">
            {images.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={item}
                className={`${
                  show && ind === index ? "sm:p-0" : "sm:p-5"
                }   w-full h-auto ease-in-out duration-300 bg-cover top-0`}
                onMouseOver={() => {
                  setShow(true);
                  setInd(index);
                }}
                onMouseLeave={() => setShow(false)}
                onClick={() => {
                  setOpen(true);
                  setImgShow(item);
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <ImgModel open={open} setOpen={setOpen} showImg={showImg} />
    </>
  );
};

export default Blogs;
