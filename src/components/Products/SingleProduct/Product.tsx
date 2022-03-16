import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { productObject } from "../../productObject";
import Details from "./Detail";
import MobDiscloser from "./MobDiscloser";
import ProductDetails from "./ProductDetails";

const Product = () => {
  const Router = useRouter();
  const flightModel = Router.query.name;

  const [data, setData] = useState([{}]);

  useEffect(() => {
    const flightdata = productObject.filter((item) => {
      return item.name === flightModel;
    });

    setData(flightdata);
    console.log(data);
  }, [flightModel]);
  return (
    <>
      {data && data[0] && <ProductDetails bike={data[0]} />}
      <div className="hidden sm:block">
        {data && data[0] && <Details bike={data[0]} />}
      </div>
      <div className="block sm:hidden">
        <MobDiscloser />
      </div>
    </>
  );
};

export default Product;
