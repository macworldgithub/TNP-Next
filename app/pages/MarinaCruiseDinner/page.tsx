"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar/page"; // Adjust path as needed
import Footer from "@/components/Footer/page"; // Adjust path as needed
import { FaClock, FaUserFriends, FaLanguage } from "react-icons/fa";
import { BsCardChecklist } from "react-icons/bs";

const MarinaCruiseDinnerPage = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10 text-[#222]">
        <p className="text-sm text-gray-500 mb-2">
          Home &gt; Marina Cruise Dinner
        </p>
        <h1 className="text-2xl font-bold mb-6">Marina Cruise Dinner</h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Section */}
          <div className="w-full lg:w-3/4">
            {/* Icons Row */}
            <div className="flex gap-6 text-sm mb-6">
              <div className="flex items-center gap-2">
                <FaClock /> 2 Hours
              </div>
              <div className="flex items-center gap-2">
                <BsCardChecklist /> Daily Tour
              </div>
              <div className="flex items-center gap-2">
                <FaUserFriends /> 1 person
              </div>
              <div className="flex items-center gap-2">
                <FaLanguage /> English
              </div>
            </div>

            {/* Main Image */}
            <div className="mb-4">
              <Image
                src="/images/marina1.jpg"
                alt="Marina Cruise"
                width={1000}
                height={600}
                className="rounded-md w-full"
              />
            </div>

            {/* Gallery Thumbnails */}
            <div className="flex gap-2 mb-8">
              {["/images/marina1.jpg", "/images/marina2.jpg", "/images/marina3.jpg", "/images/marina4.jpg", "/images/marina5.jpg"].map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`marina-thumb-${index}`}
                  width={120}
                  height={80}
                  className="rounded-md cursor-pointer"
                />
              ))}
            </div>

            {/* Description */}
            <div className="text-sm leading-7">
              <h2 className="font-bold text-lg mb-2">Description</h2>
              <p className="font-semibold text-red-600 mb-2">
                For Cruise Reservations you must make an online payment, on cash we are unable to confirm the booking
              </p>

              <p className="mb-4">
                For an out of the crate setting background, head out for a two-hour voyage along the tasteful <strong>Dubai Marina Cruise Dinner</strong> that is stacked up style like a Venetian style channel...
              </p>

              <p className="mb-4">
                Take in the magnificent perspectives on the luxurious design of living arrangements, resorts and shopping offices...
              </p>

              <p className="mb-4">
                <strong>Best Services</strong><br />
                With complimentary beverage upon landing, incredible sustenance, shocking perspectives, and reviving excitement exercises...
              </p>

              <p className="mb-4">
                Bring a voyage down Dubai Marina, a standout amongst the most created and strikingly current seafronts on the planet...
              </p>

              <p>
                <strong>More Than Your Expectations</strong><br />
                Take a loosening up two-hour long voyage down the Dubai <strong>Marina Cruise Dinner</strong> in a conventional dhow...
              </p>
            </div>
          </div>

          {/* Right Booking Form */}
          <div className="w-full lg:w-1/4 border rounded-md shadow-sm p-4">
            <p className="text-sm text-gray-400">Not Rated</p>
            <p className="text-blue-600 font-bold text-lg mt-2">from AED 170.00</p>

            {/* Date Picker (static for now) */}
            <div className="mt-4">
              <label className="block text-sm font-semibold mb-1">Date</label>
              <input type="date" className="w-full border rounded px-3 py-2" value="2025-07-04" readOnly />
            </div>

            {/* Passenger Selectors */}
            <div className="mt-4 space-y-3">
              {["Adults", "Children", "Infant"].map((label, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{label}</span>
                  <div className="flex items-center gap-2">
                    <button className="px-2 bg-gray-200">-</button>
                    <span>0</span>
                    <button className="px-2 bg-gray-200">+</button>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              BOOK NOW
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MarinaCruiseDinnerPage;
