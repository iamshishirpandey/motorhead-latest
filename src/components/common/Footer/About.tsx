import Link from "next/link";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="space-y-10">
      <div className="text-xl font-medium">About US</div>
      <p className="text-sm">
        SLR Techno & Trade Pvt. Ltd. is a trading firm established in the year
        2012 to capitalize the growing automobile sector in Nepal. SLR was
        appointed as the sole authorized distributor of Motorhead motorcycles
        for Nepal by Chongqing Fuego Power Co. Ltd. Motorhead Motorcycle is a
        Guinness world record holding company based in China. Motorhead earned
        its world record in 2015 for longest journey in a motorcycle, travelling
        over 35,000km in a single journey.{" "}
        <Link href="/about">
          <a className="text-red-700">Read More</a>
        </Link>
      </p>
    </div>
  );
};

export default About;
