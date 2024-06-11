"use client";
import React, { useState } from "react";
import ContentWrapper from "../wrapper";
import Button from "../button";

const Navbar = () => {
  const [hamOpen, setHamOpen] = useState(false);

  const handleClick = () => {
    setHamOpen(!hamOpen);
  };

  return (
    <ContentWrapper>
      <div className="flex items-center justify-between py-4 sm:mb-0 mb-[100px]">
        <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
          <div className="child flex items-center justify-center w-auto max-w-[204px] h-auto max-h-[48px] flex-wrap gap-3">
            <svg
              width="49"
              height="48"
              viewBox="0 0 49 48"
              className="w-10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.1809 2.35878C20.9476 -0.786261 28.0524 -0.78626 33.8191 2.35878L39.6809 5.55568C45.4476 8.70072 49 14.513 49 20.8031V27.1969C49 33.487 45.4476 39.2993 39.6809 42.4443L33.8191 45.6412C28.0524 48.7862 20.9476 48.7862 15.1809 45.6412L9.31911 42.4443C3.55243 39.2993 0 33.487 0 27.1969V20.8031C0 14.513 3.55243 8.70073 9.31911 5.55568L15.1809 2.35878ZM24.265 10.3555C21.125 10.1968 21.125 10.1981 21.1249 10.1994L21.1248 10.2023L21.1244 10.2084L21.1238 10.2223L21.1223 10.2572C21.1212 10.2835 21.1201 10.3159 21.1192 10.3541C21.1174 10.4306 21.1163 10.5305 21.1176 10.6513C21.1201 10.8925 21.1322 11.2202 21.1681 11.6136C21.2394 12.3941 21.4077 13.4685 21.8026 14.6554C22.5971 17.0437 24.373 20.0319 28.1927 21.7723C29.989 22.5907 30.8536 23.9591 31.2956 25.2877C31.519 25.9592 31.618 26.5833 31.6594 27.0367C31.6798 27.2602 31.6854 27.4333 31.6865 27.5387C31.6871 27.5911 31.6865 27.6259 31.6861 27.6409C31.6861 27.6451 31.686 27.6477 31.6859 27.6487C31.6859 27.6495 31.6859 27.6492 31.686 27.648L31.6863 27.6396L31.6867 27.6324L31.6869 27.628L31.687 27.6256C31.6871 27.6243 31.6872 27.623 34.8271 27.7817C37.9671 27.9404 37.9671 27.9391 37.9672 27.9378L37.9674 27.9349L37.9677 27.9288L37.9684 27.9149L37.9699 27.88C37.9709 27.8537 37.972 27.8213 37.9729 27.7831C37.9747 27.7066 37.9758 27.6067 37.9746 27.4859C37.972 27.2447 37.96 26.917 37.924 26.5236C37.8527 25.7431 37.6844 24.6687 37.2896 23.4818C36.495 21.0935 34.7191 18.1053 30.8994 16.3649C29.1031 15.5465 28.2385 14.1781 27.7965 12.8495C27.5731 12.178 27.4741 11.5539 27.4327 11.1005C27.4123 10.877 27.4067 10.7039 27.4056 10.5985C27.405 10.5461 27.4056 10.5113 27.406 10.4963C27.4061 10.4888 27.4063 10.4864 27.4062 10.4892L27.4058 10.4976L27.4054 10.5048L27.4052 10.5092L27.4051 10.5116C27.405 10.5129 27.4049 10.5142 24.265 10.3555ZM13.9975 20.4161C10.8576 20.2574 10.8575 20.2587 10.8574 20.2601L10.8573 20.2629L10.857 20.269L10.8563 20.2829L10.8548 20.3178C10.8538 20.3441 10.8527 20.3765 10.8518 20.4148C10.85 20.4912 10.8488 20.5911 10.8501 20.7119C10.8526 20.9531 10.8647 21.2808 10.9006 21.6742C10.9719 22.4547 11.1402 23.5292 11.5351 24.716C12.3296 27.1043 14.1056 30.0925 17.9253 31.8329C19.7216 32.6513 20.5862 34.0197 21.0281 35.3483C21.2516 36.0198 21.3505 36.6439 21.3919 37.0973C21.4124 37.3208 21.418 37.4939 21.4191 37.5993C21.4196 37.6517 21.419 37.6865 21.4187 37.7015C21.4185 37.709 21.4184 37.7114 21.4185 37.7086L21.4189 37.7002L21.4192 37.693L21.4195 37.6886L21.4196 37.6862C21.4197 37.6849 21.4197 37.6836 24.5597 37.8423C27.6996 38.001 27.6997 37.9997 27.6998 37.9984L27.6999 37.9955L27.7002 37.9895L27.7009 37.9755L27.7024 37.9406C27.7034 37.9143 27.7045 37.8819 27.7054 37.8437C27.7072 37.7673 27.7084 37.6674 27.7071 37.5465C27.7046 37.3053 27.6925 36.9776 27.6566 36.5842C27.5853 35.8037 27.417 34.7293 27.0221 33.5424C26.2276 31.1541 24.4516 28.1659 20.6319 26.4255C18.8356 25.6071 17.971 24.2387 17.5291 22.9102C17.3056 22.2386 17.2067 21.6146 17.1653 21.1612C17.1449 20.9376 17.1392 20.7645 17.1381 20.6591C17.1376 20.6067 17.1382 20.5719 17.1385 20.5569L17.1387 20.5499L17.1383 20.5582L17.138 20.5655L17.1377 20.5699L17.1376 20.5723C17.1375 20.5735 17.1375 20.5748 13.9975 20.4161Z"
                fill="#610BEF"
              />
            </svg>
            <h2 className="font-medium text-[20px] text-[#610BEF]">Appname</h2>
          </div>
        </div>
        <div>
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
            <Button keyProp={0} />
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
