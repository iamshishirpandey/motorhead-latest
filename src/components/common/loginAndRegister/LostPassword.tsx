import React from "react";

type Props = {};

const LostPassword = (props: Props) => {
  return (
    <div className="my-5 space-y-6">
      <div className="text-center text-3xl font-light uppercase text-red-700">
        forgotten password
      </div>
      <form className="flex flex-col space-y-4">
        <label className="flex items-start flex-col space-y-2">
          <span className="uppercase text-sm font-medium text-gray-700">
            USERNAME
          </span>
          <input
            type="text"
            className="p-2 w-full rounded border border-t-2 border-gray-300 hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-700"
          />
        </label>
        <div className="space-y-1">
          <button className=" py-2 bg-red-700 hover:bg-red-900 text-white rounded w-full font-semibold">
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default LostPassword;
