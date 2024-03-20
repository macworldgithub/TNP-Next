import { FaMapPin } from "react-icons/fa";
import { GiMountainClimbing } from "react-icons/gi";
import { IoMdTime, IoMdTimer } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { IoFilterCircleOutline } from "react-icons/io5";
const TourpackSearch = ()=>{
    return(
<div className="flex my-3 bg-white text-black rounded px-4 py-4 shadow-lg shadow-gray-400 w-[80%]">
<div className="flex mx-2 items-center">
    <div className="me-2">
        <FaMapPin className="text-[#FBAD17] text-xl" />
    </div>
    <div>
        <p >
            Destination
        </p>
        <p className="text-xs text-gray-500">
            Melbourne, Australia
        </p>
    </div>
</div>
<div className="h-[50px] mx-5 bg-gray-300 w-[1px]"></div>
<div className="flex mx-2 items-center">
    <div className="me-2">
        <GiMountainClimbing className="text-[#FBAD17] text-xl" />
    </div>
    <div>
        <p >
            Type
        </p>
        <p className="text-xs text-gray-500">
            Booking type
        </p>
    </div>
</div>
<div className="h-[50px] mx-5 bg-gray-300 w-[1px]"></div>
<div className="flex mx-2 items-center">
    <div className="me-2">
        <IoMdTimer className="text-[#FBAD17] text-xl" />
    </div>
    <div>
        <p >
            Duration
        </p>
        <p className="text-xs text-gray-500">
            2-4 days tour
        </p>
    </div>
</div>
<div className="h-[50px] mx-5 bg-gray-300 w-[1px]"></div>
<div className="flex mx-2 items-center">
    <div className="me-2">
        <RxAvatar className="text-[#FBAD17] text-xl" />
    </div>
    <div>
        <p >
            Guests
        </p>
        <p className="text-xs text-gray-500">
            0
        </p>
    </div>
</div>
<div className="h-[50px] mx-5 bg-gray-300 w-[1px]"></div>
<div className="flex mx-2 items-center">
    <div className="me-2">
        <IoFilterCircleOutline className="text-[#FBAD17] text-3xl" />
    </div>
    <div className="bg-[#FBAD17] cursor-pointer text-white rounded-full px-3 py-1">
        Search
    </div>
</div>
</div>
    )
}
export default TourpackSearch;