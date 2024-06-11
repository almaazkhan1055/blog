import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const ReadMore = ({ color }) => {
  return (
    <>
      <button
        className={`flex text-[${color}] font-medium text-[18px] leading-[24px] tracking-[0.75px] text-center items-center my-8 `}
      >
        Read More <IoIosArrowForward />
      </button>
    </>
  );
};

export default ReadMore;
