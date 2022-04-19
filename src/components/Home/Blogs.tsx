import React, { useState } from "react";
import BlogCard from "./BlogCard";
import ImgModel from "../common/ImgModel";
import { MdOutlineWatchLater } from "react-icons/md";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

type Props = {};
const images = [
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
];

const Blogs = (props: Props) => {
  const [show, setShow] = useState(false);
  const [showImg, setImgShow] = useState("");

  const [ind, setInd] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="pb-10 sm:pb-20 px-5  lg:px-10  xl:px-28">
        <div className="sm:text-center text-3xl sm:text-4xl font-bold py-8 sm:py-16 uppercase">
          News & Events
        </div>

        <div className="md:col-span-2 sm:p-5 lg:p-10 bg-white rounded space-y-5 lg:space-y-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
        <div className="flex justify-center">
          <a
            href="blog"
            className="text-white bg-red-500 font-light flex items-center space-x-2 px-4 py-2 uppercase text-lg"
          >
            <span>View more</span>
            <HiOutlineArrowNarrowRight className="w-5 h-5 text-white mb-1" />
          </a>
        </div>
      </div>

      <ImgModel open={open} setOpen={setOpen} showImg={showImg} />
    </>
  );
};

export default Blogs;
