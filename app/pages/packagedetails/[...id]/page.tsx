"use client";
import data from "@/Data/PackageData";
import { getSinglePackage } from "@/app/actions/tourpackages";
import Cost from "@/components/Domestics/Cost";
import DomesticForm from "@/components/Domestics/DomesticForm";
import HeroDomestic from "@/components/Domestics/HeroDomestic";
import Highlights from "@/components/Domestics/Highlights";
import Itinerary from "@/components/Domestics/Itinerary";
import CarouselSlider from "@/components/Domestics/carousel";
import Overview from "@/components/Domestics/overview";
import { Spin } from "antd";
import { useEffect, useState } from "react";
import FeaturedListings from "@/components/TourPackage/FeaturedListings";
import TourPackHero from "@/components/TourPackage/TourPackHero";
import Honeymoon from "@/components/TourDetails/honeymoon/honeymoon";
import { NextPage } from "next";
import { useParams } from "next/navigation";
import { FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa";

interface Props {}

interface PackageStructure {
  package_id: number;
  package_name: string;
  package_total_persons: number;
  package_description: string;
  package_rate_normal: number;
  package_rate_deluxe: number;
  package_details: string;
  package_duration: number;
  package_isfeatured: boolean;
  package_bestseller: boolean;
  tnp_destinations: {
    destination_id: number;
    destination_category_id: number;
    destination_name: string;
    destination_region_id: number;
    tnp_package_categories: {
      package_category_id: number;
      package_category_name: string;
    };
    tnp_package_regions: {
      region_id: number;
      region_name: string;
    };
  };
  tnp_package_types: {
    package_type_id: number;
    package_type_name: string;
    package_type_value: string;
  };
}

interface TripDetails {
  TripDetailsAndCostSummary: {
    CostIncludes: string[];
    CostExcludes: string[];
    Itinerary: {
      day: string;
      event: string;
      description: string;
    }[];
    Highlights: string[];
    Images: string[];
  };
}

const Page: NextPage<Props> = ({}) => {
  const params = useParams();
  const { id } = params;

  const [packageDetails, setPackageDetails] = useState<PackageStructure>();
  const [selectedRate, setSelectedRate] = useState(null);
  const [showShareOptions, setShowShareOptions] = useState(false);
  useEffect(() => {
    async function getItem() {
      let response;
      if (id[0] === "honeymoon") {
        response = await getSinglePackage(
          "/tourpackages/single/" + params?.id[1]
        );
      } else {
        response = await getSinglePackage(
          "/tourpackages/single/" + params?.id[0]
        );
      }
      setPackageDetails(response.data);
    }

    getItem();
  }, []);

  // ✅ Close dropdown on scroll or outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const dropdown = document.getElementById("share-dropdown");
      if (dropdown && !dropdown.contains(event.target as Node)) {
        setShowShareOptions(false);
      }
    };

    const handleScroll = () => setShowShareOptions(false);

    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ✅ Share handler
  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const message = `Check out this amazing tour package: ${url}`;

    switch (platform) {
      case "email":
        if (navigator.share) {
          try {
            await navigator.share({
              title: "Tour Package",
              text: message,
              url: url,
            });
          } catch (error) {
            console.error("Error sharing:", error);
          }
        } else {
          window.open(`mailto:?subject=Tour Package&body=${message}`);
        }
        break;

      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;

      case "whatsapp":
        window.open(
          `https://wa.me/?text=${encodeURIComponent(message)}`,
          "_blank"
        );
        break;

      default:
        break;
    }
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (!packageDetails) {
    return (
      <div className="w-full flex justify-center mt-4 h-12 pt-2">
        <Spin size="large" />
      </div>
    );
  }

  if (id[0] === "honeymoon") {
    return (
      <div>
        <Honeymoon />
      </div>
    );
  }

  const tripDetails: TripDetails = JSON.parse(packageDetails?.package_details);

  return (
    <div>
      <HeroDomestic
        heading={capitalizeFirstLetter(
          packageDetails.tnp_package_types.package_type_name
        )}
        paragraph={capitalizeFirstLetter(
          packageDetails.tnp_destinations?.tnp_package_regions.region_name
        )}
        image={
          tripDetails?.TripDetailsAndCostSummary?.Images?.length > 0 &&
          tripDetails.TripDetailsAndCostSummary.Images[0]
        }
      />

      <div className="w-full lg:w-[80%] flex flex-col lg:flex-row gap-6 justify-center mx-auto my-10">
        {/* Right Side */}
        <div className="w-full lg:w-[60%]">
          <div className="flex flex-col md:flex-row justify-between w-full items-center gap-2 my-5 md:p-3 lg:p-0">
            <h1 className="text-1xl md:text-2xl font-bold">
              {packageDetails.package_name}
            </h1>

            <div className="flex flex-col justify-center items-center border border-gray-300 shadow-sm">
              <div className="w-[6rem] h-[5rem] bg-yellow-300 text-white text-3xl flex justify-center items-center">
                {packageDetails.package_duration}
              </div>
              <div className="w-[6rem] h-[2rem] text-1xl text-black flex justify-center items-center bg-white">
                Days
              </div>
            </div>
          </div>

          <CarouselSlider
            ImageList={tripDetails.TripDetailsAndCostSummary.Images}
          />

          <div className="flex flex-col lg:flex-row justify-center lg:justify-end gap-4 items-center p-4">
            <button
              onClick={() => setSelectedRate(1)}
              className="btn-normal w-full lg:w-auto"
            >
              Adult - AED {packageDetails?.package_rate_normal}
            </button>
            <button
              onClick={() => setSelectedRate(2)}
              className="btn-deluxe w-full lg:w-auto"
            >
              Child - AED {packageDetails?.package_rate_deluxe}
            </button>

            {/* ✅ Share dropdown with icons */}
            <div className="relative">
              <button
                onClick={() => setShowShareOptions(!showShareOptions)}
                className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 w-full lg:w-[10rem]"
              >
                Share
              </button>

              {showShareOptions && (
                <div
                  id="share-dropdown"
                  className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded z-10"
                >
                  <button
                    onClick={() => handleShare("email")}
                    className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    <FaEnvelope className="text-gray-600" />
                    Email
                  </button>
                  <button
                    onClick={() => handleShare("facebook")}
                    className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    <FaFacebook className="text-blue-600" />
                    Facebook
                  </button>
                  <button
                    onClick={() => handleShare("whatsapp")}
                    className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    <FaWhatsapp className="text-green-500" />
                    WhatsApp
                  </button>
                </div>
              )}
            </div>
          </div>

          <Overview text={packageDetails.package_description} />

          {tripDetails.TripDetailsAndCostSummary?.Highlights?.length > 0 && (
            <Highlights
              data={tripDetails.TripDetailsAndCostSummary?.Highlights}
            />
          )}

          <Itinerary data={tripDetails.TripDetailsAndCostSummary?.Itinerary} />

          <Cost
            includeCost={tripDetails.TripDetailsAndCostSummary?.CostIncludes}
            costExclude={tripDetails.TripDetailsAndCostSummary?.CostExcludes}
          />
        </div>

        <div className="w-full lg:w-[40%] flex">
          <DomesticForm
            showAvailabilityButton={
              packageDetails.tnp_package_types.package_type_name === "group"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
