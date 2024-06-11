import React from "react";
import CustomerDetails from "../customerDetails";
import Image from "next/image";
import CustomLink from "../CustomLink";
import { IoIosArrowForward } from "react-icons/io";
import GradientDiv from "../gradient";

const Card = ({ cardData }) => {
  return (
    <div className="w-full py-5 sm:py-[50px]">
      <div className="sm:flex sm:justify-between sm:items-baseline ">
        <div className="sm:w-[72%] my-8">
          <span className="text-[#610BEF] text-[20px] font-semibold leading-[32px] ">
            {cardData?.head}
          </span>
          <h2 className="font-bold sm:text-6xl text-4xl my-4 sm:pr-[150px]">
            {cardData?.title}
          </h2>
        </div>
        <CustomerDetails cusData={cardData} />
      </div>
      <div
        className="sm:grid sm:grid-cols-2 gap-5 flex flex-col-reverse"
        style={{
          gridTemplateColumns: `${
            cardData.isNotImage ? "2.4fr 0.6fr" : "1.7fr 1.3fr"
          } `,
        }}
      >
        <div>
          {cardData.para.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <p className="mb-3 sm:mb-7 font-normal text-[17px] leading-[32px] tracking-[0.75px] text-[#4E4B66]">
                  {item}
                  {!!cardData.spanText && (
                    <span className="text-[#610BEF] text-[20px] font-semibold">
                      {cardData.spanText}
                    </span>
                  )}
                </p>
              </React.Fragment>
            );
          })}

          <CustomLink
            color={"#610BEF"}
            text="Read More"
            icon={<IoIosArrowForward />}
          />
        </div>

        {cardData.hasGradient ? (
          <GradientDiv />
        ) : (
          <Image
            src={cardData.cardImg}
            alt={cardData.cardImg}
            className="rounded-3xl"
          />
        )}
      </div>
    </div>
  );
};

export default Card;
