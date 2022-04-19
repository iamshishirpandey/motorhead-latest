import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import { imageTransparent } from "../imageTransparent";
type Props = {
  selected: string;
};

const BikeSwiper = (props: Props) => {
  const { selected } = props;
  const [swiper, setSwiper] = useState();
  const swiperRef = useRef("");

  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={1}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      onSlideChange={(e) => console.log(e)}
      //   onSwiper={(swiper) => setSwiper(swiper)}
      modules={[Mousewheel, Pagination]}
      className="mySwiper pr-5"
    >
      {imageTransparent.map((items, index) => {
        return (
          <div key={items.name}>
            {selected ? (
              <>
                {items.name === selected && (
                  <SwiperSlide key={index}>
                    <div
                      style={{
                        backgroundImage: "url(/circles.png)",
                      }}
                      className="bg-contain bg-no-repeat h-[30rem] overflow-hidden"
                    >
                      <img
                        src={items.img}
                        alt={items.img}
                        className="h-[25rem] w-full"
                      />
                    </div>
                  </SwiperSlide>
                )}
              </>
            ) : (
              <SwiperSlide key={index}>
                <div
                  style={{
                    backgroundImage: "url(/circles.png)",
                  }}
                  className="bg-contain bg-no-repeat h-[30rem] overflow-hidden"
                >
                  <img
                    src={items.img}
                    alt={items.img}
                    className="h-[25rem] w-full"
                  />
                </div>
              </SwiperSlide>
            )}
          </div>
        );
      })}
    </Swiper>
  );
};

export default BikeSwiper;
