import React from "react";
import BlogCard from "./BlogCard";

type Props = {};

const Blogs = (props: Props) => {
  return (
    <div className="pb-10 sm:pb-20 px-5 lg:px-10  xl:px-28">
      <div className="text-center text-4xl font-bold py-16 uppercase">
        News & Events
      </div>
      <div className="text-center w-full flex flex-col justify-center items-center space-y-5">
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
