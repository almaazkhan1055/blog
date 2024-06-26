import React from "react";

import Slider from "../slider";

function Carousel() {
  return (
    <div className="bg-[#EBECFE] py-40 pl-[12%] w-full mb-20">
      <div className="font-semibold text-4xl leading-tight">
        Recent highlights
      </div>
      <Slider />
    </div>
  );
}

export default Carousel;
