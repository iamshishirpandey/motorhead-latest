import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import ProductCard from "../Products/ProductCard";
import { productObject } from "../productObject";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomLeftArrow, CustomRightArrow } from "../../CarouselButton";

const responsive = {
  three_xl: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5.5,
  },
  two_xl: {
    breakpoint: { max: 3000, min: 1400 },
    items: 5,
  },
  xl: {
    breakpoint: { max: 1400, min: 1260 },
    items: 4.5,
  },
  lg: {
    breakpoint: { max: 1260, min: 1150 },
    items: 4,
  },
  md: {
    breakpoint: { max: 1150, min: 878 },
    items: 3,
  },
  sm: {
    breakpoint: { max: 877, min: 725 },
    items: 2.5,
  },
  xsm: {
    breakpoint: { max: 725, min: 620 },
    items: 2,
  },
  xs: {
    breakpoint: { max: 620, min: 463 },
    items: 1.5,
  },
  xxs: {
    breakpoint: { max: 462, min: 425 },
    items: 1.15,
  },
  xxxs: {
    breakpoint: { max: 425, min: 0 },
    items: 1,
  },
};

type Props = {};

const OurProduct = (props: Props) => {
  return (
    <>
      <div className="py-10 sm:py-20 px-5 lg:px-10  xl:px-28">
        {/* <div> */}
        <div className="text-center text-4xl font-bold py-16 uppercase">
          OUR Products
        </div>
        {/* <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          loopFillGroupWithBlank={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {productObject.map((item, index) => (
            <SwiperSlide key={index}>
              <ProductCard bike={item} />
            </SwiperSlide>
          ))}
        </Swiper> */}

        <div className="relative w-full">
          <Carousel
            responsive={responsive}
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
            containerClass="relative"
            className="w-full"
          >
            {productObject.map((item, index) => (
              <div key={index} className="mr-1 sm:mr-5">
                <ProductCard bike={item} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default OurProduct;
