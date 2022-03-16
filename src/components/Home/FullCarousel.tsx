import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "animate.css";

const FullCarousel = () => {
  const contant = [
    {
      title: "MH200X",
      name1: "Reliable Staffing, ",
      name2: "Healthcare Workforce Management",
      description:
        "Everything you could possibly need to onboard talent and to cover patient care. Your need for a healthcare professional, or you being one-we are one-stop for it all. Healthcare Total Talent Solutions is who we are.",
      button1: "Get In Touch",
      img: `url("bike2.jpeg")`,
    },
    {
      title: "Tekken R250 ",
      name1: "Reliable Staffing, ",
      name2: "Healthcare Workforce Management",
      description:
        "Everything you could possibly need to onboard talent and to cover patient care. Your need for a healthcare professional, or you being one-we are one-stop for it all. Healthcare Total Talent Solutions is who we are.",
      button1: "Get In Touch",
      img: `url("bike2.jpeg")`,
    },
  ];
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        stopOnHover={false}
        showArrows={false}
        showStatus={false}
        swipeable={false}
        showIndicators={false}
        interval={5000}
        axis={"horizontal"}
      >
        {contant.map((item, index) => (
          <div
            style={{
              backgroundImage: `${item.img}`,
            }}
            key={index}
            className="h-screen 2xl:h-full bg-cover bg-center bg-no-repeat"
          >
            <div className="flex justify-center items-center w-full h-full bg-black opacity-80 space-y-16 2xl:py-96">
              <div className="text-white flex flex-col space-y-5">
                <div className="text-3xl sm:text-5xl md:text-7xl uppercase font-bold animate__animated animate__fadeInDownBig">
                  {item.title}
                </div>
                <div className="flex space-x-5 ms:space-x-10 md:space-x-16 justify-center items-center">
                  <span className="flex flex-col space-y-1 items-end animate__animated animate__fadeInLeft">
                    <span className="w-20 md:w-28 h-0.5 bg-white" />
                    <span className="w-12 md:w-20 h-0.5 bg-white" />
                  </span>
                  <div className="uppercase sm:text-xl font-light animate__animated animate__fadeInUp">
                    Motorhead
                  </div>
                  <span className="flex flex-col space-y-1 justify-end animate__animated animate__fadeInRight">
                    <span className="md:w-28 w-20 h-0.5 bg-white" />
                    <span className="md:w-20 w-12 h-0.5 bg-white" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FullCarousel;
