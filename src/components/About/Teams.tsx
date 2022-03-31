import React, { useState } from "react";
import Member from "./Member";

type Props = {};
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

const Teams = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [passMember, setPassMember] = useState(0);
  const [show, setShow] = useState("");

  function member(index: React.SetStateAction<number>) {
    setOpen(true);
    setPassMember(index);
  }
  return (
    <>
      <div className="sm:p-5  md:p-10 xl:px-28">
        <div className="p-5 py-10 lg:p-20 bg-white space-y-10">
          <div className="text-center text-3xl font-bold">OUR MEMBERS</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {teams.map((item, index) => (
              <div
                key={index}
                onClick={() => member(index)}
                className="w-full h-80 sm:w-auto sm:h-72 bg-center cursor-pointer bg-cover"
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              >
                <div className="inset-0 w-full h-full flex flex-col justify-end rounded text-white font-bold p-4 bg-black bg-opacity-20">
                  <span className="font text-2xl">{item.name}</span>
                  <span className="text-sm">{item.post}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Member open={open} setOpen={setOpen} item={teams[passMember]} />
      </div>
    </>
  );
};

export default Teams;

{
  /* <div
  onClick={() => member(index)}
  className="h-96 bg-center bg-opacity-50 p-4 relative bg-white cursor-pointer"
  style={{
    backgroundImage: `url(${item.img})`,
  }}
  onMouseOver={() => setShow(item.name)}
  onMouseLeave={() => setShow("")}
>
  <div className="h-full bg-white "></div>
  <div
    className={`${
      show === item.name
        ? "translate-x-8 translate-y-8  duration-300 transition-all"
        : ""
    } absolute inset-0`}
  >
    <div className="relative">
      <img
        src={item.img}
        alt={item.img}
        className="w-full h-96"
      />
      <div
        className={`${
          show === item.name ? "bg-opacity-80 bg-red-700" : ""
        } absolute inset-0 w-full h-full  text-white flex flex-col justify-end p-5 rounded`}
      >
        <span className="font-light text-2xl">{item.name}</span>
        <span className="text-sm">{item.post}</span>
      </div>
    </div>
  </div>
</div> */
}
