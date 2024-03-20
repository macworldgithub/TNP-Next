import Image from "next/image";
import TestimonialBackground from '../public/home/H5-png-1 1.png'
import Hike from '../public/home/Hike.png'
import Feedback from '../public/home/feedback 1.png'
import DLeft from '../public/home/dleft.png'
import DDown from '../public/home/Frame.png'
import Quotation from '../public/home/quotation.png'
import Path from '../public/home/path.png'
import Badge from '../public/home/_x33_8-Award_symbol.png'
import MountainImage from '../public/home/mountain 1.png'
import Rect1 from '../public/home/Rectangle 19378.png'
import Rect2 from '../public/home/Rectangle 19437.png'
import Rect3 from '../public/home/Rectangle 19438.png'
import Rect4 from '../public/home/Rectangle 19439.png'
import Rect5 from '../public/home/Rectangle 19440.png'
import Rect6 from '../public/home/Rectangle 19441.png'
import FlagMan from '../public/home/Group.png'
import LocationBook from '../public/home/loc.png'
import VideoImage from "../public/home/image.png"
import { Yesteryear } from "next/font/google";
import BgImage from '../public/home/bg.png'
import { FaMapPin, FaRegComments } from "react-icons/fa";
import { GiMountainClimbing } from "react-icons/gi";
import { IoMdTime, IoMdTimer } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { IoFilterCircleOutline, IoLocation } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";

const inter = Yesteryear({
    subsets: ['latin'],
    weight: ['400'],
    style: ['normal']
})


