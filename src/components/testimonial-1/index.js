import { corporateData } from "@/app/Data";
import React from "react";
import Menu from "../tabs";
import Cards from "../cards";
import ContentWrapper from "../wrapper";

function Testimonial1() {
  return (
    <>
      <ContentWrapper>
        <Menu />
        <Cards corporateData={corporateData[0]} />
        <Cards corporateData={corporateData[1]} />
        <Cards corporateData={corporateData[2]} />
      </ContentWrapper>
    </>
  );
}

export default Testimonial1;
