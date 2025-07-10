"use client";
import Image from "next/image";
import mobile_download from "../../assets/footer/mobile_app_download.png";
import { NavigationRows } from "../../assets/Strings/NavigationString";
import LogoDetails from "./LogoDetails";
import OurCompany from "./OurCompany";
import QuickLinks from "./QuickLinks";
import OurNewsLetter from "./OurNewsLetter";
import Affiliations from "./Affiliations";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

// ✅ New: Import icons
import visaIcon from "../../assets/footer/visa.png";
import ucbIcon from "../../assets/footer/ucb.png";
import discoverIcon from "../../assets/footer/discover.png";

const Footer = () => {
  const params = useParams();
  const { category, id } = useParams();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  if (params?.category && params.category[0] === "honeymoon") return null;

  const bgClass =
    (id && id[0] === "honeymoon") || (category && category[0] === "honeymoon")
      ? "bg-[#fff5fb]"
      : "bg-white";

  return (
    <div
      className={`text-black ${bgClass} relative pb-4 pt-8 items-center ${
        id && id[0] === "honeymoon" ? "hidden" : "flex"
      } flex-col`}
    >
      <Affiliations />

      <div className="w-[90%] mb-5 flex flex-col lg:flex-row lg:flex-wrap justify-between">
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

      <div className="w-[90%] flex flex-col md:flex-row justify-between items-center">
        <div>
  <p className="font-medium mb-4">
    © Copyright <span className="text-[#0a0a0a]">©2023</span>{" "}
    <a
      href="https://macworldtechnology.com/"
      className="text-[#0c0c0c] "
      target="_blank"
      rel="noopener noreferrer"
    >
      macworldtechnology.com
    </a>
  </p>
</div>


        {/* ✅ Replaced text with icons */}
        <div className="flex gap-4 lg:gap-7 items-center">
          <Image src={visaIcon} alt="Visa" className="w-12 h-auto" />
          <Image src={ucbIcon} alt="UCB" className="w-12 h-auto" />
          <Image src={discoverIcon} alt="Discover" className="w-12 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
