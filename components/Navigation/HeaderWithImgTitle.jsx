import Image from "next/image";
import React from "react";
import truck from "../../public/trucks.jpg";

const HeaderWithImgTitle = ({ title }) => {
  return (
    <div className="relative bg-gray-800 pb-48">
      <div className="absolute inset-0">
        <Image
          className="h-full w-full object-cover"
          src={truck}
          alt="ici le text"
        />
        <div
          className="absolute inset-0 bg-gray-300 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default HeaderWithImgTitle;
