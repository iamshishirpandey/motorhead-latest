import type { NextPage } from "next";
import MainComponent from "../components/MainComponent";

const Home: NextPage = () => {
  return (
    <div className="mx-auto max-w-[1440px] bg-white">
      <MainComponent />
    </div>
  );
};

export default Home;
