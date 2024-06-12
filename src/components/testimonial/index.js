"use client";
import React, { useState } from "react";
import ContentWrapper from "../wrapper";
import Menu from "../tabs";
import { corporateData } from "@/app/Data";
import Card from "../card";

const Testimonial = () => {
  const [currentSelected, setcurrentSelected] = useState(0);

  const handleClick = (index) => {
    setcurrentSelected(index);
  };
  return (
    <>
      <ContentWrapper>
        <Menu currentSelected={currentSelected} handleClick={handleClick} />

        {currentSelected === 0
          ? corporateData.map((item, index) => (
              <Card key={index} cardData={item} />
            ))
          : currentSelected === 1
          ? corporateData.map((item, index) =>
              item.head === "Corporate" ? (
                <Card key={index} cardData={item} />
              ) : null
            )
          : currentSelected === 2
          ? corporateData.map((item, index) =>
              item.head === "Engineering" ? (
                <Card key={index} cardData={item} />
              ) : null
            )
          : currentSelected === 3
          ? corporateData.map((item, index) =>
              item.head === "Product" ? (
                <Card key={index} cardData={item} />
              ) : null
            )
          : null}
      </ContentWrapper>
    </>
  );
};

export default Testimonial;
