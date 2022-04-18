import { useRouter } from "next/router";
import React, { useState } from "react";
import HomeModel from "../../HomeModel/HomeModel";
import SubmitNotification from "../../HomeModel/SubmitNotification";
import MainHeader from "./MainHeader";
import TopSection from "./TopSection";

type Props = {
  open: boolean;
  setOpen: any;
};
const Header = (props: Props) => {
  const { open, setOpen } = props;
  const router = useRouter();
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="mx-auto max-w-[1440px] ">
        <div className="hidden lg:block ">
          <TopSection />
        </div>
        <MainHeader />
      </div>
      {router.pathname === "/" && (
        <HomeModel open={open} setOpen={setOpen} setShow={setShow} />
      )}
      {show && <SubmitNotification show={show} setShow={setShow} />}
    </>
  );
};
export default Header;
