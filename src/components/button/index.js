import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Button = ({ keyProp }) => {
  return (
    <>
      {["Sign In", "View All Posts", "Subscribe to RSS"].map((item, index) =>
        index === keyProp ? (
          <button
            key={index}
            className={`font-medium text-xl leading-24 tracking-tight text-center flex items-center justify-center text-white rounded-full px-[24px] py-[16px] gap-5 ${
              keyProp === 1 ? "bg-[#4E4B66] mb-12" : "bg-[#610BEF]"
            }`}
          >
            {item}
            <IoIosArrowForward />
          </button>
        ) : null
      )}
    </>
  );
};

export default Button;
