"use client";
import Contact from "@/components/contact";
import Hero from "../components/hero/index";
import Footer from "@/components/footer";
import Button from "@/components/button";
import ContentWrapper from "@/components/wrapper";
import Menu from "@/components/tabs";
import { corporateData } from "./Data";
import Card from "@/components/card";
import Carousel from "@/components/carousel";
import React, { useState } from "react";

const Page = () => {
  const [currentSelected, setcurrentSelected] = useState(0);

  const handleClick = (index) => {
    setcurrentSelected(index);
  };

  return (
    <>
      <Hero />
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
      <Carousel />
      <ContentWrapper>
        <Button text="View All Posts" bgcolor="#610BEF" />
      </ContentWrapper>
      <Contact />
      <Footer />
    </>
  );
};

export default Page;
