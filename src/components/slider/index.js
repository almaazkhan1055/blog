import { Swiper, SwiperSlide } from "swiper/react";
import ReadMore from "../readMore/ReadMore";

import "swiper/css";

const Slider = () => {
  const swiperData = [
    {
      heading: "Terminal is now available in the UK and Ireland",
      date: "August 10,  2021",
      para: "Businesses can now accept in-person payments in the UK and Ireland with Terminal's flexible APIs, SDKs, and new pre-certified card readers.",
      link: <ReadMore />,
    },
    {
      heading: "Introducing quotes",
      date: "July 14,  2021",
      para: "Share a price estimate with a customer and convert it to a subscription or invoice once the quote has been approved.",
      link: <ReadMore />,
    },
    {
      heading: "Issuing now available in Europe",
      date: "July 19,  2021",
      para: "Stripe Issuing lets European businesses programmatically create, manage, and distribute payment cards.",
      link: <ReadMore />,
    },
    {
      heading: "Connect platforms",
      date: "August 10,  2021",
      para: "You can now use separate charges and transfers and account debits with your Express and Custom connected accounts.",
      link: <ReadMore />,
    },
    {
      heading: "Afterpay",
      date: "August 10,  2021",
      para: "Boost sales in minutes with Afterpay on Stripe—Offering buy now, pay later options like Afterpay can give your buyers more flexibility at checkout.",
      link: <ReadMore />,
    },
    {
      heading: "Issuing now available in Europe",
      date: "July 19,  2021",
      para: "Businesses can now accept in-person payments in the UK and Ireland with Terminal's flexible APIs, SDKs, and new pre-certified card readers.",
      link: <ReadMore />,
    },
  ];

  return (
    <div
      className="grid grid-flow-col gap-4 overflow-x-auto py-4 scrollbar-hidden"
      style={{
        gridTemplateColumns: "repeat(4, 335px)",
      }}
    >
      {swiperData.map((item) => {
        return (
          <div className="bg-[#610BEF] rounded-2xl text-white mr-3 p-10 h-[480px]">
            <p className="font-semibold text-[24px] text-[#FCFCFC] mb-[40px]">
              {item.heading}
            </p>
            <p className=" text-lg text-[#FCFCFC]  mb-[40px]">{item.date}</p>
            <p className=" text-[18px] text-[#FCFCFC]  mb-[40px]">
              {item.para}
            </p>
            <ReadMore color={"#FCFCFC"} />
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
