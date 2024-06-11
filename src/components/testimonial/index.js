import { corporateData } from "@/app/Data";
import React from "react";
import Menu from "../tabs";
import Cards from "../card";
import ContentWrapper from "../wrapper";
import Carousel from "../carousel";

function Testimonial() {
  return (
    <>
      <ContentWrapper>
        <Menu />
        {[...corporateData].slice(0, 3).map((data, i) => (
          <Cards key={i} cardData={data} />
        ))}
        <Carousel />
        {[...corporateData].slice(3).map((data, i) => (
          <Cards key={i} cardData={data} />
        ))}
      </ContentWrapper>
    </>
  );
}

export default Testimonial;
