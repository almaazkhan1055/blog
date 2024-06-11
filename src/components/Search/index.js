import React from "react";

const Search = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-9xl leading-[88px] tracking-[1px]">
          Blog
        </h1>
        <div className="input flex gap-4 h-[56px] relative my-16 w-full justify-center">
          <input
            type="text"
            placeholder="Search blog"
            className="border-2 bg-gray-100 p-2 pl-[40px] rounded-2xl sm:w-[696px] w-[198px] h-[56px] gap-0 rounded-tl-[16px] text-3xl relative"
          />
          <svg
            className="absolute w-20 h-20 sm:left-[85px] left-[36px] text-gray-400 pointer-events-none"
            width="72"
            height="68"
            viewBox="0 0 72 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35 42C39.9706 42 44 37.9706 44 33C44 28.0294 39.9706 24 35 24C30.0294 24 26 28.0294 26 33C26 37.9706 30.0294 42 35 42Z"
              stroke="#6E7191"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M46 44L42 40"
              stroke="#6E7191"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <button className="w-[106px] h-[56px]  px-[24px] py-[16px] gap-3 rounded-[32px] bg-[#610BEF] font-medium text-base leading-[24px] tracking-tight text-center text-white">
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
