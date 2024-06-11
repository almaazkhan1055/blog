import { corporateData } from "@/app/Data";
import React from "react";
import Menu from "../tabs";
import Cards from "../cards";
import ContentWrapper from "../wrapper";
import Button from "../button";

function Testimonial1() {
  return (
    <>
      <ContentWrapper>
        <Cards corporateData={corporateData[3]} />
        <Cards corporateData={corporateData[4]} />
        <Cards corporateData={corporateData[5]} />
        <Cards corporateData={corporateData[6]} />
        <Cards corporateData={corporateData[7]} />
        <Cards corporateData={corporateData[8]} />
        <Button keyProp={1} />
      </ContentWrapper>
    </>
  );
}

export default Testimonial1;
