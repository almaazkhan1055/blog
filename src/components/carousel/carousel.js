"use client";

import React from "react";
import ContentWrapper from "../wrapper/ContentWrapper";

import { useEffect } from "react";
import Swiper from "swiper";
// import "swiper/swiper-bundle.min.css";
import Slider from "../slider";

function Carousel() {
  return (
    <div className="bg-[#EBECFE] py-40 pl-[12%] w-full ">
      <div class="font-semibold text-4xl leading-tight">Recent highlights</div>
      <Slider />
    </div>
  );
}

export default Carousel;
