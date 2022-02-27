import React, { useState } from "react";
import Member from "./Member";

type Props = {};

const Teams = (props: Props) => {
  const [open, setOpen] = useState(false);
  const teams = [
    {
      img: "shiva-prasad-ghimire.jpeg",
      name: "Shiva Prasad Ghimire",
      post: "Vice–Chairman",
    },
    {
      img: "sugam-ghimire.jpeg",
      name: "Sugam Ghimire",
      post: "Executive Director",
    },
    {
      img: "sudip-ghimire.jpeg",
      name: "Sudip Ghimire",
      post: "Director",
    },
  ];
  return (
    <>
      <div className="sm:p-5  md:p-10 xl:px-28">
        <div className="p-5 py-10 lg:p-20 bg-white space-y-10">
          <div className="text-center text-3xl font-bold">OUR MEMBERS</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {teams.map((item, index) => (
              <>
                <div
                  onClick={() => setOpen(true)}
                  className="h-96 bg-center bg-opacity-50 p-4 relative bg-white cursor-pointer"
                  style={{
                    backgroundImage: `url(${item.img})`,
                  }}
                >
                  <div className="h-full bg-white "></div>
                  <div className="absolute inset-0 hover:translate-x-8  hover:translate-y-8  hover:duration-300 transition-all">
                    <div className="relative">
                      <img
                        src={item.img}
                        alt={item.img}
                        className="w-full h-96"
                      />
                      <div className="absolute inset-0 w-full h-full hover:bg-opacity-80 hover:bg-red-700 text-white flex flex-col justify-end p-5 rounded">
                        <span className="font-light text-2xl">{item.name}</span>
                        <span className="text-sm">{item.post}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Member open={open} setOpen={setOpen} item={item} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
