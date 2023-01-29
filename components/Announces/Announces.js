import React from "react";
import Image from "next/image";
import { IoMdSpeedometer } from "react-icons/io";
import { BsCalendarDate } from "react-icons/bs";
import { GiFuelTank, GiGearStickPattern } from "react-icons/gi";

const Announces = ({ title, description, vitesse, image }) => {
  return (
    <div className="min-h-64 mt-10 flex w-full flex-col rounded shadow-lg lg:w-9/12 lg:flex-row">
      <div className="w-full lg:w-2/4">
        {" "}
        <Image
          className="h-full w-full rounded-l object-cover lg:rounded-t"
          src={image}
          alt="ici le text"
          height={1080}
          width={1900}
        />
      </div>
      <div className=":w-full flex flex-col justify-evenly p-5 lg:w-2/4 lg:p-10">
        <div>
          <h2 className="text-xl font-bold max-sm:text-base">{title}</h2>
          <p className="my-2 h-32 overflow-auto text-ellipsis text-xs text-gray-500 md:text-base">
            {description}
          </p>
        </div>
        <div>
          <ul className="mt-4 flex flex-wrap items-end justify-between space-y-3 text-[17px] text-gray-500 max-sm:text-[14px]">
            <li className="flex min-w-[58px] flex-col items-center justify-center">
              <BsCalendarDate />
              <span className="mt-1">2019</span>
            </li>
            <li className="flex min-w-[58px] flex-col items-center justify-center">
              <IoMdSpeedometer />
              <span className="mt-1">220 000 KM</span>
            </li>
            <li className="flex min-w-[58px] flex-col items-center justify-center">
              <GiFuelTank />
              <span className="mt-1">Diesel</span>
            </li>
            {vitesse ? (
              <li className="flex min-w-[58px] flex-col items-center justify-center">
                <GiGearStickPattern />
                <span className="mt-1">{vitesse}</span>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Announces;
