import React from "react";
import MainHeader from "./MainHeader";
import TopSection from "./TopSection";

const Header = () => {
  return (
    <>
      <div className="hidden lg:block">
        <TopSection />
      </div>
      <MainHeader />
    </>
  );
};
export default Header;
