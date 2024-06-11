import React from "react";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Testimonial from "@/components/testimonial/Testimonial";
import Footer from "@/components/footer/Footer";

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
