import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/common/Header/Header";
//@ts-ignore
import MessengerCustomerChat from "react-messenger-customer-chat";
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
        <div className="flex flex-col space-y-2 fixed bottom-6 right-2">
          {process.browser && (
            <MessengerCustomerChat
              pageId="103119638352407"
              appId="589517442533004"
              htmlRef={window.location.pathname}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default MyApp;
