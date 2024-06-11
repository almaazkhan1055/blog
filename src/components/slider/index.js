import CustomLink from "../CustomLink";
import { FaArrowRight } from "react-icons/fa6";
import "swiper/css";
import { sliderData } from "./sliderData";

const Slider = () => {
  return (
    <div
      className="grid grid-flow-col gap-4 overflow-x-auto py-4 scrollbar-hidden"
      style={{
        gridTemplateColumns: "repeat(6, 335px)",
      }}
    >
      {sliderData.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col justify-between bg-[#610BEF] rounded-2xl text-white mr-3 p-10"
          >
            <div>
              <p className="font-semibold text-[24px] text-[#FCFCFC] mb-[20px]">
                {item.heading}
              </p>
              <p className=" text-lg text-[#FCFCFC]  mb-[20px]">{item.date}</p>
            </div>

            <p className=" text-[18px] text-[#FCFCFC]  mb-[40px]">
              {item.para}
            </p>
            <CustomLink
              color={"#FCFCFC"}
              text={"Read More"}
              icon={<FaArrowRight />}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
