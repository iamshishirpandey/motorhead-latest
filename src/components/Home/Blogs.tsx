import React from "react";
import BlogCard from "./BlogCard";

type Props = {};

const Blogs = (props: Props) => {
  return (
    <div className="px-5 md:px-10 xl:px-28 py-10 xl:py-20">
      <div className="text-center w-full flex flex-col justify-center items-center space-y-5">
        <h1 className="text-3xl font-bold">LASTEST BLOGS</h1>
        {/* <p className="lowercase text-sm text-gray-500  w-1/2">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpa
        </p> */}
        <BlogCard />
      </div>
    </div>
  );
};

export default Blogs;
