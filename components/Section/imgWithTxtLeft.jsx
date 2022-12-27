import Image from "next/image";
import React from "react";
import truck from "../../public/trucks.jpg";

const ImgWithTxtLeft = ({ title, description, button }) => {
  return (
    <div class="animated fadeIn mb-8 flex flex-col sm:flex-row">
      <div class="mb-8 flex items-center sm:order-last sm:w-1/2 md:w-6/12">
        {" "}
        <Image
          alt="word cloud IA"
          className="rounded-xl shadow-xl shadow-emerald-900/20"
          src={truck}
        />
      </div>
      <div class="mt-5 mb-8 flex flex-col justify-center sm:w-1/2 sm:pr-16 md:mt-0 md:w-6/12">
        <h2 class="mt-2 text-2xl font-bold sm:text-left md:text-4xl">
          {title}{" "}
        </h2>
        <div class="text mt-5 space-y-3 text-lg text-gray-700 md:text-left">
          <span class="block">{description} </span>
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-secondary bg-opacity-80 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {button}{" "}
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default ImgWithTxtLeft;
