import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { imageTransparent } from "../imageTransparent";
import emailjs from "emailjs-com";
import { FaYoutube } from "react-icons/fa";

type Props = {
  setOpen: any;
  setSelected: any;
  setShow: any;
};

const ContactForm = (props: Props) => {
  const { setShow, setOpen, setSelected } = props;
  return (
    <form
      className="sm:py-8 items-center gap-10 text-sm space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            "service_76bvuor",
            "template_vefo0ch",
            //@ts-ignore
            e.target,
            "3tOjgQYDS_3oNxS_u"
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }}
    >
      <div className="lg:w-3/4 space-y-4">
        <input
          type={"text"}
          name="name"
          className="border p-2 px-2 w-full bg-transparent rounded bg-white"
          placeholder="Enter your name*"
          required
        />
        <input
          type={"email"}
          name="email"
          className="border p-2 px-2 w-full bg-transparent rounded bg-white"
          placeholder="Enter your email*"
          required
        />
        <input
          type={"text"}
          name="number"
          className="border p-2 px-2 w-full bg-transparent rounded bg-white"
          placeholder="Enter your contact number*"
          required
        />
        <input
          type={"text"}
          name="address"
          className="border p-2 px-2 w-full bg-transparent rounded bg-white"
          placeholder="Enter your address*"
          required
        />
        <select
          required
          name="productName"
          className="border p-2 px-2 w-full bg-transparent rounded bg-white text-gray-400"
          onChange={(e) => {
            setSelected(e.target.value);
          }}
        >
          <option value="default" hidden>
            Bikes you are interested in*
          </option>
          {imageTransparent.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center space-x-3">
        <button
          type="submit"
          className="py-2 px-4 text-gray-700 bg-gray-300 text-sm rounded"
          onClick={() => {
            setShow(true);
            setOpen(false);
          }}
        >
          Get Started
        </button>
        <a
          href="https://www.facebook.com/motorheadnepal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsFacebook className="w-6 h-6 text-gray-100" />
        </a>
        <a
          href="https://www.instagram.com/motorheadbikesnepal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiInstagramFill className="w-7 h-7 text-gray-100" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCb7V1K8g3OZqS9xaFKpS9gg"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaYoutube className="w-7 h-7 text-gray-100" />
        </a>
      </div>
    </form>
  );
};

export default ContactForm;
