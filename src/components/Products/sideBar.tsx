import React from "react";
import { BiSearch } from "react-icons/bi";

type Props = {};
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Our Product", href: "/products", current: false },
  { name: "Dealer Network", href: "/dealer-network", current: false },
  { name: "News & Event", href: "/blog", current: false },
  { name: "Contact US", href: "/contact", current: false },
];

const SideBar = (props: Props) => {
  return (
    <div className="bg-white">
      <div className="relative p-5 py-5 border-t border-gray-100 space-y-8">
        <span className="w-0.5 h-4 bg-red-700 rounded-b-full absolute top-0 left-5"></span>
        <h1 className="text-xl font-bold uppercase">Search</h1>
        <div className="bg-gray-200  flex justify-center items-center border px-3 rounded">
          <input
            type="text"
            className="outline-none w-full p-2 bg-gray-200"
            placeholder="Search"
          />
          <BiSearch className="w-5 h-5" />
        </div>
      </div>
      <div className="relative p-5 py-5 border-t border-gray-100 space-y-8">
        <span className="w-0.5 h-4 bg-red-700 rounded-b-full absolute top-0 left-5"></span>
        <h1 className="text-xl font-bold uppercase">Quick Links</h1>
        <ul className="grid grid-cols-1 gap-5">
          {navigation.map((item, index) => (
            <li
              key={index}
              className="duration-500 hover:pl-4 hover:text-red-700"
            >
              <a href={item.href} className="flex items-center space-x-2">
                <span className="w-2 h-0.5 bg-red-700"></span>
                <span className="capitalize">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
