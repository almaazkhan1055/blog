import React from "react";

const CustomLink = ({ color, text, icon }) => {
  return (
    <>
      <button
        className={`flex text-[${color}] font-medium text-[18px] leading-[24px] tracking-[0.75px] text-center items-center my-8 gap-5 `}
      >
        {text} {icon}
      </button>
    </>
  );
};

export default CustomLink;
