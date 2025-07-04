"use client";

import { NextPage } from "next";
import Image from "next/legacy/image";
import Logo from "../../assets/common/Logo.svg";
import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPhoneAlt,
  FaGlobeEurope,
} from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { setUserData } from "@/lib/feature/user/userSlice";
import { useParams } from "next/navigation";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const userData = useAppSelector((data) => data?.auth?.data);
  const dispatch = useAppDispatch();
  const [showTourDropdown, setShowTourDropdown] = useState(false);
  const [currTour, setCurrTour] = useState<any>("");
  const router = useRouter();
  const { category, id } = useParams();

  const bgClass =
    (id && id[0] === "honeymoon") || (category && category[0] === "honeymoon")
      ? "bg-[#8b2424]"
      : "bg-primary";

  // Scroll par dropdown close
  useEffect(() => {
    const handleScroll = () => {
      setShowTourDropdown(false);
      setCurrTour("");
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest(".dropdown-toggle") &&
        !target.closest(".dropdown-content")
      ) {
        setShowTourDropdown(false);
        setCurrTour("");
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="hidden lg:block">
      <header
        className={`w-full text-sm flex justify-between px-10 ${bgClass} text-white`}
      >
        <div className="flex">
          <div className="flex px-1 py-2 mx-1 items-center">
            <FaPhoneAlt />
            <p className="text-white ps-1">+971 5686523</p>
          </div>
          <div className="flex px-1 py-2 mx-1 items-center">
            <FaPhoneAlt />
            <p className="text-white ps-1">+971 5606923</p>
          </div>
        </div>

        <div className="flex">
          <div className="flex py-2 items-center">
            <Link href={"/pages/aboutus"} className="mx-2">
              About Us
            </Link>
            <Link href={"/pages/gallery"} className="cursor-pointer mx-2">
              Gallery
            </Link>
            <p className="mx-2">Brouchers</p>
          </div>
          <div className="flex py-2 items-center bg-[#FBAD17] mx-3 px-4">
            <FaFacebook className="text-xl text-white mx-2" />
            <FaTwitter className="text-xl text-white mx-2" />
            <FaLinkedin className="text-xl text-white mx-2" />
          </div>
          <div className="flex py-2 ms-8">
            {userData?.token ? (
              <button
                onClick={() => {
                  dispatch(
                    setUserData({
                      token: "",
                      name: "",
                      lname: "",
                      email: "",
                      id: null,
                    })
                  );
                  router.push("/");
                }}
                className="mx-1"
              >
                Logout
              </button>
            ) : (
              <Link href={"/pages/login"} className="mx-1">
                User login
              </Link>
            )}
          </div>
        </div>
      </header>

      <header className="w-full text-sm flex justify-between px-10 bg-white">
        <div className="flex items-center overflow-hidden">
          <Image
            src={Logo}
            alt="Main Logo"
            height={85}
            width={200}
            className="object-contain"
          />
        </div>

        <div className="bg-white-500 relative flex-1">
          <div className="text-black items-center h-full justify-center gap-x-10 flex text-base font-semibold hover:text-[#FBAD17]  ">
            <Link href="/" className="cursor-pointer font-bold">
              Home
            </Link>

            {/* All Tours Dropdown */}
            <div className="relative font-bold">
              <div
                onClick={() => setShowTourDropdown(!showTourDropdown)}
                className="flex items-center gap-1 cursor-pointer dropdown-toggle"
              >
                <p>All Tours</p>
                <IoIosArrowDown />
              </div>

              <div
                className={`${
                  showTourDropdown ? "block" : "hidden"
                } absolute z-[100] top-[40px] dropdown-content`}
              >
                <div className="bg-white flex rounded shadow-lg mt-4 overflow-hidden">
                  <ul className="py-3 px-4 min-w-[200px] space-y-7">
                    <li
                      onClick={() =>
                        setCurrTour(
                          currTour === "DesertSafari" ? "" : "DesertSafari"
                        )
                      }
                      className="hover:text-[#FBAD17] flex justify-between items-center cursor-pointer"
                    >
                      <span>Desert Safari Dubai</span>
                      <IoIosArrowForward />
                    </li>
                    <li
                      onClick={() => {
                        setCurrTour(
                          currTour === "Sightseeing" ? "" : "Sightseeing"
                        );
                        router.push("/pages/tourpackages/international");
                      }}
                      className="hover:text-[#FBAD17] flex justify-between items-center cursor-pointer"
                    >
                      <span>Sightseeing Tours</span>
                      <IoIosArrowForward />
                    </li>
                    <li
                      onClick={() =>
                        setCurrTour(currTour === "Cruise" ? "" : "Cruise")
                      }
                      className="hover:text-[#FBAD17] flex justify-between items-center cursor-pointer"
                    >
                      <span>Cruise Dinner</span>
                      <IoIosArrowForward />
                    </li>
                  </ul>

                  {currTour === "DesertSafari" && (
                    <ul className="bg-white px-4 py-4 min-w-[280px] space-y-5 border-l">
                      <li className="hover:text-[#FBAD17] cursor-pointer">
                        Morning Dune Bashing
                      </li>
                      <li className="hover:text-[#FBAD17] cursor-pointer">
                        Desert Safari with Dinner and Activities
                      </li>
                      <li className="hover:text-[#FBAD17] cursor-pointer">
                        Evening Desert Safari with Quad Bike
                      </li>
                      <li className="hover:text-[#FBAD17] cursor-pointer">
                        <Link href="/pages/rentcar">
                          Desert Safari Private Car
                        </Link>
                      </li>
                      <li className="hover:text-[#FBAD17] cursor-pointer">
                        Red Dunes Desert Safari
                      </li>
                      <li className="hover:text-[#FBAD17] cursor-pointer">
                        Overnight Desert Safari
                      </li>
                      <li className="hover:text-[#FBAD17] cursor-pointer">
                        Morning Dune Bashing with Quad Bike
                      </li>
                      <li className="hover:text-[#FBAD17] cursor-pointer">
                        Evening Desert Safari With Dune Buggy Ride double
                        sharing
                      </li>
                      <li className="hover:text-[#FBAD17] cursor-pointer">
                        VIP Evening Desert Safari with Dinner and Activities
                      </li>
                    </ul>
                  )}

                  {currTour === "Sightseeing" && (
                    <ul className="bg-white px-4 py-4 min-w-[280px] space-y-5 border-l">
                      <li className="hover:text-[#FBAD17] cursor-pointer">
                        <Link href="/pages/packagedetails/12">
                          Dubai City Tour
                        </Link>
                      </li>
                      <li className="hover:text-[#FBAD17] cursor-pointer">
                        <Link href="/pages/packagedetails/9">
                          Abu Dhabi City Tour From Dubai
                        </Link>
                      </li>
                      <li className="hover:text-[#FBAD17] cursor-pointer">
                        <Link href="/pages/packagedetails/10">
                          Six Emirates Tour
                        </Link>
                      </li>
                      <li className="hover:text-[#FBAD17] cursor-pointer">
                        <Link href="/pages/packagedetails/5">
                          Fujairah City Tour
                        </Link>
                      </li>
                      <li className="hover:text-[#FBAD17] cursor-pointer">
                        <Link href="/pages/packagedetails/21">
                          Private Hatta Moutain Tour
                        </Link>
                      </li>
                      <li className="hover:text-[#FBAD17] cursor-pointer">
                        <Link href="/pages/packagedetails/22">
                          Dubai Deluxe private City Tour
                        </Link>
                      </li>
                    </ul>
                  )}

                  {currTour === "Cruise" && (
                    <ul className="bg-white px-4 py-4 min-w-[280px] space-y-5 border-l">
                      <li className="hover:text-[#FBAD17] cursor-pointer">
                        <Link href="/pages/packagedetails/70">
                          Marina Cruise Dinner
                        </Link>
                      </li>

                      <li className="hover:text-[#FBAD17] cursor-pointer">
                        <Link href="/pages/packagedetails/80">
                          Marina Cruise Dinner 5 Star
                        </Link>
                      </li>
                      <li className="hover:text-[#FBAD17] cursor-pointer">
                        <Link href="/pages/packagedetails/81">
                          Creek Cruise Dinner 4 Star (Ramee Hotel)
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <Link href="/pages/aboutus">
              <p className="cursor-pointer font-bold">About</p>
            </Link>

            <div className="relative font-bold">
              <div
                onClick={() =>
                  setCurrTour(
                    currTour === "HolidayPackage" ? "" : "HolidayPackage"
                  )
                }
                className="flex items-center gap-1 cursor-pointer dropdown-toggle"
              >
                <Link href="/pages/hotel">
                  <p className="hover:text-[#FBAD17]">Holidays Package</p>
                </Link>
                <IoIosArrowDown />
              </div>

              <div
                className={`${
                  currTour === "HolidayPackage" ? "block" : "hidden"
                } absolute z-[100] top-[40px] bg-white rounded shadow-lg py-3 px-4 min-w-[280px] dropdown-content`}
              >
                <ul className="space-y-7 text-black">
                  <li className="hover:text-[#FBAD17] cursor-pointer">
                    <Link href="/pages/packagedetails/1">
                      Dubai 4 Days 3 Nights Package
                    </Link>
                  </li>
                  <li className="hover:text-[#FBAD17] cursor-pointer">
                    <Link href="/pages/packagedetails/2">
                      Dubai 5 Days 4 Nights Package
                    </Link>
                  </li>
                  <li className="hover:text-[#FBAD17] cursor-pointer">
                    <Link href="/pages/packagedetails/6">
                      Dubai 6 Days 5 Nights Package
                    </Link>
                  </li>
                  <li className="hover:text-[#FBAD17] cursor-pointer">
                    <Link href="/pages/packagedetails/4">
                      Dubai 7 Days 6 Nights Package
                    </Link>
                  </li>
                  <li className="hover:text-[#FBAD17] cursor-pointer">
                    <Link href="/pages/packagedetails/7">
                      Dubai 8 Days 7 Nights Package
                    </Link>
                  </li>
                  <li className="hover:text-[#FBAD17] cursor-pointer">
                    <Link href="/pages/packagedetails/8">
                      Dubai 9 Days 8 Nights Package
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative font-bold">
              <div
                onClick={() =>
                  setCurrTour(currTour === "ComboTours" ? "" : "ComboTours")
                }
                className="flex items-center gap-1 cursor-pointer dropdown-toggle"
              >
                <p>Combo Tours</p>
                <IoIosArrowDown />
              </div>

              <div
                className={`${
                  currTour === "ComboTours" ? "block" : "hidden"
                } absolute z-[100] top-[40px] bg-white rounded shadow-lg py-3 px-4 min-w-[320px] dropdown-content`}
              >
                <ul className="space-y-7 text-black">
                  <li className="hover:text-[#FBAD17] cursor-pointer">
                    Desert Safari + Dhow Cruise Dinner (4 Star)
                  </li>
                  <li className="hover:text-[#FBAD17] cursor-pointer">
                    Dubai City Tour + Desert Safari
                  </li>
                  <li className="hover:text-[#FBAD17] cursor-pointer">
                    Desert Safari + Marina Cruise Dinner
                  </li>
                  <li className="hover:text-[#FBAD17] cursor-pointer">
                    Dubai City Tour + Desert Safari + Dhow Cruise Dinner (4
                    Star)
                  </li>
                  <li className="hover:text-[#FBAD17] cursor-pointer">
                    Dubai City Tour + Desert Safari + Marina Cruise Dinner
                  </li>
                  <li className="hover:text-[#FBAD17] cursor-pointer">
                    <Link href="/pages/visa">
                      Dubai City Tour + Desert Safari + Marina Cruise Dinner +
                      Abu Dhabi City Tour
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <Link href="/pages/contactus" className="cursor-pointer font-bold">
              Contact Us
            </Link>

            <Link
              href="/pages/offer"
              className={`${bgClass} px-4 py-2 rounded shadow-lg cursor-pointer text-white`}
            >
              Book & Go
            </Link>
          </div>

          <div
            style={{
              borderTop: "25px solid white",
              borderLeft: "24px solid transparent",
              borderRight: "24px solid transparent",
              bottom: "-20px",
            }}
            className="w-full absolute z-10 bg-transparent-500 items-center"
          ></div>
        </div>

        <div className="flex">
          {/* <div className="flex items-center ms-8">
            <p className="flex items-center text-black mx-1">
              <FaGlobeEurope className="mx-1" />
              English
            </p>
            <p>|</p>
            <p className="text-black mx-1">USD</p>
          </div> */}
        </div>
      </header>
    </div>
  );
};

export default Page;
