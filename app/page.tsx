import Image from "next/image";
import FlagMan from '../public/home/Group.png'
import LocationBook from '../public/home/loc.png'
import VideoImage from "../public/home/image.png"
import { Yesteryear } from "next/font/google";
import BgImage from '../public/home/bg.png'
import { FaMapPin } from "react-icons/fa";
import { GiMountainClimbing } from "react-icons/gi";
import { IoMdTime, IoMdTimer } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { IoFilterCircleOutline, IoLocation } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";

const inter = Yesteryear({
    subsets: ['latin'],
    weight: ['400'],
    style: ['normal']
})


export default function Home() {
    return (
        <div className="w-full bg-white">
            <div className="relative h-[43rem]">
                <Image src={BgImage} alt="Background image" className="w-full absolute h-[43rem] z-0 top-0 left-0" />
                <div className="flex items-center justify-center  absolute bg-gradient-to-r from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.3)] top-0 left-0 w-full z-2 h-[43rem] h-96">
                    <div className="flex items-center flex-col">
                        <p className={`text-primary text-lg ${inter.className}`}>
                            Explore the world
                        </p>
                        <div className="my-2 flex flex-col items-center">
                            <h1 className="text-3xl font-bold">
                                Tour <span className={`text-primary ${inter.className}`}> Travel </span> and
                            </h1>
                            <h1 className="text-3xl font-bold">
                                Adventure <span className=""> Camping </span>
                            </h1>
                        </div>
                        <div className="flex my-3 bg-white text-black rounded px-4 py-4">
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

                        <div className="flex my-5">
                            <div className="flex mx-5 items-center">
                                <FaCircleCheck className="mx-2 text-primary" />
                                <p className="text-sm">
                                    Easy & Fast - Book a Car in 120 minutes
                                </p>

                            </div>
                            <div className="flex mx-5 items-center">
                                <FaCircleCheck className="mx-2 text-primary" />
                                <p className="text-sm">Best Price with Quality Service
                                </p>

                            </div>
                            <div className="flex mx-5 items-center">
                                <FaCircleCheck className="mx-2 text-primary" />
                                <p className="text-sm">Choose from a Wide Variety of Cars
                                </p>

                            </div>

                        </div>

                    </div>
                </div>
            </div>




            <div className="flex px-10 my-32 justify-center flex-wrap w-full bg-white">

                <div className="w-1/2 flex justify-center items-center">
                    <Image src={VideoImage} className="w-3/5" alt="Video Image" />
                </div>
                <div className="w-2/5 flex justify-center ">
                    <div>
                        <p className="text-black my-3">
                            Explore the world
                        </p>
                        <h1 className="text-black text-3xl my-1 font-bold">
                            Great Opportunity For
                        </h1>
                        <h1 className="text-black text-3xl my-1 font-bold">

                            <span className={`${inter.className} text-primary text-[3rem]`}> adventure </span>
                            & Travels
                        </h1>

                        <p className="text-gray-400 my-7">
                            Welcome to our Print 128 website! We are a professional and reliable printing
                            company that offers a wide range of printing services to
                        </p>



                        <div className="w-4/5 flex justify-between">
                            <div>
                                <div className="h-14">
                                    <Image src={FlagMan} alt="..." />
                                </div>
                                <p className="text-black font-bold">
                                    Trusted travel guide
                                </p>
                                <p className="text-gray-500 text-xs">
                                    Welcome to our Print 128 wesit!
                                    company that offers a wide range
                                </p>
                            </div>
                            <div className="mx-">
                                <div className="h-14">
                                    <Image src={LocationBook} alt="..." />
                                </div>
                                <p className="text-black font-bold">
                                    Personalized Trips
                                </p>
                                <p className="text-gray-500 text-xs">
                                    Welcome to our Print 128 wesit!
                                    company that offers a wide range
                                </p>
                            </div>
                        </div>



                        <div className="w-4/5 flex justify-between my-5">
                            <div className="w-1/2">
                                <button className="bg-primary text-white px-4 py-2 shadow -full text-sm">
                                    More About us
                                </button>
                            </div>
                            <div className="mx- w-1/2">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-gray-400 border-2">
                                    </div>
                                    <div className="mx-2">
                                        <p className="text-black  text-sm">
                                            Mehedii. H
                                        </p>

                                        <p className="text-black text-xs text-primary">
                                            Ceo & Founder
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <IoLocation className="text-primary" />
                            <p className="ms-2 text-primary text-sm">
                                Checkout Beautiful Places Arround the World.
                            </p>
                        </div>

                    </div>
                </div>


            </div>





            <div className="flex px-10 my-32 justify-center flex-wrap flex-col items-center w-full bg-white">

                <div>
                    <h1 className="text-black font-bold text-3xl">
                        Amazing Featured Tour
                    </h1>
                    <h2 className={`text-black font-bold text-gray-400 text-center my-2 text-3xl ${inter.className}`}>
                        Package
                    </h2>
                </div>

                <div className="flex">
                    <div className="px-3 text-sm w-32 py-1 shadow-2xl border text-center mx-2 text-black">
                        New York
                    </div>
                    <div className="px-3 text-sm w-32 py-1 shadow-2xl  border text-center mx-2 text-black">
                        London
                    </div>
                    <div  className="px-3 text-sm w-32 py-1 shadow-2xl border text-center mx-2 text-black">
                        Tokyo
                    </div>
                    <div className="px-3 text-sm w-32 py-1 shadow-2xl border text-center mx-2 text-black">
                        Los Angelas
                    </div>
                    <div className="px-3 text-sm w-32 py-1 shadow-2xl  border text-center mx-2 text-black">
                        Manila
                    </div>
                </div>

            </div>































        </div>
    );
}
