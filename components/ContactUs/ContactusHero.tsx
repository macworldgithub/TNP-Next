import React from "react";
import { url } from "inspector";
import bg from "../../public/TourPackage/heroimg.png";
import Image from "next/image";

const ContactusHero = ()=>{
    return(
        <div className="w-full h-[50vh]  " >
            <div className=" w-full  h-[90%]  relative">
            <div className="w-full h-full bg-gradient-to-r from-slate-800 to-slate-100   absolute z-10 opacity-70">
                <p className="text-4xl font-bold text-gray-900 text-center mt-16">Contact Us</p>
            </div>
            <div className="absolute inset-0 z-0">
                <Image src={bg} alt="background image" layout="fill"  />
            </div>
           
            </div>
            

        </div>
    )
}
export default ContactusHero;