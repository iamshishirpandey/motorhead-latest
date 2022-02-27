import React from "react";
import Story from "../components/About/Story";
import Teams from "../components/About/Teams";

type Props = {};

const about = (props: Props) => {
  return (
    <div className="bg-gray-100">
      <div
        style={{
          backgroundImage: `url("bike2.jpeg")`,
        }}
        className="h-80 bg-cover bg-no-repeat bg-fixed"
      >
        <div className="flex justify-center items-end py-20 w-full h-full bg-black opacity-80 space-y-16 text-white text-3xl">
          About Us
        </div>
      </div>
      <Story />
      <Teams />
    </div>
  );
};

export default about;
