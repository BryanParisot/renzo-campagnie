import Image from "next/image";
import React from "react";
import logo from "../../public/logo-wv.jpg";

const Partner = ({ title }) => {
  return (
    <div className="rounded bg-primary">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white">
          {title}
        </h2>
        <div className="mt-8 flex justify-center space-x-2 lg:mt-10">
          <div className="mt-4 flex h-full w-2/12 flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
            <Image className="rounded object-cover" src={logo} alt="Logo" />
          </div>
          <div className="mt-4 flex h-full w-2/12 flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
            <Image className="rounded object-cover" src={logo} alt="Logo" />
          </div>
          <div className="mt-4 flex h-full w-2/12 flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
            <Image className="rounded object-cover" src={logo} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
