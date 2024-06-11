import React from "react";
import Testimonial1 from "../testimonial-1";
import Testimonial2 from "../testimonial-2";
import Carousel from "../carousel";

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
