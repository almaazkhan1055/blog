import React from "react";
import Testimonial1 from "../testi1/Testimonial1";
import Testimonial2 from "../testi2/Testimonial2";
import Carousel from "../carousel/carousel";

const Testimonial = () => {
  return (
    <>
      <div>
        <Testimonial1 />
        <Carousel />
        <Testimonial2 />
      </div>
    </>
  );
};

export default Testimonial;
