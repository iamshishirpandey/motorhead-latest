import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import { imageTransparent } from "../imageTransparent";
type Props = {
  selected: string;
};

const BikeSwiper = (props: Props) => {
  const { selected } = props;
  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={1}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination]}
      className="mySwiper pr-5 "
    >
      {imageTransparent.map((items, index) => (
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
                      className="h-[30rem] w-full"
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
                  className="h-[30rem] w-full"
                />
              </div>
            </SwiperSlide>
          )}
        </div>
      ))}
    </Swiper>
  );
};

export default BikeSwiper;
