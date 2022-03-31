import Link from "next/link";
import { useState } from "react";
import { navigation } from "./navigation";

type Props = {
  setSidebarOpen: any;
  sidebarOpen: boolean;
};

const Nav = (props: Props) => {
  const { setSidebarOpen, sidebarOpen } = props;
  const [show, setShow] = useState(1);
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center space-y-5 lg:space-y-0 lg:space-x-5 xl:space-x-10">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href}>
            <a
              href={item.href}
              onClick={() => {
                setShow(item.id);
                // if (sidebarOpen) {
                //   setSidebarOpen(false);
                // }
              }}
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
