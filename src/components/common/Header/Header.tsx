import { useRouter } from "next/router";
import React, { useState } from "react";
import HomeModel from "../../HomeModel";
import MainHeader from "./MainHeader";
import TopSection from "./TopSection";

type Props = {
  open: boolean;
  setOpen: any;
};
const Header = (props: Props) => {
  const { open, setOpen } = props;
  const router = useRouter();
  console.log(router);
  return (
    <>
      <div className="mx-auto max-w-[1440px]">
        <div className="hidden lg:block ">
          <TopSection />
        </div>
        <MainHeader />
      </div>
      {router.pathname === "/" && <HomeModel open={open} setOpen={setOpen} />}
    </>
  );
};
export default Header;
