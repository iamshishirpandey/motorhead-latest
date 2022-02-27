import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [show, setShow] = useState(1);
  const navigation = [
    { id: 1, name: "Home", href: "/", current: true },
    { id: 2, name: "About", href: "/about", current: false },
    { id: 3, name: "Our Product", href: "/products", current: false },
    { id: 4, name: "Dealer Network", href: "/dealer-network", current: false },
    { id: 5, name: "News & Event", href: "/blog", current: false },
    // { name: "Customer Review", href: "/blog", current: false },
    // { name: "Gallery", href: "/about", current: false },
    { id: 6, name: "Contact US", href: "/contact", current: false },
  ];
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center space-y-5 lg:space-y-0 lg:space-x-5 xl:space-x-10">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href}>
            <a
              onClick={() => setShow(item.id)}
              className="inline-flex  items-center font-semibold capitalize text-sm text-white"
              aria-current={item.current ? "page" : undefined}
            >
              <span
                className={classNames(
                  item.id === show
                    ? "w-2.5 h-0.5 bg-red-500 absolute -ml-3"
                    : "hidden"
                )}
              ></span>

              {item.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;
