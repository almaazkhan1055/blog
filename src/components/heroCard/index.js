import React from "react";
import ReadMore from "../readMorebtn";
import Image from "next/image";
import Img from "../../../public/CardImages/customer1.jpg";
import GradientDiv from "../gradient";

function Corporate() {
  return (
    <div className="sm:mt-[80px] bg-white p-[20px] flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-1 sm:gap-0  rounded-[20px] shadow-md z-1 relative ">
      <div>
        <span className="text-[#610BEF] font-semibold text-[20px] ">
          Corporate
        </span>
        <h2
          className="font-bold leading-[30px] sm:leading-[50px] 
         sm:text-6xl text-[2rem] p-2 my-4"
        >
          Stripe Sessions
          <p>2021</p>
        </h2>
        <div className="flex items-center gap-4">
          <Image
            src={Img}
            alt={Img}
            className="w-[50px] h-[50px] rounded-full"
          />
          <div className="flex flex-col gap-1">
            <span className="font-medium text-[17px] ">Dallas Grimsley</span>

            <span className="font-normal text-[17px] text-[#A0A3BD] ">
              Product
            </span>
          </div>
        </div>
        <p className="sm:font-normal sm:text-[20px] sm:leading-[38px] my-4 text-[#4E4B66] text-base">
          We&apos;ve kicked off our virtual conference,
          <span className="text-[#610BEF]"> Stripe Sessions</span>, for payments
          leaders, developers, and founders. Read more about the new products
          and features we highlighted in our keynote and product talks.
        </p>
        <ReadMore color={"#610BEF"} />
      </div>
      <GradientDiv />
    </div>
  );
}

export default Corporate;
