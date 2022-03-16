import React from "react";
import MainHeader from "./MainHeader";
import TopSection from "./TopSection";

const Header = () => {
  return (
    <div className="mx-auto max-w-[1440px]">
      <div className="hidden lg:block ">
        <TopSection />
      </div>
      <MainHeader />
    </div>
  );
};
export default Header;
