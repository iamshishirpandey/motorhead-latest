import type { NextPage } from "next";

import OurProduct from "../components/Home/OurProduct";
import Blogs from "../components/Home/Blogs";
import FullCarousel from "../components/Home/FullCarousel";

const Home: NextPage = () => {
  return (
    <div className="mx-auto max-w-[1440px] bg-white">
      <FullCarousel />
      <OurProduct />
      <Blogs />
    </div>
  );
};

export default Home;
