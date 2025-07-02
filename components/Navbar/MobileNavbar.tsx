"use client";
import Image from "next/image";
import Logo from "../../assets/common/Logo.svg";
import { IoMdMenu } from "react-icons/io";
import { Menu, Switch } from "antd";
import type { GetProp, MenuProps } from "antd";

import React, { useState } from "react";
import { Drawer } from "antd";

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
  getItem("Home", "home"),
  getItem("All Tours", "alltours", null, [
    getItem("Desert Safari Dubai", "desert", null, [
      getItem("Morning Dune Bashing", "desert1"),
      getItem("Desert Safari with Dinner and Activities", "desert2"),
      getItem("Evening Desert Safari with Quad Bike", "desert3"),
      getItem("Desert Safari Private Car", "desert4"),
      getItem("Red Dunes Desert Safari", "desert5"),
      getItem("Overnight Desert Safari", "desert6"),
      getItem("Morning Dune Bashing with Quad Bike", "desert7"),
      getItem(
        "Evening Desert Safari With Dune Buggy Ride double sharing",
        "desert8"
      ),
      getItem(
        "VIP Evening Desert Safari with Dinner and Activities",
        "desert9"
      ),
    ]),
    getItem("Sightseeing Tours", "sightseeing", null, [
      getItem("Dubai City Tour", "sight1"),
      getItem("Abu Dhabi City Tour From Dubai", "sight2"),
      getItem("Six Emirates Tour", "sight3"),
      getItem("Fujairah City Tour", "sight4"),
      getItem("Private Hatta Moutain Tour", "sight5"),
      getItem("Dubai Deluxe private City Tour", "sight6"),
    ]),
    getItem("Cruise Dinner", "cruise", null, [
      getItem("Marina Cruise Dinner", "cruise1"),
      getItem("Creek Cruise Dinner", "cruise2"),
    ]),
  ]),
  getItem("About", "about"),
  getItem("Holidays Package", "holiday", null, [
    getItem("Dubai 4 Days 3 Nights Package", "holiday1"),
    getItem("Dubai 5 Days 4 Nights Package", "holiday2"),
    getItem("Dubai 6 Days 5 Nights Package", "holiday3"),
    getItem("Dubai 7 Days 6 Nights Package", "holiday4"),
    getItem("Dubai 8 Days 7 Nights Package", "holiday5"),
    getItem("Dubai 9 Days 8 Nights Package", "holiday6"),
  ]),
  getItem("Combo Tours", "combo", null, [
    getItem("Desert Safari + Dhow Cruise Dinner (4 Star)", "combo1"),
    getItem("Dubai City Tour + Desert Safari", "combo2"),
    getItem("Desert Safari + Marina Cruise Dinner", "combo3"),
    getItem(
      "Dubai City Tour + Desert Safari + Dhow Cruise Dinner (4 Star)",
      "combo4"
    ),
    getItem("Dubai City Tour + Desert Safari + Marina Cruise Dinner", "combo5"),
    getItem(
      "Dubai City Tour + Desert Safari + Marina Cruise Dinner + Abu Dhabi City Tour",
      "combo6"
    ),
  ]),
  getItem("Contact Us", "contact"),
  getItem("Book & Go", "book"),
];

const MobileNavbar: React.FC = () => {
  const [open, setOpen] = useState(false);

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
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          theme={"light"}
          mode={"inline"}
          items={items}
        />
      </Drawer>
    </>
  );
};

export default MobileNavbar;
