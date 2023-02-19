import React from "react";
import { BsCalendarDate } from "react-icons/bs";

const LogoWithTitle = ({ children, title, subtitle }) => {
  return subtitle ? (
    <div className="mb-5 flex w-2/4 items-center xl:w-1/4">
      <div className=" mr-2 flex h-8 w-8 content-center items-center  justify-center rounded-full bg-gray-300">
        {children}
      </div>
      <div>
        <h3 className="text-[11px] text-gray-400 sm:text-[13px]">{title}</h3>
        <span className="text-[10px] sm:text-[11px] md:text-base">
          {subtitle}
        </span>
      </div>
    </div>
  ) : (
    ""
  );
};

export default LogoWithTitle;
