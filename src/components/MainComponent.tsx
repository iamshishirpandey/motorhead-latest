import React, { useEffect, useRef, useState } from "react";
import Blogs from "./Blogs";
import FullCarousel from "./Home/FullCarousel";
import OurProduct from "./Home/OurProduct";
import HomeModel from "./HomeModel";

type Props = {};

const MainComponent = (props: Props) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <FullCarousel />
      <OurProduct />
      <Blogs />
      {/* <HomeModel open={open} setOpen={setOpen} /> */}
    </>
  );
};

export default MainComponent;
