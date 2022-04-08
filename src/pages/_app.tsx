import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import { useState } from "react";
import HomeModel from "../components/HomeModel";
import "swiper/css";
import "swiper/css/pagination";

function MyApp({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="mx-auto max-w-[1440px] main">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
      <HomeModel open={open} setOpen={setOpen} />
    </>
  );
}

export default MyApp;
