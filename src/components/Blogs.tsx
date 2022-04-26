import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdOutlineWatchLater } from "react-icons/md";
import SideBar from "../components/Products/sideBar";
import ImgModel from "./common/ImgModel";

const Blogs = (props: any) => {
  const images = [
    {
      title: "Tuladhar, won Rs 1 lakh",
      name: "Suvendu Ratna Tuladhar, who bought a motorhead brand bike, has won Rs one lakh in cash.",
      image: "/event/event6.jpeg",
      link: "https://arthikawaj.com/motorhead-19/",
      time: "April 25,2022",
    },
    {
      title: "Tuladhar got one lakh",
      name: "Kathmandu. The official distributor of Motorhead, SLR Techno & Trade Pvt. During a program in Kathmandu,...",
      image: "/event/event7.jpeg",
      link: "https://www.bikashnews.com/2022/04/25/324608.html",
      time: "April 25,2022",
    },
    {
      title: "Tuladhar, won Rs 1 lakh",
      name: "Kathmandu. Suvendu Ratna Tuladhar, who bought a motorhead brand bike, has won Rs one lakh in cash.",
      image: "/event/event9.jpeg",
      link: "https://purbelinews.com/business/504639",
      time: "April 25,2022",
    },
    {
      title: "Tuladhar got one lakh rupees in cash",
      name: "The company has announced the names of three lucky winners who will receive cash prizes through lottery...",
      image: "/event/event8.jpeg",
      link: "https://corporatekhabar.com/motorhead-4/",
      time: "April 25,2022",
    },
    {
      title: "Festival of Happiness",
      name: "SLR Techno & Ted Pvt. Ltd., the official distributor of Motorhead brand for Nepal, has concluded its lucky... ",
      image: "/event/event10.jpeg",
      link: "https://nepalsamaya.com/market/2022-04-25-213757",
      time: "April 25,2022",
    },
    {
      title: "Scratch and Catch ",
      name: "Motorhead brings 'Scratch and Catch the Cash Offer', up to one lakh discount on bike purchase",
      image: "/event/event1.webp",
      link: "https://www.lokpath.com/story/515468",
      time: "April 11,2022",
    },
    {
      title: "New Year offer",
      name: "SLR Techno & Trade, the official distributor of Motorhead, a well-known brand in the adventure segment for Nepal.",
      image: "/event/event3.jpeg",
      link: "https://nepalkhabar.com/economy/125128-2022-3-29-20-12-3",
      time: "April 12,2022",
    },
    {
      title: "Won New Year offer",
      name: "New Year offer of Motorhead Motorcycle, up to 200,000 can be won",
      image: "/event/event3.jpeg",
      link: "https://www.meroauto.com/news/motorhead-2079-new-year-offer/",
      time: "April 6,2022",
    },
    {
      title: "New Year Scratch",
      name: "On the occasion of New Year, Motorhead brought 'Scratch and Catch the Cash' offer",
      image: "/event/event1.webp",
      link: "https://www.samayapost.com/04/233345.html",
      time: "April 7,2020",
    },
    {
      title: "Special Plan Public",
      name: "Under the offer, the company will be able to get a discount of Rs 7,000  to Rs 1 lakh for all its customers",
      image: "/event/event1.webp",
      link: "https://aarthiknews.com/news/52291",
      time: "April 10,2020",
    },
    {
      title: "Up to 1 Million Discount",
      name: "Motorhead's New Offer: Up to 1 Million Discount on Bike Purchase, Lucky Lucky Will Get 2,07,900",
      image: "/event/event1.webp",
      link: "https://nepalauto.com/motorhead-bikes-to-buy-and-win-207900/",
      time: "April 10,2020",
    },
    {
      title: "Motorhead New Year Offer",
      name: "Kathmandu. SLR Techno & Trade, the official distributor of Adventure segment motorhead bikes,...",
      image: "/event/event5.jpeg",
      link: "https://www.bikashnews.com/2022/03/30/321177.html",
      time: "April 9,2020",
    },
  ];
  const [show, setShow] = useState(false);
  const [ind, setInd] = useState(0);
  const [showImg, setImgShow] = useState("");

  const [open, setOpen] = useState(false);
  console.log("Test");
  return (
    <>
      <div className="lg:p-10 bg-gray-100 grid md:grid-cols-3 gap-5">
        <div className="md:col-span-2 sm:p-5 lg:p-10 bg-white rounded space-y-5 lg:space-y-10">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5">
            {images.map((item, index) => (
              <a
                key={index}
                className="space-y-2 shadow px-5 py-7 overflow-hidden"
                href={item.link}
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="overflow-hidden">
                  <div
                    style={{
                      backgroundImage: `url(${item.image})`,
                      clipPath: "polygon(0 1%, 100% 0, 100% 100%, 0 79%)",
                    }}
                    className={`${
                      show && ind === index ? "rotate-0" : ""
                    }   w-full h-56  bg-cover`}
                  ></div>
                </div>
                <div className="flex justify-center">
                  <div className="-mt-24 bg-white z-10 p-5 w-3/4 space-y-4">
                    <div className="font-bold text-xl">{item.title}</div>
                    <div className="flex space-x-2 items-center text-sm">
                      <MdOutlineWatchLater className="text-red-500 w-4 h-4" />
                      <span className="mt-0.5"> April 24,2020</span>
                    </div>
                    <p className="text-sm font-light">{item.name}</p>
                    <button className="flex shadow  items-center hover:bg-red-500 text-black hover:text-white">
                      <div
                        style={{
                          clipPath: "polygon(0 1%, 68% 0, 100% 100%, 0 100%)",
                        }}
                        className="bg-red-500 py-2.5 px-4 pr-6 "
                      >
                        <HiOutlineArrowNarrowRight className="w-5 h-5 text-white" />
                      </div>
                      <span className="uppercase px-4">Read More</span>
                    </button>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <SideBar />
        </div>
      </div>
      <ImgModel open={open} setOpen={setOpen} showImg={showImg} />
    </>
  );
};

export default Blogs;