export default function Home() {
    



    return (
        <div className="w-full bg-white">
                <div className="lg:h-[43rem] md:h-[30rem]   bg-gradient-to-r from-[rgba(0,0,0,0.8)] hero-bg to-[rgba(0,0,0,0.3)] w-full z-2 h-96">
                <div className="w-full h-full flex items-center justify-center   bg-gradient-to-r from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.3)]">
    
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

                        <div className="flex flex-wrap md:flex-nowrap my-5">
                            <div className="flex mx-5 md:w-full w-[345px] items-center">
                                <FaCircleCheck className="mx-2 text-primary" />
                                <p className="text-sm">
                                    Easy & Fast - Book a Car in 120 minutes
                                </p>

                            </div>
                            <div className="flex mx-5  md:w-full w-[345px] items-center">
                                <FaCircleCheck className="mx-2 text-primary" />
                                <p className="text-sm">Best Price with Quality Service
                                </p>

                            </div>
                            <div className="flex mx-5  md:w-full w-[345px] items-center">
                                <FaCircleCheck className="mx-2 text-primary" />
                                <p className="text-sm">Choose from a Wide Variety of Cars
                                </p>

                            </div>

                        </div>




                    </div>
            </div>


                </div>


            <div className="flex px-10 my-32 justify-center flex-wrap w-full bg-white">

                <div className=" w-1/2 flex justify-center items-center">
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

                <div className="w-full flex flex-col items-center">
                    <h1 className="text-black font-bold text-3xl">
                        Amazing Featured Tour
                    </h1>
                    <h2 className={`text-black font-bold text-gray-400 text-center my-2 text-3xl ${inter.className}`}>
                        Package
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center">
                    <div className="px-3 text-sm w-32 py-1 my-1 shadow-2xl border text-center mx-2 text-black">
                        New York
                    </div>
                    <div className="px-3 text-sm w-32 py-1 my-1 shadow-2xl  border text-center mx-2 text-black">
                        London
                    </div>
                    <div className="px-3 text-sm w-32 py-1 my-1 shadow-2xl border text-center mx-2 text-black">
                        Tokyo
                    </div>
                    <div className="px-3 text-sm w-32 py-1 my-1 shadow-2xl border text-center mx-2 text-black">
                        Los Angelas
                    </div>
                    <div className="px-3 text-sm w-32 py-1 my-1 shadow-2xl  border text-center mx-2 text-black">
                        Manila
                    </div>
                </div>

            </div>








            <div className="flex px-10 my-32 justify-center flex-wrap flex-col items-center w-full bg-white">

                <div>
                    <h2 className={`text-black font-bold text-primary text-center my-2 text-3xl ${inter.className}`}>
                        Package
                    </h2>
                    <h1 className="text-black font-bold text-3xl">
                        Popular destinations
                    </h1>
                </div>

                <div className="flex flex-col flex-w w-full ">
                    <div className="flex flex-wrap justify-center" >
                        <div className="mx-4 relative w-96 h-60 my-2">
                            <Image src={Rect1} className="  w-full md:w-96 absolute  top-0 left-0 h-60" alt="rect1" />
                            <div className="w-full md:w-96 absolute  top-0 left-0 h-60 bg-[rgba(0,0,0,0.2)]">
                            </div>
                            <div className="absolute bg-[#F7921E] right-3 top-3 text-xs px-3 py-1 rounded">
                                3 Tours
                            </div>
                            <div className="absolute left-3 bottom-3  px-3 py-1 ">
                                <p className={`${inter.className} text-white`}>
                                    Travel to
                                </p>
                                <p className={` text-white`}>
                                    Switzerland
                                </p>
                            </div>
                        </div>
                        <div className="mx-4 relative md:w-72 w-full my-2 h-60">
                            <Image src={Rect2} className=" w-full md:w-72  absolute h-60 top-0 left-0" alt="rect1" />
                            <div className="w-72 absolute w-full md:w-72  top-0 left-0 h-60 bg-[rgba(0,0,0,0.2)]">
                            </div>
                            <div className="absolute bg-[#F7921E] right-3 top-3 text-xs px-3 py-1 rounded">
                                3 Tours
                            </div>
                            <div className="absolute left-3 bottom-3  px-3 py-1 ">
                                <p className={`${inter.className} text-white`}>
                                    Travel to
                                </p>
                                <p className={` text-white`}>
                                    Australia
                                </p>
                            </div>
                        </div>
                        <div className="mx-4 my-2 relative md:w-48 w-full  h-60">
                            <Image src={Rect3} className=" md:w-48 w-full  absolute h-60 top-0 left-0" alt="rect1" />
                            <div className=" absolute  md:w-48 w-full top-0 left-0 h-60 bg-[rgba(0,0,0,0.2)]">
                            </div>
                            <div className="absolute bg-[#F7921E] right-3 top-3 text-xs px-3 py-1 rounded">
                                3 Tours
                            </div>
                            <div className="absolute left-3 bottom-3  px-3 py-1 ">
                                <p className={`${inter.className} text-white`}>
                                    Travel to
                                </p>
                                <p className={` text-white`}>
                                    London
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex my-5 flex-wrap my-2 justify-center" >
                        <div className="mx-4  relative w-full md:w-48  h-60">
                            <Image src={Rect4} className=" w-full md:w-48 absolute h-60 top-0 left-0" alt="rect1" />
                            <div className=" absolute w-full md:w-48 top-0 left-0 h-60 bg-[rgba(0,0,0,0.2)]">
                            </div>
                            <div className="absolute bg-[#F7921E] right-3 top-3 text-xs px-3 py-1 rounded">
                                3 Tours
                            </div>
                            <div className="absolute left-3 bottom-3  px-3 py-1 ">
                                <p className={`${inter.className} text-white`}>
                                    Travel to
                                </p>
                                <p className={` text-white`}>
                                    Thailand
                                </p>
                            </div>
                        </div>
                        <div className="mx-4 relative w-full md:w-96 my-2 h-60">
                            <Image src={Rect5} className="md:w-96 w-full absolute h-60 top-0 left-0" alt="rect1" />
                            <div className="w-full md:w-96 absolute  top-0 left-0 h-60 bg-[rgba(0,0,0,0.2)]">
                            </div>
                            <div className="absolute bg-[#F7921E] right-3 top-3 text-xs px-3 py-1 rounded">
                                3 Tours
                            </div>
                            <div className="absolute left-3 bottom-3  px-3 py-1 ">
                                <p className={`${inter.className} text-white`}>
                                    Travel to
                                </p>
                                <p className={` text-white`}>
                                    Morocco
                                </p>
                            </div>
                        </div>
                        <div className="mx-4 relative md:w-72 my-2 w-full  h-60">
                            <Image src={Rect6} className="md:w-72 w-full absolute h-60 top-0 left-0" alt="rect1" />
                            <div className="md:w-72 w-full absolute  top-0 left-0 h-60 bg-[rgba(0,0,0,0.2)]">
                            </div>
                            <div className="absolute bg-[#F7921E] right-3 top-3 text-xs px-3 py-1 rounded">
                                3 Tours
                            </div>
                            <div className="absolute left-3 bottom-3  px-3 py-1 ">
                                <p className={`${inter.className} text-white`}>
                                    Travel to
                                </p>
                                <p className={` text-white`}>
                                    Singapore
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>








            <div className="flex px-10 my-32 justify-start flex-wrap  items-start w-full bg-white">
                <div className="w-3/12 bg-blue400">
                    <h1 className="text-black font-bold text-3xl">
                        Tour Packages
                    </h1>
                    <div className="flex mt-3">
                        <div className="w-20 flex bg-white flex-col items-center justify-center h-20 shadow-2xl border">
                            <p className="text-primary text-2xl font-bold">
                                25%
                            </p>

                            <p className="text-primary text-xs">
                                Off
                            </p>
                        </div>
                        <div className="w-1/2 mx-5 text-xs text-black">
                            Discover Great <span className="text-primary"> Discount </span> Deals
                            Around the World
                        </div>
                    </div>


                    <div className="flex mt-3">
                        <div className="w-20 text-black text-base font-bold">
                            Hurry Up!
                        </div>
                        <div className="w-1/2 mx-5 text-xs text-black">
                            <div className="flex w-full justify-between">
                                <div className="flex flex-col h-12 px-3 justify-between ">
                                    <p className="text-primary text-center">
                                        845
                                    </p>
                                    <p>
                                        Days
                                    </p>
                                </div>
                                <div className="flex flex-col h-12 px-3 justify-between ">
                                    <p className="text-primary text-center">
                                        213
                                    </p>
                                    <p>
                                        Houres
                                    </p>
                                </div>
                                <div className="flex flex-col h-12 px-3 justify-between ">
                                    <p className="text-primary text-center">
                                        347
                                    </p>
                                    <p>
                                        Minute
                                    </p>
                                </div>
                                <div className="flex flex-col h-12 px-3 justify-between ">
                                    <p className="text-primary text-center">
                                        59
                                    </p>
                                    <p>
                                        Second
                                    </p>
                                </div>
                            </div>
                        </div>



                    </div>

                    <button className="bg-primary px-5 py-2 mt-12 text-base shadow-2xl rounded">
                        Explore More
                    </button>



                </div>










                <div className="w-9/12 bg-red-400">
                    <h1 className="text-black font-bold text-3xl">
                        Tour Packages
                    </h1>
                </div>
            </div>








            <div className="flex lg:px-60 px-5 bg-blue-500 my-32 my-20 justify-start w-full flex-wrap  items-start w-full bg-white">
                <div className="flex items-center w-full my-10 justify-between">

                    <div className="flex   items-center md:text-3xl">

                        <Image src={MountainImage} alt="mountain" />
                        <h1 className="mx-5">
                            Ready to adventure and enjoy natural
                        </h1>

                    </div>
                    <button className="bg-white md:px-5 px-3 py-2 shadow text-primary">
                        Let's get started
                    </button>

                </div>


                <div className="flex justify-between flex-wrap  w-full">
                    <div className="flex items-center flex-col h-60 my-7 w-52 justify-around border px-15 rounded-2xl py-5">

                        <Image src={Hike} alt="hiking" />
                        <p className="text-primary text-xl text-center">
                            5489
                        </p>
                        <p className="text-black font-bold text-center">
                            Happy <br /> Travelers
                        </p>

                    </div>

                    <div className="flex items-center flex-col h-60 my-7 w-52 justify-around border px-15 rounded-2xl py-5">

                        <Image src={Feedback} alt="hiking" />
                        <p className="text-primary text-xl text-center">
                            99.9%
                        </p>
                        <p className="text-black font-bold text-center">
                            Total Positive <br /> Reviews
                        </p>

                    </div>
                    <div className="flex items-center flex-col h-60 w-52 my-7 justify-around border px-15 rounded-2xl py-5">

                        <Image src={Path} alt="hiking" />
                        <p className="text-primary text-xl text-center">
                            190+
                        </p>
                        <p className="text-black text-center font-bold">
                            Tour <br /> Completed
                        </p>

                    </div>

                    <div className="flex items-center flex-col h-60 w-52 my-7 justify-around border px-15 rounded-2xl py-5">

                        <Image src={Hike} alt="hiking" />
                        <p className="text-primary text-xl text-center">
                            472
                        </p>
                        <p className="text-black text-center font-bold">
                            Travel <br /> Destinations
                        </p>

                    </div>

                </div>

            </div>




            <div className="flex bg-gray-100 pt-16 flex-col px-10 my-32 justify- flex-wrap  items-center w-full relative md:h-[40rem]">

                <Image src={TestimonialBackground} className="w-full md:h-[40rem] absolute" alt="testimonial background" />
                <h1 className="text-3xl text-black text-center font-bold">
                    Testimonials
                </h1>

                <div className="flex my-10 flex-wrap justify-around">






                    <div className="relative w-[25rem] my-5 h-[13rem] flex flex-col bg-white mx-5 px-5 py-4 border">

                        <Image src={DLeft} className="absolute left-0 top-10 h-[8rem]" alt="dleft" />
                        <Image src={Quotation} className="absolute right-10 top-10 " alt="dleft" />
                        <Image src={DDown} alt="dleft" className="absolute bottom-0 right-10 " />


                        <div className="flex items-center my-3">
                            <div className="w-10 h-10 rounded-full  bg-gray-300">

                            </div>
                            <div className="ms-5 text-black">
                                Williamson
                            </div>

                        </div>

                        <div className="text-black text-xs my-3">
                            The most advanced revenue than this. Iwill refer everyone
                            I like Level more and more each day because it makes my
                            easier. It really saves me time and effort. Level is exactly
                            business has been lacking.
                        </div>
                    </div>



                    <div className="w-[25rem] relative my-5 h-[13rem] flex flex-col bg-white mx-5 px-5 py-4 border">
                        <Image src={DLeft} className="absolute left-0 top-10 h-[8rem]" alt="dleft" />
                        <Image src={Quotation} className="absolute right-10 top-10 " alt="dleft" />
                        <Image src={DDown} alt="dleft" className="absolute bottom-0 right-10 " />
                        <div className="flex items-center my-3">
                            <div className="w-10 h-10 rounded-full  bg-gray-300">

                            </div>
                            <div className="ms-5 text-black">
                                Williamson
                            </div>

                        </div>

                        <div className="text-black text-xs my-3">
                            The most advanced revenue than this. Iwill refer everyone
                            I like Level more and more each day because it makes my
                            easier. It really saves me time and effort. Level is exactly
                            business has been lacking.
                        </div>
                    </div>

                </div>


                <button className="px-8 py-3 shadow-2xl bg-primary text-white text-sm ">
                    VIEW MORE
                </button>


            </div>




            <div className="flex flex-col px-10 my-20 justify- flex-wrap  items-center w-full relative md:h-[40rem]">

                <p className="text-[#FBAD17] text-sm" >
                    Explore the world
                </p>
                <h1 className="text-black text-3xl font-bold my-2">
                    Latest News & Articles
                </h1>
                <h1 className="text-black text-3xl font-bold">
                    <span className={`${inter.className} text-primary}`}>
                        from
                    </span>
                    The Blog
                </h1>




                <div className="flex justify-center flex-wrap w-full">





                    <div className="h-[22rem] w-[17rem] m-5 bg-gray-100 shadow-2xl">

                        <div className="w-full relative h-1/2 ">
                            <Image src={Rect1} alt="card" className="w-full h-full" />
                            <div className="absolute px-3 py-1 bottom-0 left-0 text-xs bg-[#FBAD17]">
                                Travelling
                            </div>
                        </div>

                        <div className="p-3">
                            <div className="flex">
                                <div className="flex text-black text-xs items-center">
                                    <CiCalendar className="text-[#FBAD17] me-1" />
                                    02 Apr 2021
                                </div>
                                -
                                <div className="flex text-black text-xs items-center">
                                    <FaRegComments className="text-[#FBAD17] me-1" />
                                    Comments (03)
                                </div>
                            </div>

                            <h3 className="text-lg text-black font-bold ">
                                The 8 best things about
                                Touristy
                            </h3>
                            <p className="text-gray-400 my-1 text-xs">
                                Business is the activity of making on
                                cing or buying and selling pro
                            </p>
                            <p className="text-black my-2 text-xs">
                                Read More
                            </p>
                        </div>

                    </div>


















                    <div className="h-[22rem] w-[17rem] m-5 bg-gray-100 shadow-2xl">

                        <div className="w-full relative h-1/2 ">
                            <Image src={Rect1} alt="card" className="w-full h-full" />
                            <div className="absolute px-3 py-1 bottom-0 left-0 text-xs bg-[#FBAD17]">
                                Travelling
                            </div>
                        </div>

                        <div className="p-3">
                            <div className="flex">
                                <div className="flex text-black text-xs items-center">
                                    <CiCalendar className="text-[#FBAD17] me-1" />
                                    02 Apr 2021
                                </div>
                                -
                                <div className="flex text-black text-xs items-center">
                                    <FaRegComments className="text-[#FBAD17] me-1" />
                                    Comments (03)
                                </div>
                            </div>

                            <h3 className="text-lg text-black font-bold ">
                                The 8 best things about
                                Touristy
                            </h3>
                            <p className="text-gray-400 my-1 text-xs">
                                Business is the activity of making on
                                cing or buying and selling pro
                            </p>
                            <p className="text-black my-2 text-xs">
                                Read More
                            </p>
                        </div>

                    </div>











                    <div className="h-[22rem] m-5 w-[17rem] bg-gray-100 shadow-2xl">

                        <div className="w-full relative h-1/2 ">
                            <Image src={Rect1} alt="card" className="w-full h-full" />
                            <div className="absolute px-3 py-1 bottom-0 left-0 text-xs bg-[#FBAD17]">
                                Travelling
                            </div>
                        </div>

                        <div className="p-3">
                            <div className="flex">
                                <div className="flex text-black text-xs items-center">
                                    <CiCalendar className="text-[#FBAD17] me-1" />
                                    02 Apr 2021
                                </div>
                                -
                                <div className="flex text-black text-xs items-center">
                                    <FaRegComments className="text-[#FBAD17] me-1" />
                                    Comments (03)
                                </div>
                            </div>

                            <h3 className="text-lg text-black font-bold ">
                                The 8 best things about
                                Touristy
                            </h3>
                            <p className="text-gray-400 my-1 text-xs">
                                Business is the activity of making on
                                cing or buying and selling pro
                            </p>
                            <p className="text-black my-2 text-xs">
                                Read More
                            </p>
                        </div>

                    </div>
                </div>

            </div>
































        </div>
    );
}
