import Contact from "@/components/contact";
import Hero from "../components/hero/index";
import Footer from "@/components/footer";
import Button from "@/components/button";
import ContentWrapper from "@/components/wrapper";
import Carousel from "@/components/carousel";
import React from "react";
import Testimonial from "@/components/testimonial";

const page = () => {
  return (
    <>
      <Hero />
      <Testimonial />
      <Carousel />
      <ContentWrapper>
        <Button text="View All Posts" bgcolor="#610BEF" />
      </ContentWrapper>
      <Contact />
      <Footer />
    </>
  );
};

export default page;
