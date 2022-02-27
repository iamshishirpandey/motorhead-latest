import React from "react";
import ContactForm from "../components/Contact/ContactForm";
import Map from "../components/Contact/Map";

type Props = {};

const contact = (props: Props) => {
  return (
    <div className="bg-gray-100">
      <div
        style={{
          backgroundImage: `url("bike2.jpeg")`,
        }}
        className="h-80 bg-cover bg-no-repeat bg-fixed"
      >
        <div className="flex justify-center items-end py-20 w-full h-full bg-black opacity-80 space-y-16 text-white text-3xl">
          Contact Us
        </div>
      </div>
      <ContactForm />
      <Map />
    </div>
  );
};

export default contact;
