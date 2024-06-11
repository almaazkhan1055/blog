import React from "react";
import Navbar from "../navbar/Navbar";
import Corporate from "../Corporate";
import Search from "../Search/Search";
import ContentWrapper from "../wrapper/ContentWrapper";
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
