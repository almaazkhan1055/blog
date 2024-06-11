import React from "react";

const Menu = () => {
  return (
    <>
      <div className="flex items-center gap-10 font-medium text-base leading-[32px] tracking-[0.75px] text-center cursor-pointer mt-20">
        {["All", "Corporate", "Engineering", "Product"].map((item, index) => (
          <button
            key={index}
            className={
              index === 0
                ? "bg-[#610BEF] px-6 py-1 rounded-lg text-white text-[18px]"
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
