import React from "react";
import Navbar from "../navbar";
import Corporate from "../heroCard";
import Search from "../Search";
import ContentWrapper from "../wrapper";
const Hero = () => {
  return (
    <>
      <Navbar />
      <div
        className={`bg-[url('../../public/Rectangle.png')] bg-cover  bg-no-repeat bg-pos`}
      >
        <ContentWrapper>
          <Search />
          <Corporate />
        </ContentWrapper>
      </div>
    </>
  );
};

export default Hero;
