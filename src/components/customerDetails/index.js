import React from "react";
import Image from "next/image";

const CustomerDetails = ({ cusData }) => {
  return (
    <>
      <div className="flex flex-col items-start gap-4">
        <span className="font-normal text-[17px] text-[#A0A3BD] ">
          {cusData.date}
        </span>
        <div className="flex items-center gap-4 my-8 sm:m-0">
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden object-cover">
            <Image
              alt={cusData.customerImg}
              src={cusData.customerImg}
              layout="responsive"
              width={50}
              height={50}
            />
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-medium text-[17px] ">{cusData.Name}</span>
            <span className="font-normal text-[17px] text-[#A0A3BD] ">
              {cusData.post}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerDetails;
