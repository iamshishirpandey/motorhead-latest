import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { productObject } from "../../productObject";
import Details from "./Detail";
import MobDiscloser from "./MobDiscloser";
import ProductDetails from "./ProductDetails";

const Product = () => {
  const Router = useRouter();

  const [data, setData] = useState([{}]);
  useEffect(() => {
    if (Router) {
      const flightData = productObject.filter((item) => {
        return item.name === Router.query.name;
      });
      console.log(productObject, Router.query.name);
      console.log(flightData);
      setData(flightData);
    }
  }, [Router]);
  return (
    <>
      {data && data[0] && <ProductDetails bike={data[0]} />}
      <div className="hidden sm:block">
        {data && data[0] && <Details bike={data[0]} />}
      </div>
      <div className="block sm:hidden">
        {data && data[0] && <MobDiscloser bike={data[0]} />}
      </div>
    </>
  );
};

export default Product;
