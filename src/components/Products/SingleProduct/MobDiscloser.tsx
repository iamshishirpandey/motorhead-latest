import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

type Props = {};

const MobDiscloser = (props: Props) => {
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
    <div className="w-full">
      <div className="w-full  py-5 bg-white">
        {tabs.map((item, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left text-gray-900 border-b-2 border-gray-100 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                  <span>{item.name}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  {item.details}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default MobDiscloser;
