import React from "react";

type Props = {};

const DealerNetwork = (props: Props) => {
  const network = [
    {
      name: "SLR Techno & Trade Pvt. Ltd.",
      address: "Dhobighat",
      phone: "01-5542934",
      mobilePhone: "9851134782",
      email: "sales@motorheadnepal.com.np",
    },
    {
      name: "SLR Techno & Trade Pvt. Ltd.",
      address: "Teku, Kathmandu",
      phone: "01-4265337",
      mobilePhone: "",
      email: "sales@motorheadnepal.com.np",
    },
    {
      name: "SLR Techno & Trade Pvt. Ltd.",
      address: "Mitra Park, Chabahil",
      phone: "",
      mobilePhone: "9842398619",
      email: "sales@motorheadnepal.com.np",
    },
    {
      name: "SLR Techno & Trade Pvt. Ltd.",
      address: "Balaju",
      phone: "01-5907132",
      mobilePhone: "9851213132",
      email: "sales@motorheadnepal.com.np",
    },
    {
      name: "SLR Techno & Trade Pvt. Ltd.",
      address: "Sallaghari",
      phone: "01-6613646",
      mobilePhone: "",
      email: "sales@motorheadnepal.com.np",
    },
    {
      name: "SLR Techno & Trade Pvt. Ltd.",
      address: " Itahari-5, Sunsari",
      phone: "",
      mobilePhone: "9867569097",
      email: "sales@motorheadnepal.com.np",
    },
    {
      name: "SLR Techno & Trade Pvt. Ltd.",
      address: "Pokhara-5, Parshang",
      phone: "61-532360",
      mobilePhone: "",
      email: "sales@motorheadnepal.com.np",
    },
    {
      name: "SLR Techno & Trade Pvt. Ltd.",
      address: "Birendranagar-3, Surkhet:",
      phone: "083-523903",
      mobilePhone: "",
      email: "sales@motorheadnepal.com.np",
    },
    {
      name: "SLR Techno & Trade Pvt. Ltd.",
      address: "Baglung",
      phone: "9847754156",
      mobilePhone: "9857644440",
      email: "sales@motorheadnepal.com.np",
    },
    {
      name: "SLR Techno & Trade Pvt. Ltd.",
      address: "Beni",
      phone: "",
      mobilePhone: "9861945096",
      email: "sales@motorheadnepal.com.np",
    },
    {
      name: "SLR Techno & Trade Pvt. Ltd.",
      address: "Butwal",
      phone: "9847594276",
      mobilePhone: "9866614144",
      email: "sales@motorheadnepal.com.np",
    },
    {
      name: "SLR Techno & Trade Pvt. Ltd.",
      address: "Khadbari",
      phone: "",
      mobilePhone: "9852058269",
      email: "sales@motorheadnepal.com.np",
    },
    {
      name: "SLR Techno & Trade Pvt. Ltd.",
      address: "Dhadhing",
      phone: "",
      mobilePhone: "9851321955",
      email: "sales@motorheadnepal.com.np",
    },
    {
      name: "SLR Techno & Trade Pvt. Ltd.",
      address: "Manthali",
      phone: "",
      mobilePhone: "9854022251",
      email: "sales@motorheadnepal.com.np",
    },
    {
      name: "SLR Techno & Trade Pvt. Ltd.",
      address: "Birtamod",
      phone: "",
      mobilePhone: "9801093837",
      email: "sales@motorheadnepal.com.np",
    },
    {
      name: "SLR Techno & Trade Pvt. Ltd.",
      address: "Kawaswoti",
      phone: "",
      mobilePhone: "9857040244",
      email: "sales@motorheadnepal.com.np",
    },
    {
      name: "SLR Techno & Trade Pvt. Ltd.",
      address: "Hetauda",
      phone: "",
      mobilePhone: "9855089174",
      email: "sales@motorheadnepal.com.np",
    },
    {
      name: "SLR Techno & Trade Pvt. Ltd.",
      address: "Syanja",
      phone: "9802623600",
      mobilePhone: "9857033843,",
      email: "sales@motorheadnepal.com.np",
    },
  ];
  return (
    <div className="bg-gray-100">
      <div
        style={{
          backgroundImage: `url("bike2.jpeg")`,
        }}
        className="h-80 bg-cover bg-no-repeat bg-fixed"
      >
        <div className="flex justify-center items-end py-20 w-full h-full bg-black opacity-80 space-y-16 text-white text-3xl">
          Dealer Network
        </div>
      </div>
      <div className="p-5 py-10 sm:p-10 lg:p-28 grid md:grid-cols-2  xl:grid-cols-4 gap-5 lg:gap-10">
        {network.map((item, index) => (
          <div key={index} className="space-y-5">
            <div className="border-b py-3 font-bold text-red-700">
              {item.name}
            </div>
            <ul className="space-y-2">
              <li>{item.address}</li>
              {item.phone == "" ? (
                <></>
              ) : (
                <li className="flex space-x-1">
                  <span>Phone:</span>
                  <a
                    href={`tel:${item.phone}`}
                    className="font-medium hover:text-red-700"
                  >
                    {item.phone}
                  </a>
                </li>
              )}
              {item.mobilePhone == "" ? (
                <></>
              ) : (
                <li className="flex space-x-1">
                  <span>Mobile:</span>
                  <a
                    href={`tel:${item.phone}`}
                    className="font-medium hover:text-red-700"
                  >
                    {item.mobilePhone}
                  </a>
                </li>
              )}
              {/* <li>
                <a href="" className="text-blue-500">
                  {item.email}
                </a>
              </li> */}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealerNetwork;
