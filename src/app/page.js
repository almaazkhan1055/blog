import React from "react";
import Contact from "@/components/contact";
import Hero from "../components/hero/index";
import Footer from "@/components/footer";
import Button from "@/components/button";
import ContentWrapper from "@/components/wrapper";
import Menu from "@/components/tabs";
import { corporateData } from "./Data";
import Card from "@/components/card";
import Carousel from "@/components/carousel";

const page = () => {
  return (
    <>
      <Hero />
      <ContentWrapper>
        <Menu />
        {[...corporateData].slice(0, 3).map((data) => (
          <Card cardData={data} />
        ))}
      </ContentWrapper>
      <Carousel />
      <ContentWrapper>
        {[...corporateData].slice(3).map((data) => (
          <Card cardData={data} />
        ))}
        <Button text="View All Posts" bgcolor="#610BEF" />
      </ContentWrapper>
      <Contact />
      <Footer />
    </>
  );
};

export default page;
