import React from "react";
import "animate.css";
import Contact from "./Contact";
import About from "./About";
import QuickLinks from "./QuickLinks";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div
      className=" bg-cover bg-no-repeat transition duration-150 ease-in-out"
      style={{ backgroundImage: `url("bike1.jpeg")` }}
    >
      <div className="px-5 xl:px-28 py-16 bg-black opacity-80 text-white">
        <div className="grid md:grid-cols-3 gap-10">
          <Contact />
          <About />
          <QuickLinks />
        </div>
        <div className="mt-20 space-y-4 flex flex-col items-center justify-center">
          <img
            src="payment-home1.png"
            alt="payment-home1"
            className="w-96 h-auto"
          />
          <div className="text-center text-sm ">
            Copyright © Motor Vehikle by{" "}
            <a href="#" className="font-semibold">
              Prabidhi Lab
            </a>
            . All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
