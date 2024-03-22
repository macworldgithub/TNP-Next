import React from "react";
import { url } from "inspector";
import bg from "../../public/TourPackage/heroimg.png";
import Image from "next/image";
import TourpackSearch from "./TourPackSearch";
const TourPackHero = ()=>{
    return(
        <div className="w-full h-[70vh]  " >
            <div className=" w-full  h-[60%]  relative">
            <div className="w-full h-full bg-gradient-to-r from-slate-800 to-slate-100   absolute z-10 opacity-70">
                <p className="text-4xl font-bold text-gray-900 text-center mt-16">Domestic</p>
            </div>
            <div className="absolute inset-0 z-0">
                <Image src={bg} alt="background image" layout="fill"  />
            </div>
            <div className="absolute w-full z-20 top-[83%] ">
                <div className="w-full flex justify-center">
                <TourpackSearch/>
                </div>
                </div>
            </div>
            

        </div>
    )
}
export default TourPackHero;