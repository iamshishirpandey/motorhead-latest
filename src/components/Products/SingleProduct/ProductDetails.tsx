import React from "react";
import Swipers from "./Swiper";
import { useRouter } from "next/router";
import { productObject } from "../../productObject";

type Props = {
  bike: any;
};

const ProductDetails = (props: Props) => {
  const { bike } = props;
  console.log(bike);
  return (
    <div className="bg-gray-100 lg:p-10 xl:px-28 xl:py-16 ">
      <div className="bg-white p-5 lg:p-10 rounded grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div>{bike.img && bike.img[0] && <Swipers img={bike.img} />}</div>
        <div className="py-5 space-y-8">
          <h1 className="text-4xl font-light ">{bike.name}</h1>
          <p className="text-lg font-medium">
            <span className="text-xl font-bold">MRP Rs. {bike.price}</span>
          </p>
          <p className="text-sm text-gray-500">
            Featuring an attractive graphics, Tekken 250 consists of the double
            exhaust with steel muffler pipes. The seat height of 820mm provides
            a tall and comfortable riding posture to the crossover. The bike
            consists of a fuel tank of 14 liters with an expected mileage of
            around 40kmpl.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3  gap-3">
            <span className="text-lg">Model:</span>
            <span className="md:col-span-2 text-gray-700 font-light">
              {" "}
              TEKKEN 250
            </span>
            <span className="text-lg">Displacement :</span>
            <span className="md:col-span-2 text-gray-700 font-light">
              {" "}
              250cc with inner balancer
            </span>
            <span className="text-lg">L*W*H／mm :</span>
            <span className="md:col-span-2 text-gray-700 font-light">
              2145*850*1175
            </span>
            <span className="text-lg">TAG :</span>
            <span className="md:col-span-2 text-gray-700 font-light">
              {" "}
              AGV, Full-face
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
