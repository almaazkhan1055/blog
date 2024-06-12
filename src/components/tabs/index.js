import React from "react";
const Menu = ({ currentSelected, handleClick }) => {
  return (
    <>
      <div className="flex items-center gap-10 font-medium text-base leading-[32px] tracking-[0.75px] text-center cursor-pointer mt-20 overflow-x-auto scrollbar-hidden transition duration-300 ease-out">
        {["All", "Corporate", "Engineering", "Product"].map((item, index) => (
          <button
            onClick={() => handleClick(index)}
            key={index}
            currentSelected={index}
            className={
              currentSelected === index
                ? "bg-[#610BEF] px-6 py-1 rounded-lg text-white text-[18px] transition duration-300 ease-in-out"
                : "font-medium text-[18px] leading-[32px] tracking-[0.75px] text-center text-[#6E7191]"
            }
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};

export default Menu;
