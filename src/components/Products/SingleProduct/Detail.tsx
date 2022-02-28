import React, { useState } from "react";
import {
  CreditCardIcon,
  OfficeBuildingIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/solid";

type Props = {};

const Details = (props: Props) => {
  const [show, setShow] = useState(1);
  const tabs = [
    {
      id: 1,
      name: "Description",
      href: "#",
      current: true,
      details: [
        "Model: TEKKEN 250",
        "Displacement: 250cc with inner balancer",
        "LWHmm: 2145*850*1175",
        "WheelBase/mm: 1390",
        "SeatHeight: 820",
        "Sprocket: Fr:520-13T; Re:520-41T",
        "NetWeightGrossWeight: 133KG/151KG",
      ],
    },
    {
      id: 2,
      name: "Frame Suspension",
      current: false,
      details: [
        "Front suspension: Inverted front shocks",
        "Rear suspension: center shock+oil damp",
      ],
    },
    {
      id: 3,
      name: "Type & Brake",
      current: false,
      details: [
        "Tyre Size (Front): 110/90-17",
        "Tyre Size (Rear): 130/80-17",
        "Brake Type: Front&rear hydraulic disc brakes",
      ],
    },
    {
      id: 4,
      name: "Electricals",
      current: false,
      details: [
        "Speedmeter: Digital speedometer",
        "Starting Method: Electric start",
      ],
    },
    {
      id: 5,
      name: "Engine",
      current: false,
      details: [
        "Engine: Loncin RE250",
        "Engine Type: Electric start,6gears,air cool,12V/12pole",
        "Configuration: Carburetor PZ30",
        "Fuel Tank: 14 L",
        "Bore*stroke/mm: 65.5×66.2mm",
        "Max Power/km/r/min: 19 H.p/8000MP",
        "Max Torque/N.m/r/min: 20N.m/ 6500 rpm",
        "Top Speed: 120km/h",
        "Ignition method: DC-CDI",
        "Lubrication method: Pressure and Splash",
        "Muffler: CRF Alloy Muffler",
      ],
    },
    {
      id: 6,
      name: "Transmission",
      current: false,
      details: [
        "No of Gears: 6 Gears, manual clutch",
        "Gearshift method: International",
        "Min.Fuel Consumption: 2.1L/100KM",
        "Clutch method: International",
        "Compression Ratio: 9.2:1",
        "Special configuration: Headlight,LED signal/taillights",

        "* as per company standard; ** Specifications are subject to change",
      ],
    },
  ];

  return (
    <div className=" border border-gary-200 lg:border-none lg:p-10 xl:px-28">
      <div className="bg-white grid sm:grid-cols-4 gap-5 sm::gap-10 rounded overflow-hidden">
        <ul className="w-full border-r-2">
          {tabs.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => setShow(item.id)}
                className="p-5 sm:px-8 hover:text-red-700 text-lg font-medium border-b border-gray-200 w-full text-left"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        <div className="p-5 sm:p-10 sm:col-span-3 space-y-10">
          {tabs.map((item, index) => (
            <div key={index}>
              {item.id === show && (
                <div key={index} className=" space-y-5 sm:space-y-10">
                  <h1 className="px-5 border-l-2 border-red-700 text-2xl font-medium">
                    {item.name}
                  </h1>
                  <div className="text-sm text-gray-500 space-y-5">
                    {item.details.map((detail, index) => (
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
