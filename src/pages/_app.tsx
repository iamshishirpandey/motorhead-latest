import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto max-w-[1440px]">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
