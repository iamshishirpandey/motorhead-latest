import type { NextPage } from "next";
import FullCarousel from "../components/home/FullCarousel";
import OurProduct from "../components/Home/OurProduct";
import Blogs from "../components/Home/Blogs";

const Home: NextPage = () => {
  return (
    <div>
      <FullCarousel />
      <OurProduct />
      <Blogs />
    </div>
  );
};

export default Home;
