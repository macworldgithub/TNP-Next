import { FaMapPin } from "react-icons/fa";
import { GiMountainClimbing } from "react-icons/gi";
import { IoMdTime, IoMdTimer , IoIosArrowDown } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { IoFilterCircleOutline } from "react-icons/io5";
const TourpackSearch = () => {
  return (
    <div className=" w-[80%] flex my-3 flex-col md:flex-row mx-5 bg-white text-black flex-wrap  rounded px-4 py-4">
    <div className="flex mx-2 w-[100%] md:w-auto md:justify-start justify-between  items-center">
      <div className="flex items-center ">
        <div className="me-2">
          <FaMapPin className="text-[#FBAD17] text-xl" />
        </div>
        <div className="">
          <p>Destination</p>
          <p className="text-xs text-gray-500">
            Melbourne, Australia
          </p>
        </div>
       
      </div>
      <IoIosArrowDown className="ms-8" />
      
    </div>
    <div className="md:h-[50px] h-[2px] my-3 md:mx-5 bg-gray-300 block md:w-[2px]"></div>

    <div className="flex mx-2 w-[100%] md:w-auto md:justify-start justify-between  items-center">
      <div className="flex items-center">
        <div className="me-2">
          <GiMountainClimbing className="text-[#FBAD17] text-xl" />
        </div>
        <div>
          <p>Type</p>
          <p className="text-xs text-gray-500">Booking type</p>
        </div>
      </div>
      <IoIosArrowDown className="ms-8" />
      
    </div>

    <div className="md:h-[50px] h-[2px] my-3 md:mx-5 bg-gray-300 block md:w-[2px]"></div>

    <div className="flex mx-2 w-[100%] md:w-auto md:justify-start justify-between  items-center">
      <div className="flex items-center">
        <div className="me-2">
          <IoMdTimer className="text-[#FBAD17] text-xl" />
        </div>
        <div>
          <p>Duration</p>
          <p className="text-xs text-gray-500">2-4 days tour</p>
        </div>
      </div>
      <IoIosArrowDown className="ms-8" />
    </div>

    <div className="md:h-[50px] h-[2px] my-3 md:mx-5 bg-gray-300 block md:w-[2px]"></div>

    <div className="flex mx-2 w-[100%] md:w-auto md:justify-start justify-between  items-center">
      <div className="flex items-center">
        <div className="me-2">
          <RxAvatar className="text-[#FBAD17] text-xl" />
        </div>
        <div>
          <p>Guests</p>
          <p className="text-xs text-gray-500">0</p>
        </div>
      </div>
      <IoIosArrowDown className="ms-8" />
    </div>

    <div className="md:h-[50px] h-[2px] my-3 md:mx-5 bg-gray-300 block md:w-[2px]"></div>
    <div className="flex mx-2 justify-between items-center">
      <div className="me-2">
        <IoFilterCircleOutline className="text-[#FBAD17] text-3xl" />
      </div>
      <div className="bg-[#FBAD17] md:w-auto -full text-center cursor-pointer text-white rounded-full px-3 py-1">
        Search
      </div>
    </div>
  </div>
  );
};
export default TourpackSearch;
