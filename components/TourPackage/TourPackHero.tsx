import React from "react";
import { url } from "inspector";
import bg from "../../public/TourPackage/heroimg.png";
import Image from "next/image";
import TourpackSearch from "./TourPackSearch";
const TourPackHero = () => {
  return (
    <div className="w-full xl:h-[60vh] lg:h-[50vh] md:h-[40vh] h-[40vh] ">
      <div className=" w-full h-[60%]  relative">
        <div className="w-full h-full bg-gradient-to-r from-slate-800 to-slate-100   absolute z-10 opacity-70">
          <p className="text-4xl font-bold text-gray-900 text-center mt-16">
            Domestic
          </p>
        </div>
        <div className="absolute inset-0 z-0">
          <Image src={bg} alt="background image" layout="fill" />
        </div>
        <div className="absolute w-full z-20 xl:top-[83%] lg:top-[70%] md:top-[66%] top-[65%] ">
          <div className="w-full flex justify-center">
            <TourpackSearch />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TourPackHero;
