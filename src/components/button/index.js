import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Button = ({ text, bgcolor }) => {
  return (
    <button
      className={`font-medium text-xl leading-24 text-center flex items-center justify-center text-white rounded-full px-[24px] py-[16px] gap-5 
            bg-[${bgcolor}]`}
    >
      {text}
      <IoIosArrowForward />
    </button>
  );
};

export default Button;
