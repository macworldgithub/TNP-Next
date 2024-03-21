"use client";
import Image from "next/image";
import Background_img from "../../../assets/customer_review/Rectangle 19478.png";
import Information_Icon from "../../../assets/customer_review/Vector.png";
import Tour_Icon from "../../../assets/customer_review/Group.png";
import Location_Icon from "../../../assets/customer_review/map.png";
import Review_Icon from "../../../assets/customer_review/Group (1).png";
import Gallery_Icon from "../../../assets/customer_review/Vector (1).png";

import ProgressBar from "./progressBar";
import RatingProgressBar from "./ratingProgressBar";
import Rating from "./rating";

import Ticket_Dropdown from "./dropdown";

export default function CustomerReview() {
  return (
    <div className="pb-10 bg-white text-black">
      <div className="relative">
        <Image className="w-full" src={Background_img} alt=".." />
      </div>
      <div className="w-5/6 bg-white p-4 relative font-medium -mt-11 z-50 m-auto flex items-center justify-around rounded-full shadow-2xl">
        <div className="flex items-center gap-2 p-3 hover:bg-[#F4F6F8] cursor-pointer rounded-full">
          <Image src={Information_Icon} alt=".." />
          <p>Information</p>
        </div>
        <div className="flex items-center gap-2 p-3 hover:bg-[#F4F6F8] cursor-pointer rounded-full">
          <Image src={Tour_Icon} alt=".." />
          <p>Tour Planning</p>
        </div>
        <div className="flex items-center gap-2 p-3 hover:bg-[#F4F6F8] cursor-pointer rounded-full">
          <Image src={Location_Icon} alt=".." />
          <p>Location Share</p>
        </div>
        <div className="flex items-center gap-2 p-3 hover:bg-[#F4F6F8] cursor-pointer rounded-full">
          <Image src={Review_Icon} alt=".." />
          <p>Reviews</p>
        </div>
        <div className="flex items-center gap-2 p-3 hover:bg-[#F4F6F8] cursor-pointer rounded-full">
          <Image src={Gallery_Icon} alt=".." />
          <p>Shot Gallery</p>
        </div>
      </div>
      <div className="flex justify-center gap-9 mt-10">
        <div className="w-[54%] px-8 border-2 rounded-md py-10">
          <h2 className="text-xl font-bold mt-4 mb-4 border-l-2 border-l-[#1677FF] px-1">
            Customer Review
          </h2>
          <div>
            <div className="flex gap-14">
              <div>
                <ProgressBar />
              </div>
              <div className="flex gap-4 w-full flex-col">
                <div>
                  <h3 className=" font-bold">Comfort</h3>
                  <div className="flex justify-between">
                    <p className="font-medium">Rating 4.8</p>
                    <Rating />
                  </div>
                  <RatingProgressBar />
                </div>
                <div>
                  <h3 className=" font-bold">Comfort</h3>
                  <div className="flex justify-between">
                    <p className="font-medium">Rating 4.8</p>
                    <Rating />
                  </div>
                  <RatingProgressBar />
                </div>
                <div>
                  <h3 className=" font-bold">Comfort</h3>
                  <div className="flex justify-between">
                    <p className="font-medium">Rating 4.8</p>
                    <Rating />
                  </div>
                  <RatingProgressBar />
                </div>
                <div>
                  <h3 className=" font-bold">Comfort</h3>
                  <div className="flex justify-between">
                    <p className="font-medium">Rating 4.8</p>
                    <Rating />
                  </div>
                  <RatingProgressBar />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[26%] bg-[#F8F8F8] px-8 py-12">
          <h2 className="text-lg font-bold mt-4 mb-4 border-l-2 border-l-[#1677FF] px-1">
            Book This Tour
          </h2>
          <div>
            <input className="w-full" type="datetime-local" name="" id="" />
          </div>
          <div className="w-full flex gap-4 mt-4">
            <h2 className=" font-semibold">Time:</h2>
            <input className="w-full" type="time" name="" id="" />
          </div>
          <div className="w-full mt-4">
            <h2 className="font-semibold">Tickets:</h2>
            <div className="flex items-center justify-between my-2">
              <p className="w-full text-[13px] text-gray-400">
                Children(0-12 years)$129
              </p>
              <Ticket_Dropdown />
            </div>
            <div className="flex items-center justify-between my-2">
              <p className="w-full text-[13px] text-gray-400">
                Youth(13-17 years)$169
              </p>
              <Ticket_Dropdown />
            </div>
            <div className="flex items-center justify-between">
              <p className="w-full text-[13px] text-gray-400">
                Adult (18+ years)$189.00
              </p>
              <Ticket_Dropdown />
            </div>
          </div>
          <div className="w-full gap-4 mt-4">
            <h2 className=" font-semibold">Add Extra:</h2>
            <div className="flex gap-x-2 mt-2">
              <input type="checkbox" name="" id="" />
              <p className="text-gray-400">Service per booking</p>
            </div>
            <div>
              <div className="mt-2">
                <div className="flex gap-x-2">
                  <input type="checkbox" name="" id="" />
                  <p className="text-gray-400">Service per booking</p>
                </div>
                <div className="ml-5">
                  <div className="flex gap-x-6">
                    <p className="text-gray-400">Adult:</p>
                    <h3>$18.00</h3>
                  </div>
                  <div className="flex gap-x-6">
                    <p className="text-gray-400">Adult:</p>
                    <h3>$18.00</h3>
                  </div>
                  <div className="flex gap-x-6">
                    <p className="text-gray-400">Adult:</p>
                    <h3>$18.00</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4 mb-6">
            <h2 className=" font-semibold">Total:</h2>
            <h3 className="text-[#1677FF] font-bold">$130.00</h3>
          </div>
          <button className="w-11/12 py-3 flex justify-center m-auto rounded-sm text-white bg-[#1677FF]">Procced Booking</button>
        </div>
      </div>
    </div>
  );
}
