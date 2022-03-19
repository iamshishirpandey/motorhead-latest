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
          <a
            href="https://www.google.com/maps/place/Motorhead+Bikes+Nepal+SLR+Techno+and+Trade+Pvt.+Ltd./@27.6781398,85.3003249,17z/data=!3m1!4b1!4m5!3m4!1s0x39eb1998695213ed:0x66c8c83b36688fa0!8m2!3d27.6781381!4d85.3026017"
            rel="noopener noreferrer"
            target="_blank"
          >
            Kalanga Complex, Dhobighat, Lalitpur
          </a>
        </li>
        <li className="flex space-x-3 items-center">
          <MdPhoneIphone className="w-8 h-8 text-red-700" />
          <a href="tel:01-5542934">PHONE: ( +977 ) 01-5542934</a>
        </li>
        <li className="flex space-x-3 items-center">
          <MdMailOutline className="w-8 h-8 text-red-700" />
          <span>
            Email:{" "}
            <a
              href="mailto:info@motorheadnepal.com.np"
              className="hover:text-red-700"
            >
              info@motorheadnepal.com.np
            </a>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
