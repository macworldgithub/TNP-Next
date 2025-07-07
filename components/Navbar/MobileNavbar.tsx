"use client";
import Image from "next/image";
import Logo from "../../assets/common/Logo.svg";
import { IoMdMenu } from "react-icons/io";
import { Menu } from "antd";
import type { GetProp, MenuProps } from "antd";
import React, { useState } from "react";
import { Drawer } from "antd";
import { useRouter } from "next/navigation"; // ✅ Added for routing

type MenuItem = GetProp<MenuProps, "items">[number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Home", "/"),
  getItem("All Tours", "alltours", null, [
    getItem("Desert Safari Dubai", "desert", null, [
      getItem("Morning Dune Bashing", "/pages/packagedetails/90"),
      getItem(
        "Desert Safari with Dinner and Activities",
        "/pages/packagedetails/94"
      ),
      getItem(
        "Evening Desert Safari with Quad Bike",
        "/pages/packagedetails/96"
      ),
      getItem("Desert Safari Private Car", "/pages/packagedetails/98"),
      getItem("Red Dunes Desert Safari", "/pages/packagedetails/100"),
      getItem("Overnight Desert Safari", "/pages/packagedetails/107"),
      getItem(
        "Morning Dune Bashing with Quad Bike",
        "/pages/packagedetails/106"
      ),
      getItem(
        "Evening Desert Safari With Dune Buggy Ride double sharing",
        "/pages/packagedetails/104"
      ),
      getItem(
        "VIP Evening Desert Safari with Dinner and Activities",
        "/pages/packagedetails/99"
      ),
    ]),
    getItem("Sightseeing Tours", "sightseeing", null, [
      getItem("Dubai City Tour", "/pages/packagedetails/12"),
      getItem("Abu Dhabi City Tour From Dubai", "/pages/packagedetails/9"),
      getItem("Six Emirates Tour", "/pages/packagedetails/10"),
      getItem("Fujairah City Tour", "/pages/packagedetails/5"),
      getItem("Private Hatta Moutain Tour", "/pages/packagedetails/21"),
      getItem("Dubai Deluxe private City Tour", "/pages/packagedetails/22"),
    ]),
    getItem("Cruise Dinner", "cruise", null, [
      getItem("Marina Cruise Dinner", "/pages/packagedetails/70"),
      getItem("Marina Cruise Dinner 5 Star", "/pages/packagedetails/80"),
      getItem(
        " Creek Cruise Dinner 4 Star (Ramee Hotel)",
        "/pages/packagedetails/81"
      ),
    ]),
  ]),
  getItem("About", "/pages/aboutus"),
  getItem("Holidays Package", "holiday", null, [
    getItem("Dubai 4 Days 3 Nights Package", "/pages/packagedetails/1"),
    getItem("Dubai 5 Days 4 Nights Package", "/pages/packagedetails/2"),
    getItem("Dubai 6 Days 5 Nights Package", "/pages/packagedetails/6"),
    getItem("Dubai 7 Days 6 Nights Package", "/pages/packagedetails/4"),
    getItem("Dubai 8 Days 7 Nights Package", "/pages/packagedetails/7"),
    getItem("Dubai 9 Days 8 Nights Package", "/pages/packagedetails/8"),
  ]),
  getItem("Combo Tours", "combo", null, [
    getItem(
      "Desert Safari + Dhow Cruise Dinner (4 Star)",
      "/pages/packagedetails/84"
    ),
    getItem("Dubai City Tour + Desert Safari", "/pages/packagedetails/91"),
    getItem("Desert Safari + Marina Cruise Dinner", "/pages/packagedetails/92"),
    getItem(
      "Dubai City Tour + Desert Safari + Dhow Cruise Dinner (4 Star)",
      "/pages/packagedetails/93"
    ),
    getItem(
      "Dubai City Tour + Desert Safari + Marina Cruise Dinner",
      "/pages/packagedetails/95"
    ),
    getItem(
      "Dubai City Tour + Desert Safari + Marina Cruise Dinner + Abu Dhabi City Tour",
      "/pages/packagedetails/97"
    ),
  ]),
  getItem("Contact Us", "/pages/contactus"),
  getItem("Book & Go", "/pages/offer"),
];

const MobileNavbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="bg-white py-3 min-w-min flex justify-between lg:hidden w-[100%] items-center px-10">
        <div className="flex py-2 items-center">
          <Image src={Logo} alt="logo image" width={150} />
        </div>
        <IoMdMenu
          onClick={showDrawer}
          className="cursor-pointer text-3xl text-primary"
        />
      </div>
      <Drawer
        title="Nouvelliste"
        className="px-0"
        onClose={onClose}
        open={open}
      >
        <Menu
          className="w-full"
          theme="light"
          mode="inline"
          items={items}
          onClick={({ key }) => {
            router.push(key as string); // ✅ Navigate to route
            setOpen(false); // ✅ Close drawer
          }}
        />
      </Drawer>
    </>
  );
};

export default MobileNavbar;
