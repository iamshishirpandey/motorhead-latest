import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="mx-auto max-w-[1440px] main">
        <Header open={open} setOpen={setOpen} />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
