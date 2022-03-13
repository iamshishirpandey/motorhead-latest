import React from "react";
import { ImLocation2 } from "react-icons/im";
import { MdPhoneIphone } from "react-icons/md";
import { FiMail } from "react-icons/fi";
type Props = {};

const Map = (props: Props) => {
  return (
    <>
      <div className="pb-0 sm:p-5 sm:pb-o  md:p-10 md:pb-0 xl:px-28">
        <div className="p-5 py-10 lg:p-20 bg-white space-y-10">
          <div className="sm:text-center text-3xl font-bold">Contact US</div>
          <div className="grid md:grid-cols-3 gap-10 items-center sm:justify-center">
            <div className="flex space-x-3 items-center">
              <ImLocation2 className="w-20 h-20 sm:w-28 sm:h-28 p-5 border-r border-gary-100" />
              <div className="flex flex-col space-y-3">
                <span className="text-xl font-semibold">Address</span>
                <span className="text-sm">
                  Kalanga Complex, Dhobighat, Lalitpur
                </span>
              </div>
            </div>
            <div className="flex space-x-3 items-center">
              <MdPhoneIphone className="w-20 h-20 sm:w-28 sm:h-28 p-5 border-r border-gary-100" />
              <div className="flex flex-col space-y-3">
                <span className="text-xl font-semibold">Phone</span>
                <span className="text-sm">(+977) 01-5542934</span>
              </div>
            </div>
            <div className="flex space-x-3 items-center">
              <FiMail className="w-20 h-20 sm:w-28 sm:h-28 p-5 border-r border-gary-100" />
              <div className="flex flex-col space-y-3">
                <span className="text-xl font-semibold">Email</span>
                <span className="text-sm">info@motorheadnepal.com.np</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width="100%"
            height="400"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Map;
