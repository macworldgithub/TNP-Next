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

import MyCalender from "./datePicker";

export default function CustomerReview() {
  console.log(":hehe rae");
  return (
    <div className="mb-10 bg-white">
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
        <div className="w-[60%] px-8 border-2 rounded-md py-10">
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

        <div className="w-[20%] bg-[#F8F8F8] px-8 py-12">
          <h2 className="text-lg font-bold mt-4 mb-4 border-l-2 border-l-[#1677FF] px-1">
            Book This Tour
          </h2>
          <div>
            <MyCalender />
          </div>
        </div>
      </div>
    </div>
  );
}
