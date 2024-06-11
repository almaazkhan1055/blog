import React from "react";
import ContentWrapper from "../wrapper";
import { footerData, socialIcons } from "./footerData";
import footerLogo from "../../../public/FooterLogo.svg";
import Image from "next/image";
function Footer() {
  return (
    <>
      <ContentWrapper>
        <div className="sm:flex sm:gap-16 sm:justify-between block py-24">
          <div className="flex flex-col gap-y-28">
            <div
              className="Appname flex sm:flex sm:items-center 
            items-start sm:justify-center  gap-8 mb-10"
            >
              <Image src={footerLogo} alt="Appname" />
            </div>
          </div>
          <div className=" w-1/2 flex flex-col sm:flex-row sm:justify-between mt-50px sm:mt-0">
            {footerData.length > 0 &&
              footerData.map((item) => {
                return (
                  <div className="mb-10">
                    <h2 className="font-semibold text-[18px] leading-8  text-black  mb-8">
                      {item.heading}
                    </h2>
                    {item.links.map((link) => {
                      return (
                        <div className="font-normal text-[18px] leading-8  text-[#4E4B66] mb-3">
                          <a href="#">{link}</a>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
          </div>
        </div>
        <div className="icons flex gap-16 mb-10">
          {socialIcons.map((slogo) => {
            return <Image src={slogo} alt="sociallogo" />;
          })}
        </div>
        <div className="flex items-center justify-center">
          <h2 className="font-normal text-base leading-6 my-4">
            Created with ❤️ in India
          </h2>
        </div>
      </ContentWrapper>
    </>
  );
}

export default Footer;
