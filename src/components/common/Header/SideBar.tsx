import { Dialog, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { FaPhone, FaSearch, FaShoppingBag } from "react-icons/fa";
import { Fragment, useState } from "react";
import Nav from "./Nav";

type Props = {};

const SideBar = (props: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40  xl:hidden overflow-y-scroll"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="inset-0 bg-gray-900 bg-opacity-90" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="w-full relative h-screen bg-gray-800 shadow-xl">
                <div className=" z-50 flex-1 flex flex-col">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 mr-4 pt-6">
                      <button
                        type="button"
                        className="ml-1 flex items-center justify-center h-10 w-10"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <XIcon
                          className="h-10 w-10 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex-shrink-0 flex">
                    <div className="justify-center w-full flex-shrink-0 space-y-6 group">
                      <div className="w-44 flex justify-center pt-5">
                        <img src="logo.png" alt="" className="h-16" />
                      </div>
                      <nav className="space-y-1 w-44">
                        <ul className="text-center p-5 text-lg">
                          <Nav />
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
        <div className="flex flex-col flex-1">
          <div className="sticky top-0 z-10 xl:hidden">
            <button
              type="button"
              className="-ml-2 -mt-0.5 flex items-center justify-center rounded-md text-white"
              onClick={() => setSidebarOpen(true)}
            >
              <MenuIcon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
