"use client";
import Image from "next/image";
import { useState } from "react";
import mobile_download from "../../assets/footer/mobile_app_download.png";
import logo from "../../assets/common/Logo.png";
import sc0 from "../../assets/footer/01.svg";
import sc1 from "../../assets/footer/02.svg";
import sc2 from "../../assets/footer/03.svg";
import sc3 from "../../assets/footer/04.svg";
import { NavigationRows } from "../../assets/Strings/NavigationString";
import LogoDetails from "./LogoDetails";
import OurCompany from "./OurCompany";
import QuickLinks from "./QuickLinks";
import OurNewsLetter from "./OurNewsLetter";

const Footer = () => {
  return (
    <div className="text-black bg-white relative items-center flex flex-col">
      <div className="flex items-center justify-center flex-col relative pt-16 pb-16">
        <Image
          src={mobile_download}
          alt="not_found_image"
          className="w-[90%]"
        />
      </div>
      <div className=" w-[90%] mb-5 flex flex-col lg:flex-row lg:flex-wrap justify-between">
        {NavigationRows.map((item, i) => {
          if (item === "LogoDetails") {
            return <LogoDetails key={"rendering-id-" + i} />
          } else if (item === "OurCompany") {
            return <OurCompany key={"rendering-id-" + i} />
          } else if (item === "QuickLinks") {
            return <QuickLinks key={"rendering-id-" + i} />
          } else if (item === "NewsLetter") {
            return <OurNewsLetter key={"rendering-id-" + i} />
          }
          return <div key={"rendering-id-" + i} ></div>;
        })}
      </div>
    </div>
  );
};

export default Footer;
