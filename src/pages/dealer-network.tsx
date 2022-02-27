import React from "react";

type Props = {};

const DealerNetwork = (props: Props) => {
  const network = [
    {
      name: "SLR Techno & Trade Pvt. Ltd.",
      address: "Dhobighat, Lalitpur",
      phone: "01-5542934",
      mobilePhone: "9851134782",
      email: "sales@motorheadnepal.com.np",
    },
    {
      name: "SLR Techno & Trade Pvt. Ltd.",
      address: "Dhobighat, Lalitpur",
      phone: "01-5542934",
      mobilePhone: "9851134782",
      email: "sales@motorheadnepal.com.np",
    },
    {
      name: "SLR Techno & Trade Pvt. Ltd.",
      address: "Dhobighat, Lalitpur",
      phone: "01-5542934",
      mobilePhone: "9851134782",
      email: "sales@motorheadnepal.com.np",
    },
    {
      name: "SLR Techno & Trade Pvt. Ltd.",
      address: "Dhobighat, Lalitpur",
      phone: "01-5542934",
      mobilePhone: "9851134782",
      email: "sales@motorheadnepal.com.np",
    },
    {
      name: "SLR Techno & Trade Pvt. Ltd.",
      address: "Dhobighat, Lalitpur",
      phone: "01-5542934",
      mobilePhone: "9851134782",
      email: "sales@motorheadnepal.com.np",
    },
    {
      name: "SLR Techno & Trade Pvt. Ltd.",
      address: "Dhobighat, Lalitpur",
      phone: "01-5542934",
      mobilePhone: "9851134782",
      email: "sales@motorheadnepal.com.np",
    },
    {
      name: "SLR Techno & Trade Pvt. Ltd.",
      address: "Dhobighat, Lalitpur",
      phone: "01-5542934",
      mobilePhone: "9851134782",
      email: "sales@motorheadnepal.com.np",
    },
    {
      name: "SLR Techno & Trade Pvt. Ltd.",
      address: "Dhobighat, Lalitpur",
      phone: "01-5542934",
      mobilePhone: "9851134782",
      email: "sales@motorheadnepal.com.np",
    },
  ];
  return (
    <div className="bg-gray-100">
      <div
        style={{
          backgroundImage: `url("bike2.jpeg")`,
        }}
        className="h-80 bg-cover bg-no-repeat bg-fixed"
      >
        <div className="flex justify-center items-end py-20 w-full h-full bg-black opacity-80 space-y-16 text-white text-3xl">
          Dealer Network
        </div>
      </div>
      <div className="p-5 py-10 sm:p-10 lg:p-28 grid md:grid-cols-2  xl:grid-cols-4 gap-5 lg:gap-10">
        {network.map((item, index) => (
          <div key={index} className="space-y-5">
            <div className="border-b py-3 font-bold text-red-700">
              {item.name}
            </div>
            <ul className="space-y-2">
              <li>{item.address}</li>
              <li className="flex space-x-1">
                <span>Phone:</span>
                <span>{item.phone}</span>
              </li>
              <li className="flex space-x-1">
                <span>Mobile:</span>
                <span>{item.mobilePhone}</span>
              </li>
              <li>
                <a href="" className="text-blue-500">
                  {item.email}
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealerNetwork;
