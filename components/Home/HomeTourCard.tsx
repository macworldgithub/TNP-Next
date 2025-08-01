import Image, { StaticImageData } from "next/image";
import { MdLocationPin } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { IoPersonAddOutline } from "react-icons/io5";
import { FaCamera, FaRegBookmark } from "react-icons/fa";
import { BiSolidVideos } from "react-icons/bi";
import Link from "next/link";
interface TourCardProps {
  id: number;
  pic: StaticImageData;
  loc: string;
  title: string;
  duration: number;
  people: number;
  price: number;
  dprice: number;
  review: number;
  imageCount: number;
  videoCount: number;
}
const TourCard: React.FC<TourCardProps> = ({
  id,
  pic,
  loc,
  title,
  duration,
  people,
  price,
  dprice,
  review,
  imageCount,
  videoCount,
}) => {
  return (
    <Link
      href={`pages/packagedetails/${id}`}
      className="flex flex-col bg-white md:h-[24rem] 2xl:h-[24rem] h-[24rem] items-center justify-center lg:w-[400px] xl:w-[300px] md:w-[40%] w-[90%] shadow-lg shadow-gray-400 rounded-lg"
    >
      <div className="relative w-full h-[49%]">
        <div className="flex absolute z-10 top-3 right-2">
          <div className="flex items-center text-white bg-[rgba(0,0,0,0.5)] rounded mx-1 px-2 py-1">
            <FaCamera className="me-1" />
            {imageCount}
          </div>
          <div className="flex items-center text-white bg-[rgba(0,0,0,0.5)] rounded mx-1 px-2 py-1">
            <BiSolidVideos className="me-1" />
            {videoCount}
          </div>
        </div>
        <div className="text-center absolute bg-primary bottom-[-6px] shadow-lg z-[3] right-5 text-xs text-white px-5 py-[0.3rem] rounded">
          Best Seller
        </div>
        <div className="text-center z-10 absolute bg-[#F7921E] top-3 left-2 text-xs text-white px-3 py-1 rounded">
          FEATURED
        </div>

        <Image
          src={pic}
          alt="tour_image"
          fill={true}
          className="w-full h-full"
        />
      </div>
      <div className="w-full h-[51%] relative z-0">
        <div className="flex flex-col absolute top-[-9px] bg-white  left-0  justify-between gap-2 h-full w-full px-2 rounded-lg py-2 ">
          <div className="my-2 mx-2">
            <h5 className="text-lg font-bold truncate" title={title}>
              {title}
            </h5>
          </div>
          <div className="flex my-2 mx-2 flex-row gap-2 pb-[2px]">
            <div className="flex flex-row">
              <MdOutlineStarPurple500 className="text-yellow-400" />
              <MdOutlineStarPurple500 className="text-yellow-400" />
              <MdOutlineStarPurple500 className="text-yellow-400" />
              <MdOutlineStarPurple500 className="text-yellow-400" />
              <MdOutlineStarPurple500 className="text-yellow-400" />
            </div>
            <p className="text-xs text-gray-500">({review} Review)</p>
          </div>
          <div className="flex my-2 mx-2 flex-row gap-8 pb-[2px]">
            <div className="flex flex-row gap-2">
              <IoMdTime className="text-blue-400" />
              <p className="text-xs text-gray-500">{duration}</p>
            </div>
            <div className="flex flex-row gap-2">
              <IoPersonAddOutline className="text-blue-400" />
              <p className="text-xs text-gray-500">{people} persons</p>
            </div>
          </div>
          <div className="h-[0.5px] my-1 w-full bg-gray-300 "></div>
          <div className="mx-2 flex justify-between items-center">
            <div className="flex flex-row gap-2">
              <p className="text-xs text-gray-500 ">From</p>
              <p className="text-xs text-blue-400 font-semibold ">
                {dprice}AED
              </p>
              {/* <p className="text-xs text-gray-500 line-through">{price}AED</p> */}
            </div>
            <FaRegBookmark className="text-primary" />
          </div>
        </div>
      </div>
    </Link>
  );
};
export default TourCard;
