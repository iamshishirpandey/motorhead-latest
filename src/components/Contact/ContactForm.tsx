import React from "react";

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <div className="sm:p-5  md:p-10 xl:p-28">
      <div className="p-5 py-10 lg:p-20 bg-white space-y-10">
        <div className="text-center text-3xl font-bold">Contact Form</div>
        <form action="" className="space-y-5 text-gray-500">
          <div className="grid md:grid-cols-2 gap-5">
            <label className="flex space-x-5 items-center text-gray-800">
              <span className="w-20">Name</span>
              <input
                type="text"
                className="w-full p-3 border-2 border-gray-100 rounded"
              />
            </label>
            <label className="flex space-x-5 items-center text-gray-800">
              <span className="w-20">Email</span>
              <input
                type="email"
                className="w-full p-3 border-2 border-gray-100 rounded"
              />
            </label>
            <label className="flex space-x-5 items-center text-gray-800">
              <span className="w-20">Number</span>
              <input
                type="number"
                className="w-full p-3 border-2 border-gray-100 rounded"
              />
            </label>
            <label className="flex space-x-5 items-center text-gray-800">
              <span className="w-20">Subject</span>
              <input
                type="text"
                className="w-full p-3 border-2 border-gray-100 rounded"
              />
            </label>
          </div>
          <textarea
            rows={5}
            className="border-2 border-gray-100 p-3 w-full rounded"
          >
            Enter your message
          </textarea>
          <button className="bg-red-700 p-3 text-white font-bold w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
