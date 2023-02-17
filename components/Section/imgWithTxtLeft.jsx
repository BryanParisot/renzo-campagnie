import Image from "next/image";
import Link from "next/link";
import React from "react";

const ImgWithTxtLeft = ({ title, description, button, image, link }) => {
  return (
    <div className="animated fadeIn mb-8 flex flex-col sm:flex-row">
      <div className="mb-8 flex items-center sm:order-last sm:w-1/2 md:w-6/12">
        {" "}
        <Image
          alt="word cloud IA"
          className="rounded-xl shadow-xl shadow-emerald-900/20"
          src={image}
        />
      </div>
      <div className="mt-5 mb-8 flex flex-col justify-center sm:w-1/2 sm:pr-16 md:mt-0 md:w-6/12">
        <h2 className="mt-2 text-2xl font-bold sm:text-left md:text-4xl">
          {title}{" "}
        </h2>
        <div className="text mt-5 space-y-3 text-lg text-gray-700 md:text-left">
          <span className="block">{description} </span>
          <Link
            href={link}
            className="inline-flex items-center rounded-md border border-transparent bg-primary bg-opacity-80 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {button}{" "}
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default ImgWithTxtLeft;
