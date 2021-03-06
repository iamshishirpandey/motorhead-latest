import React, { useState } from "react";
import {
  CreditCardIcon,
  OfficeBuildingIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/solid";

type Props = {
  bike: any;
};
const Details = (props: Props) => {
  const { bike } = props;
  const { tabs } = bike;
  const [show, setShow] = useState(1);
  console.log(tabs);
  return (
    <div className=" border border-gary-200 lg:border-none lg:px-10 pb-10 xl:px-28">
      <div className="bg-white grid sm:grid-cols-4 gap-5 sm::gap-10 rounded overflow-hidden">
        <ul className="w-full border-r-2">
          {bike.tabs &&
            bike.tabs[0] &&
            tabs.map((item: any) => (
              <li key={item.id}>
                <button
                  onClick={() => setShow(item.id)}
                  className="p-5 sm:px-8 hover:text-red-700 text-lg font-medium border-b border-gray-200 w-full text-left"
                >
                  {item.name}
                </button>
              </li>
            ))}
        </ul>
        <div className="p-5 sm:col-span-3 space-y-10">
          {bike.tabs &&
            bike.tabs[0] &&
            tabs.map((item: any) => (
              <div key={item.id}>
                {item.id === show && (
                  <div key={item.id} className="space-y-5 sm:space-y-10">
                    <h1 className="px-5 border-l-2 border-red-700 text-2xl font-medium">
                      {item.name}
                    </h1>
                    <div className="text-sm text-gray-500 space-y-5">
                      {item.details.map((detail: any, index: any) => (
                        <p key={index}>{detail}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
