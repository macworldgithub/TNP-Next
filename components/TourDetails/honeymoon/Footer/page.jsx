"use client";
import Image from "next/image";
import mobile_download from "../../../../assets/footer/mobile_app_download.png";
import { NavigationRows } from "../../../../assets/Strings/NavigationString";
import { useEffect, useState } from "react";
import LogoDetails from "@/components/Footer/LogoDetails";
import OurCompany from "@/components/Footer/OurCompany";
import QuickLinks from "@/components/Footer/QuickLinks";
import OurNewsLetter from "@/components/Footer/OurNewsLetter";
import Affiliations from "@/components/Footer/Affiliations";

const FooterBg = ({}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="text-black w-full relative pb-4 pt-8 items-center flex flex-col backdrop-blur-sm">
      <Affiliations />

      <div className=" w-[90%] mb-5 flex flex-col lg:flex-row lg:flex-wrap justify-between">
        {NavigationRows.map((item, i) => {
          if (item === "LogoDetails") {
            return <LogoDetails key={"rendering-id-" + i} />;
          } else if (item === "OurCompany") {
            return <OurCompany key={"rendering-id-" + i} />;
          } else if (item === "QuickLinks") {
            return <QuickLinks key={"rendering-id-" + i} />;
          } else if (item === "NewsLetter") {
            return <OurNewsLetter key={"rendering-id-" + i} />;
          }
          return <div key={"rendering-id-" + i}></div>;
        })}
      </div>
      <div className="w-[90%] border h-[1px] bg-gray-300"></div>
      <div className="w-[90%] flex flex-col md:flex-row justify-between">
        <div>
          <p className="font-medium mb-4">
            {" "}
            © Copyright <span className="text-[#00ADEE]">©2023</span> . All
            Rights Reserved Copyright
          </p>
        </div>
        <div className="flex gap-4 lg:gap-7">
          <p className="font-medium">Terms and conditions</p>
          <p className="font-medium">Privacy policy</p>
          <p className="font-medium">Login / Signup</p>
        </div>
      </div>
    </div>
  );
};

export default FooterBg;
