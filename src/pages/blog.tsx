import React from "react";
import Blogs from "../components/Blogs";

type Props = {};

const blog = (props: Props) => {
  return (
    <div className="bg-gray-100">
      <div
        style={{
          backgroundImage: `url("bike2.jpeg")`,
        }}
        className="h-80 bg-cover bg-no-repeat bg-fixed"
      >
        <div className="flex justify-center items-end py-20 w-full h-full bg-black opacity-80 space-y-16 text-white text-3xl">
          News and Events
        </div>
      </div>
      <Blogs />
    </div>
  );
};
export default blog;
