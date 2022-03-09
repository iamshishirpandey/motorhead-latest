import React, { useRef, useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

type Props = {
  img: string[];
};

const Swipers = (props: Props) => {
  const { img } = props;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  console.log(img);

  return (
    <div className="bg-gray-100">
      <Swiper
        // loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {img.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt={item} className="object-fill w-full h-96" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={() => setThumbsSwiper}
        // loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {img.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt={item} className="w-full h-20 bg-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swipers;
