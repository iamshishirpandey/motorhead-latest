import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import BikeSwiper from "./BikeSwiper";
import ContactForm from "./ContactForm";

type Props = {
  open: boolean;
  setOpen: any;
  setShow: any;
};
const HomeModel = (props: Props) => {
  const [selected, setSelected] = useState("");
  const { open, setOpen, setShow } = props;

  return (
    <>
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
              <div className="relative inline-block align-bottom bg-gradient-to-b from-black to-neutral-700 text-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full sm:p-6">
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
                <div className="hidden md:block absolute top-0 left-0 pt-8 pl-16">
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
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl  font-bold capitalize tracking-wide">
                      <p>Get authentic bikes</p>
                      <p>for everyone</p>
                    </h1>
                    <div className="">
                      <p className="text-xs md:text-sm">
                        Motorhead Motorcycle is a Guinness world record holding
                        company based in China. Motorhead earned its world
                        record in 2015 for longest journey in a motorcycle.
                      </p>
                    </div>

                    <ContactForm
                      setShow={setShow}
                      setSelected={setSelected}
                      setOpen={setOpen}
                    />
                  </div>
                  <div className="h-[30rem] w-auto lg:flex justify-start hidden">
                    <BikeSwiper selected={selected} />
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default HomeModel;
