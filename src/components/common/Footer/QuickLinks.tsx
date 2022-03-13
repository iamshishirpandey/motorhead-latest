import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

type Props = {};
const navigation = [
  { id: 1, name: "Home", href: "/", current: true },
  { id: 2, name: "About", href: "/about", current: false },
  { id: 3, name: "Our Product", href: "/products", current: false },
  { id: 4, name: "Dealer Network", href: "/dealer-network", current: false },
  { id: 5, name: "News & Event", href: "/blog", current: false },
  { id: 6, name: "Contact us", href: "/contact", current: false },
];

const QuickLinks = (props: Props) => {
  return (
    <div className="space-y-10">
      <div className="text-xl font-medium">Quick Links</div>
      <ul className="grid sm:grid-cols-2 gap-5">
        {navigation.map((item, index) => (
          <li
            key={index}
            className="duration-500 hover:pl-4 hover:text-red-700"
          >
            <a href={item.href} className="flex items-center space-x-2">
              <MdKeyboardArrowRight className="w-5 h-5" />
              <span className="capitalize">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
