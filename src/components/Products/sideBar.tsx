import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { navigation } from "../common/Header/navigation";

type Props = {
  setFilter?: React.Dispatch<React.SetStateAction<string>>;
};

const SideBar = (props: Props) => {
  const [newId, setNewId] = useState();

  const { setFilter } = props;

  return (
    <div className="bg-white">
      <div className="relative p-5 py-5 border-t border-gray-100 space-y-8">
        <span className="w-0.5 h-4 bg-red-700 rounded-b-full absolute top-0 left-5"></span>
        <h1 className="text-xl font-bold uppercase">Search</h1>
        <form className="bg-gray-200  flex justify-center items-center border px-3 rounded">
          {setFilter ? (
            <input
              type="text"
              className="outline-none w-full p-2 bg-gray-200"
              placeholder="Search"
              onChange={(e) => setFilter(e.target.value)}
            />
          ) : (
            <input
              type="text"
              className="outline-none w-full p-2 bg-gray-200"
              placeholder="Search"
            />
          )}

          <button type="submit">
            <BiSearch className="w-5 h-5" />
          </button>
        </form>
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
