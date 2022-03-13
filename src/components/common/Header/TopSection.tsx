import React, { useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import { FaFacebook, FaPhoneSquareAlt, FaYoutube } from "react-icons/fa";
import Modal from "../loginAndRegister/Modal";

const TopSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-gray-50 p-4 md:px-10 xl:px-32 text-gray-500 text-sm flex justify-between items-center">
        <div className="flex space-x-5 items-center">
          <div className="flex space-x-2 items-center">
            <FaPhoneSquareAlt className="w-5 h-5 text-red-500" />
            <a href="tel:+97701-5542934">Telephone: (+977) 01-5542934</a>
          </div>
        </div>
        <div className="flex space-x-5 items-center">
          <a href="https://www.facebook.com/motorheadnepal">
            <FaFacebook className="w-5 h-5 text-red-500" />
          </a>
          <a href="https://www.youtube.com/channel/UC21ew2fvgfvLURYWHsfwAaw">
            <FaYoutube className="w-6 h-6 text-red-500" />
          </a>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} />
    </>
  );
};

export default TopSection;
