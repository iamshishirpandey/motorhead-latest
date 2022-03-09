import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import ProductCard from "../Products/ProductCard";
import { productObject } from "../productObject";

type Props = {};

const OurProduct = (props: Props) => {
  return (
    <>
      <div className="py-10 sm:py-20 px-5 lg:px-10  xl:px-28">
        <div className="text-center text-4xl font-bold py-16">OUR PRODUCTS</div>
        <Swiper
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
        </Swiper>
      </div>
    </>
  );
};

export default OurProduct;
