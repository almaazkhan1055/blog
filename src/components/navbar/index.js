"use client";
import React, { useState } from "react";
import ContentWrapper from "../wrapper";
import Button from "../button";
import Image from "next/image";
import HeaderLogo from "../../../public/HeaderLogo.svg";

const Navbar = () => {
  const [hamOpen, setHamOpen] = useState(false);

  const handleClick = () => {
    setHamOpen(!hamOpen);
  };

  return (
    <ContentWrapper>
      <div className="flex items-center justify-between py-4 sm:mb-[150px] mb-[100px]">
        <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
          <div className="child flex items-center justify-center w-auto max-w-[204px] h-auto max-h-[48px] flex-wrap gap-3">
            <Image className="w-[500px]" src={HeaderLogo} alt="logo" />
          </div>
        </div>
        <div className="flex items-center">
          <nav
            className={`navPoints sm:w-auto  sm:flex sm:gap-4 sm:justify-center sm:items-center w-full -webkit-fill-available mt-28 sm:mt-0 sm:pl-0 pl-[40px]  ${
              hamOpen
                ? "flex flex-col bg-white text-black absolute -top-[18px] right-[16px]"
                : "hidden"
            }`}
          >
            <a
              className=" font-medium text-lg leading-[22px]  text-centerw-[85px] h-[40px] px-[22px] py-[9px] flex gap-3 rounded-tl-8"
              href=""
            >
              Home
            </a>
            <a
              className=" font-medium text-lg leading-[22px]  text-centerw-[85px] h-[40px] px-[22px] py-[9px] flex gap-3 rounded-tl-8"
              href=""
            >
              About
            </a>
            <a
              className=" font-medium text-lg leading-[22px]  text-centerw-[85px] h-[40px] px-[22px] py-[9px] flex gap-3 rounded-tl-8"
              href=""
            >
              Price
            </a>
            <a
              className=" font-medium text-lg leading-[22px]  text-centerw-[85px] h-[40px] px-[22px] py-[9px] flex gap-3 rounded-tl-8 text-center text-[#610BEF]"
              href=""
            >
              Blog
            </a>
            <Button text="Sign In" bgcolor="#610BEF" />
          </nav>
          <button onClick={() => handleClick()}>
            {hamOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="sm:hidden block w-[36px] text-[#a7a5b3] z-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="sm:hidden block z-50"
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1H23"
                  stroke="#A0A3BD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 7H23"
                  stroke="#A0A3BD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 13H23"
                  stroke="#A0A3BD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 19H23"
                  stroke="#A0A3BD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Navbar;
