import React, { useRef, useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomLeftArrow, CustomRightArrow } from "../../../CarouselButton";

type Props = {
  img: string[];
};

const responsive = {
  xxxs: {
    breakpoint: {
      max: 3000,
      min: 0,
    },
    items: 1,
  },
};

const Swipers = (props: Props) => {
  const { img } = props;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  console.log(img);
  return (
    <div className="bg-gray-100">
      <div className="">
        <Carousel
          responsive={responsive}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          className="w-full"
          infinite={true}
        >
          {img.map((item, index) => {
            return (
              <div key={index}>
                <img
                  src={item}
                  alt={item}
                  className="object-fill w-full h-auto"
                />
              </div>
            );
          })}
        </Carousel>
      </div>

      <Swiper
        onSwiper={() => setThumbsSwiper}
        // loop={true}
        spaceBetween={5}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {img.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt={item} className="w-full h-auto bg-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swipers;
