"use client";
import Image from "next/image";
import mobile_download from "../../assets/footer/mobile_app_download.png";
import { NavigationRows } from "../../assets/Strings/NavigationString";
import LogoDetails from "./LogoDetails";
import OurCompany from "./OurCompany";
import QuickLinks from "./QuickLinks";
import OurNewsLetter from "./OurNewsLetter";
import Affiliations from "./Affiliations";

const Footer = () => {
  return (
    <div className="text-black bg-white relative pb-4 pt-8 items-center flex flex-col">
      <Affiliations />
      <div className="flex items-center justify-center flex-col relative pt-20 pb-16">
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
