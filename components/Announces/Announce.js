import Image from "next/image";
import React from "react";
import truck from "../../public/trucks.jpg";

const Announce = ({ title }) => {
  return (
    <div className="mt-20 flex flex-col items-center space-y-5">
      <h1 className="text-center text-2xl font-bold">{title}</h1>
      <div className="flex h-1/3 w-full content-center items-center object-cover">
        <Image
          className="h-full w-full rounded"
          src={truck}
          alt="ici le text"
        />
      </div>
    </div>
  );
};

export default Announce;
