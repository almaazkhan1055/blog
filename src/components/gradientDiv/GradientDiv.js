import React from "react";

const GradientDiv = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-600 to-purple-900 flex items-center justify-center text-white rounded-3xl sm:h-[490px] sm:w-[490px]">
        <div className="flex flex-col gap-2 p-20">
          <h2 className="font-bold sm:text-7xl text-5xl sm:leading-[68px] leading-[4rem]">
            Stripe <br />
            SESSIONS
          </h2>
          <p className="font-normal text-base leading-[32px] ">
            June 16-30, 2021
          </p>
        </div>
      </div>
    </>
  );
};

export default GradientDiv;
