import Link from "next/link";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

type Props = {};

const BlogCard = (props: Props) => {
  return (
    <div className="bg-zinc-200 rounded-md overflow-hidden w-full">
      <div
        className="w-full flex justify-end items-end sm:items-start  sm:p-6 h-64 sm:h-auto bg-no-repeat bg-cover"
        style={{
          //   clipPath: "polygon(0 0, 22% 0, 35% 100%, 0% 100%)",
          backgroundImage: `url("bike1.jpeg")`,
        }}
      >
        <div className="sm:bg-white rounded-sm md:w-3/4 p-4">
          <div className="flex flex-col items-start md:pl-5  sm:p-5 md:py-10 space-y-5 text-sm sm:text-base">
            <div className="hover:text-red-700 font-medium text-left text-white sm:text-black text-2xl">
              MOTORHEAD Motorcycle
            </div>
            <p className="text-left text- text-gray-500 hidden sm:inline-block">
              MotorHead Motorcycle Showroom Opened in Pokhara - Magh 1,
              2076.Pokhara Showroom Opening Ceremony
            </p>
            <button className="hidden sm:flex shadow bg-zinc-200 rounded hover:bg-red-700 hover:text-white transition duration-300 ease-in   items-center space-x-2">
              <span
                className="bg-red-700 p-3"
                style={{
                  clipPath: "polygon(0 0, 77% 0, 100% 100%, 0% 100%)",
                }}
              >
                <MdArrowForwardIos className="w-5 h-5 text-white" />
              </span>
              <Link passHref href="/blog">
                <a className=" px-3 font-semibold">READ MORE</a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
