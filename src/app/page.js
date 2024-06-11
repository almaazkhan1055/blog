import React from "react";
import Contact from "@/components/contact";
import Hero from "../components/hero/index";
import Testimonial from "../components/testimonialMain/index";
import Footer from "@/components/footer";

const page = () => {
  return (
    <>
      <Hero />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default page;
