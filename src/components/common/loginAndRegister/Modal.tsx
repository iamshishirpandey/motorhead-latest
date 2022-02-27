import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon, XIcon } from "@heroicons/react/outline";
import { Fragment, useState } from "react";
import Login from "./Login";
import LostPassword from "./LostPassword";
import Register from "./Register";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = (props: Props) => {
  const { open, setOpen } = props;
  const [show, setShow] = useState(1);

  const conponent = [
    {
      id: 1,
      page: <Login />,
    },
    {
      id: 2,
      page: <Register />,
    },
    {
      id: 3,
      page: <LostPassword />,
    },
  ];

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-50 inset-0 overflow-y-auto"
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
            <div className="inline-block align-bottom bg-white rounded-lg px-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="text-center mx-5">
                {conponent.map((item, index) => (
                  <div key={index}>{item.id === show && item.page}</div>
                ))}
              </div>
              <div className=" mx-5">
                <button
                  type="button"
                  className="text-red-700 pr-2 border-r-2 border-black mr-2"
                  onClick={() => {
                    setShow(2);
                  }}
                >
                  Register
                </button>
                <button
                  type="button"
                  className="text-red-700 pr-2 mr-2"
                  onClick={() => {
                    setShow(3);
                  }}
                >
                  Lost your password ?
                </button>
                <button
                  onClick={() => {
                    setShow(1);
                  }}
                  type="button"
                  className="text-red-700 pr-2 capitalize"
                >
                  back to login
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
