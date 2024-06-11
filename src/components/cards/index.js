import React from "react";
import CustomerDetails from "../customerDetails";
import Image from "next/image";
import ReadMore from "../readMorebtn";
import GradientDiv from "../gradient";

const Cards = ({ corporateData }) => {
  return (
    <div className="w-full py-[8%]">
      <div className="sm:flex sm:justify-between sm:items-baseline ">
        <div className="sm:w-[72%] my-8">
          <span className="text-[#610BEF] text-[20px] font-semibold leading-[32px] tracking-[0.75px]">
            {corporateData.head}
          </span>
          <h2
            className="font-bold xs:text-6xl 
          text-4xl  my-4"
          >
            {corporateData.title}
          </h2>
        </div>
        <CustomerDetails cusData={corporateData} />
      </div>
      {corporateData.key === "no-flex" ? (
        <div>
          <div>
            {corporateData.key === 6 ? (
              <p className="font-normal text-[17px] leading-[32px] tracking-[0.75px] text-[#4E4B66]">
                {corporateData.para[0]}
                <span className="text-[#610BEF] text-[20px] font-semibold">
                  PaymentIntents API.
                </span>
                <br />
                <span className="mt-5">{corporateData.para[1]}</span>
              </p>
            ) : (
              <p className="font-normal text-[17px] leading-[32px] tracking-[0.75px] text-[#4E4B66]">
                {corporateData.para[0]}
                <br />
                <span className="mt-5">{corporateData.para[1]}</span>
              </p>
            )}

            <ReadMore color={"#610BEF"} />
          </div>
          {corporateData.key === 5 ? (
            <div className="">
              <GradientDiv />
            </div>
          ) : (
            <Image
              src={corporateData.cardImg}
              alt={corporateData.cardImg}
              className="rounded-3xl"
            />
          )}
        </div>
      ) : (
        <div className="sm:grid sm:grid-cols-2 gap-12 flex flex-col-reverse">
          <div>
            {corporateData.key === 6 ? (
              <p className="font-normal text-[17px] leading-[32px] tracking-[0.75px] text-[#4E4B66]">
                {corporateData.para[0]}
                <span className="text-[#610BEF] text-[20px] font-semibold">
                  PaymentIntents API.
                </span>
                <br />
                <span>{corporateData.para[1]}</span>
              </p>
            ) : (
              <p className="font-normal text-[17px] leading-[32px] tracking-[0.75px] text-[#4E4B66]">
                {corporateData.para[0]}
                <br />
                <span className="mt-5">{corporateData.para[1]}</span>
              </p>
            )}

            <ReadMore color={"#610BEF"} />
          </div>
          {corporateData.cardImg ? (
            <Image
              src={corporateData.cardImg}
              alt={corporateData.cardImg}
              className="rounded-3xl"
            />
          ) : (
            <div className="">
              <GradientDiv />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cards;
