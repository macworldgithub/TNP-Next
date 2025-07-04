// components/ResponsiveLayout.js

import React from 'react';
import Image from 'next/image';
import Bg from '../../public/aboutus/imgg.jpg';
import icon1 from '../../public/aboutus/plane 2.png';
import icon2 from '../../public/aboutus/travel-and-tourism 1.png';
import icon3 from '../../public/aboutus/location 1.png';
import { Yesteryear } from "next/font/google";
const inter = Yesteryear({
    subsets: ['latin'],
    weight: ['400'],
    style: ['normal']
})

const BookNow = () => {
    return (
        <div className="  bg-white mx-auto flex flex-col lg:flex-row lg:items-center justify-center  my-16 w-[90%]">
            <div className="lg:w-1/2 flex justify-center w-full  mb-4 lg:mb-0 ">
                <Image src={Bg} alt="Image" className="lg:w-[75%]  w-1/2" />
            </div>
            <div className="lg:w-1/2 lg:pl-8">
                <h2 className="text-black text-3xl my-1 font-bold mb-4 text-center lg:text-left ">We have been in Tourism  <br></br> <span className={`text-primary text-4xl ${inter.className}`}> industry</span>   for more than 20 years</h2>
                <p className="mb-4  text-center lg:text-left">At Tours Dubai, we know you’ve got things you’d love to do, places you’d like to see, cultures you’d love to jump. And adventures to experience and remember forever.</p>
                <div className='flex  w-full gap-5 my-4'>
                    <Image src={icon1} alt="Image" className=" w-[35px] h-[35px]" />
                    <div className='flex flex-col'>
                        <h4 className='text-primary font-semibold'>Book With Confident</h4>
                        <p>We’re here to help you do those things, not just dream of them.</p>

                    </div>

                </div>
                <div className='flex  w-full gap-5 my-4'>
                    <Image src={icon2} alt="Image" className=" w-[35px] h-[35px]" />
                    <div className='flex flex-col'>
                        <h4 className='text-primary font-semibold'>Freedom to discover, confidence to explore</h4>
                        <p>Tours Dubai has provided memorable travel experiences over travelers from all walks of life. </p>

                    </div>

                </div>
                <div className='flex  w-full gap-5 my-4'>
                    <Image src={icon3} alt="Image" className=" w-[35px] h-[35px]" />
                    <div className='flex flex-col'>
                        <h4 className='text-primary font-semibold'>Dive into Culture</h4>
                        <p>Each trip is carefully crafted to leave you free to live in the moment
                            and enjoy your vacation.</p>

                    </div>

                </div>

                <div className='flex justify-center lg:justify-normal items-center'>

                    <button className="bg-primary text-white py-2 px-5 rounded">BOOK NOW </button>
                </div>
            </div>
        </div>
    );
};

export default BookNow;
