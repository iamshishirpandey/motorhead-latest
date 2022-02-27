import React, { useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import Modal from "../loginAndRegister/Modal";

const TopSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-gray-50 p-4 md:px-10 xl:px-32 text-gray-500 text-sm flex justify-between items-center">
        <div className="flex space-x-5 items-center">
          <div className="flex space-x-2 items-center">
            <BiTimeFive className="w-5 h-5 text-red-500" />
            <span>24/7 Support</span>
          </div>
          <div className="flex space-x-2 items-center">
            <FaPhoneSquareAlt className="w-5 h-5 text-red-500" />
            <span>Telephone: (+977) 01-5542934</span>
          </div>
        </div>
        <div className="flex space-x-5 items-center">
          <button onClick={() => setOpen(true)}>Login / Register</button>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} />
    </>
  );
};

export default TopSection;
