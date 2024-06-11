import { corporateData } from "@/app/Data";
import React from "react";
import Menu from "../menu/Menu";
import Cards from "../cards/Cards";
import ContentWrapper from "../wrapper/ContentWrapper";

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
