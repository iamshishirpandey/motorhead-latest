import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

type Props = {
  bike: any;
};

const MobDiscloser = (props: Props) => {
  const { bike } = props;
  const { tabs } = bike;

  return (
    <div className="w-full">
      <div className="w-full  py-5 bg-white">
        {tabs &&
          tabs[0] &&
          //@ts-ignore
          tabs.map((item, index: React.Key | null | undefined) => (
            <Disclosure key={index}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left text-gray-900 border-b-2 border-gray-100 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                    <span>{item.name}</span>
                    <ChevronUpIcon
                      className={`${
                        !open ? "transform rotate-180" : ""
                      } w-5 h-5 text-gray-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    {item.details.map(
                      (
                        singleDetails: {} | null | undefined,
                        index: React.Key | null | undefined
                      ) => {
                        return (
                          //@ts-ignore
                          <div key={index}>{singleDetails}</div>
                        );
                      }
                    )}
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
