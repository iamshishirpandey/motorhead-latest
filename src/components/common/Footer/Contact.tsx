import React from "react";
import { MdLocationOn, MdMailOutline, MdPhoneIphone } from "react-icons/md";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="space-y-10">
      <div className="text-xl font-medium">CONTACT INFO</div>
      <ul className="space-y-7">
        <li className="flex space-x-3 items-center">
          <MdLocationOn className="w-8 h-8 text-red-700" />
          <span>Kalanga Complex, Dhobighat, Lalitpur</span>
        </li>
        <li className="flex space-x-3 items-center">
          <MdPhoneIphone className="w-8 h-8 text-red-700" />
          <span>PHONE: ( +977 ) 01-5542934</span>
        </li>
        <li className="flex space-x-3 items-center">
          <MdMailOutline className="w-8 h-8 text-red-700" />
          <span>
            Email:{" "}
            <a className="hover:text-red-700">info@motorheadnepal.com.np</a>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
