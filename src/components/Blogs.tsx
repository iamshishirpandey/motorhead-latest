import React, { useState } from "react";
import SideBar from "../components/Products/sideBar";
import ImgModel from "./common/ImgModel";

const Blogs = (props: any) => {
  const images = [
    "event1.jpg",
    "event3.jpg",
    "event4.jpg",
    "event5.jpg",
    "event6.jpg",
  ];
  const [show, setShow] = useState(false);
  const [ind, setInd] = useState(0);
  const [showImg, setImgShow] = useState("");

  const [open, setOpen] = useState(false);
  console.log("Test");
  return (
    <>
      <div className="lg:p-10 bg-gray-100 grid md:grid-cols-3 gap-5">
        <div className="md:col-span-2 sm:p-5 lg:p-10 bg-white rounded space-y-5 lg:space-y-10">
          <div className="p-5 sm:p-0 space-y-2">
            <h1 className=" text-2xl text-red-700">
              Authorized Service Provider
            </h1>
            <p className="text-lg text-gray-500">
              Authorized Service Provider Opening in Chahabil on Poush 15, 2078.
            </p>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 ">
            {images.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={item}
                className={`${
                  show && ind === index ? "p-0" : "p-5"
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
        <div className="hidden md:block">
          <SideBar />
        </div>
      </div>
      <ImgModel open={open} setOpen={setOpen} showImg={showImg} />
    </>
  );
};

export default Blogs;
