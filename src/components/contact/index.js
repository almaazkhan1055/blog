import React from "react";
import ContentWrapper from "../wrapper";
import Button from "../button";
import Image from "next/image";
import { contactData } from "./contactData";
import CustomLink from "../CustomLink";
import { IoIosArrowForward } from "react-icons/io";

function Contact() {
  return (
    <>
      <div className="bg-[#EBECFE] py-20 mt-20">
        <ContentWrapper>
          <div className="lg:flex lg:items-center lg:justify-center lg:gap-16">
            <div className="mb-20">
              <h2 className="font-bold text-4xl sm:text-5xl leading-[2rem] tracking-widest ">
                Stay connected
              </h2>
              <p className="font-normal text-[18px] leading-8 tracking-tight text-[#4E4B66] sm:my-20 my-10">
                Subscribe to receive new blog posts from Stripe in your RSS
                reader.
              </p>
              <Button bgcolor={"#610BEF"} text={"Subscribe to RSS"} />
            </div>
            {contactData.length > 0 &&
              contactData.map((item) => {
                return (
                  <div>
                    {item.image && <Image src={item.image} />}

                    <h2 className="font-bold text-4xl leading-12 tracking-widest mt-10">
                      {item.heading}
                    </h2>
                    <p className="font-normal text-[18px] leading-8 tracking-tight text-[#4E4B66]  my-10">
                      {item.para}
                    </p>
                    {item.btnText && (
                      <p className="font-normal text-[18px] leading-8 tracking-tight text-[#4E4B66]  my-10">
                        {item.btnText}
                      </p>
                    )}
                    {item.linkText && (
                      <CustomLink
                        text={item.linkText}
                        color="#610BEF"
                        icon={<IoIosArrowForward />}
                      />
                    )}
                  </div>
                );
              })}
          </div>
        </ContentWrapper>
      </div>
    </>
  );
}

export default Contact;
