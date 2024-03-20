"use client"
import Image from 'next/image';
import { useState } from 'react';
import mobile_download from "../../assets/footer/mobile_app_download.png";
import logo from "../../assets/common/Logo.png";
import sc0 from "../../assets/footer/01.svg";
import sc1 from "../../assets/footer/01.svg";
import sc2 from "../../assets/footer/02.svg";
import sc3 from "../../assets/footer/03.svg";

const Footer = () => {

    return (
        <div className='text-black bg-white relative items-center flex flex-col'>
            <div className='flex items-center justify-center flex-col relative pt-16 pb-16'>
                <Image src={mobile_download} alt='not_found_image' className='w-[90%]' />
            </div>
            <div className='h-96 w-[90%]'>
                <div>
                    <div><Image src={logo} alt='not_found_image' /></div>
                    <div>
                        <p>
                            A new way to make the payments easy, reliable and 100% secure. claritatem itamconse quat. Exerci tation ullamcorper.
                        </p>
                    </div>
                    <div className='flex w-72 justify-between'>
                        <Image src={sc0} alt='not_found_image' width={50} height={50} />
                        <Image src={sc1} alt='not_found_image' width={50} height={50} />
                        <Image src={sc2} alt='not_found_image' width={50} height={50} />
                        <Image src={sc3} alt='not_found_image' width={50} height={50} />
                    </div>
                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
            I am bottom navigation
        </div>
    );
};

export default Footer;
