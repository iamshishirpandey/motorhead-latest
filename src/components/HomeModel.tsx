import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Formik } from "formik";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import { imageTransparent } from "./imageTransparent";
import emailjs from "emailjs-com";

type Props = {
  open: boolean;
  setOpen: any;
};
const HomeModel = (props: Props) => {
  const [selected, setSelected] = useState("");
  console.log(selected);
  const { open, setOpen } = props;
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-neutral-900 text-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full sm:p-6">
              <div className="block absolute top-0 right-0 pt-4 sm:pt-8 pr-3 sm:pr-4">
                <button
                  type="button"
                  className="rounded-md text-white hover:text-gray-500 focus:outline-none"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="hidden sm:block absolute top-0 left-0 pt-8 pl-16">
                <button
                  type="button"
                  className="rounded-md text-white hover:text-gray-500 focus:outline-none"
                  onClick={() => setOpen(false)}
                >
                  <img src="/logo.png" alt="logo" className="w-16 h-12" />
                </button>
              </div>
              <div className="grid items-center lg:grid-cols-2 p-5 sm:p-10 md:pt-20 lg:pl-5">
                <div className="mt-3 space-y-4 text-center sm:mt-0 sm:ml-4 sm:text-left col-span-1">
                  <h1 className="text-2xl sm:text-3xl lg:text-5xl  font-bold capitalize tracking-wide">
                    Get authentic bikes for everyone
                  </h1>
                  <div className="">
                    <p className="text-xs md:text-sm">
                      Motorhead Motorcycle is a Guinness world record holding
                      company based in China. Motorhead earned its world record
                      in 2015 for longest journey in a motorcycle.
                    </p>
                  </div>

                  <form
                    className="sm:py-8 items-center gap-10 text-sm space-y-6"
                    onSubmit={(e) => {
                      e.preventDefault();
                      emailjs
                        .sendForm(
                          "service_76bvuor",
                          "template_vefo0ch",
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
                        type={"text"}
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
                        onClick={() => setOpen(false)}
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
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <AiFillTwitterCircle className="w-7 h-7 text-gray-100" />
                      </a>
                      <a
                        href="#"
                        className="rounded-full overflow-hidden w-7 h-7"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AiFillLinkedin className="w-full h-full text-gray-100" />
                      </a>
                    </div>
                  </form>
                </div>
                <div className="h-96 w-auto lg:flex justify-start hidden">
                  <Swiper
                    direction={"vertical"}
                    slidesPerView={1}
                    mousewheel={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Mousewheel, Pagination]}
                    className="mySwiper pr-5"
                  >
                    {imageTransparent.map((items, index) => (
                      <div key={items.name}>
                        {selected ? (
                          <>
                            {items.name === selected && (
                              <SwiperSlide
                                key={index}
                                style={{
                                  backgroundImage: "url(/circles.png)",
                                }}
                                className="bg-contain bg-no-repeat"
                              >
                                <img
                                  src={items.img}
                                  alt={items.img}
                                  className="h-96 w-full"
                                />
                              </SwiperSlide>
                            )}
                          </>
                        ) : (
                          <SwiperSlide
                            key={index}
                            style={{
                              backgroundImage: "url(/circles.png)",
                            }}
                            className="bg-contain bg-no-repeat"
                          >
                            <img
                              src={items.img}
                              alt={items.img}
                              className="h-96 w-full"
                            />
                          </SwiperSlide>
                        )}
                      </div>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default HomeModel;
