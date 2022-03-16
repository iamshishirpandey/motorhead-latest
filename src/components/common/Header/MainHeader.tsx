import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaPhone, FaSearch } from "react-icons/fa";
import Nav from "./Nav";
import SideBar from "./SideBar";

const MainHeader = () => {
  const [screen, setScreen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) setScreen(true);
      else setScreen(false);
    });
  }, []);
  return (
    <nav
      style={{ zIndex: "10" }}
      className={`${
        screen
          ? "fixed top-0  w-full h-20 animate__animated animate__fadeInDown"
          : "absolute top-0 lg:top-14 h-24 lg:h-32 lg:bg-opacity-40"
      } px-5 mx-auto max-w-[1440px] left-0 right-0 lg:px-10 xl:px-28 flex justify-between items-center  space-x-0 xl:space-x-8  overflow-hidden bg-black shadow-xl`}
      aria-label="Global"
    >
      <Link passHref href={"/"}>
        <img
          className={`${
            screen ? "h-14" : "h-10 lg:h-16"
          } mainLogo text-sky-900 cursor-pointer`}
          src="/logo.png"
          alt="logo.png"
        />
      </Link>
      <div className="block lg:hidden">
        <SideBar />
      </div>
      <div className="hidden lg:flex justify-between space-x-16 items-center">
        <Nav />
      </div>
    </nav>
  );
};

export default MainHeader;
