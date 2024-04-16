"use client";

import { NextPage } from "next";
import "./page.css";
import MyDropdown from "./dropdown";
import { useEffect, useState } from "react";
import HeroBanner from "@/components/Common/HeroBanner";
import PersonalDetails from "./PersonalDetails";

import BannerImg from "../../../assets/offer/header.svg";
import TourDetails from "./tourDetail";
import SpecialRequirments from "./specialReq";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setIsMounted(true); // Component has been mounted
  }, []);

  if (!isMounted) {
    return null; // Don't render anything until client-side hydration
  }

  return (
    <div className="relative">
      <HeroBanner UpcommingImage={BannerImg} Heading="" Subheading="" />
      <div className="w-full mb-14 flex pb-10 flex-col items-center rounded-lg md:mt-16 mx-auto md:w-11/12">
        <h2 className="mt-10 uppercase text-2xl md:text-3xl font-bold text-[#FBAD17] py-5">
          Make your own trip
        </h2>
        {counter === 0 ? (
          <PersonalDetails />
        ) : counter === 1 ? (
          <TourDetails />
        ) : (
          <SpecialRequirments />
        )}

        <div
          className={`w-11/12 md:w-[700px] px-2 md:px-0 flex ${
            counter === 0 ? "justify-end" : "justify-between"
          } mt-10`}>
          {counter >= 1 && (
            <button
              onClick={() => setCounter(counter - 1)}
              className="py-2 px-12 bg-[#00ADEE] rounded-sm text-sm text-white">
              BACK
            </button>
          )}
          {counter < 2 && (
            <button
              onClick={() => setCounter(counter + 1)}
              className="py-2 px-12 bg-[#00ADEE] rounded-sm text-sm text-white">
              NEXT
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
