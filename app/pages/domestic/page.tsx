import DomesticForm from "@/components/Domestics/DomesticForm";
import HeroDomestic from "@/components/Domestics/HeroDomestic";
import CarouselSlider from "@/components/Domestics/carousel";
import Overview from "@/components/Domestics/overview";

const Domestic = () => {
    return (
        <div>
            <HeroDomestic />
            <div className="w-full lg:w-[80%] flex flex-col lg:flex-row gap-6  justify-center mx-auto my-10">
                {/* Right Side*/}
                <div className=" w-full  lg:w-[60%]  ">
                    <div className="flex flex-col md:flex-row justify-between w-full items-center gap-2 my-5 md:p-3 lg:p-0">
                        <h1 className="text-1xl md:text-2xl font-bold" > 6 Days Skardu & Bashu Valley </h1>

                        <div className="flex flex-col justify-center items-center border border-gray-300 shadow-sm">
                            <div className="w-[6rem] h-[5rem] bg-yellow-300 text-white text-3xl flex justify-center items-center">6</div>
                            <div className="w-[6rem] h-[2rem] text-1xl text-black flex justify-center items-center bg-white">Days</div>
                        </div>

                    </div>
                    <CarouselSlider />

                    <div className="flex justify-end  gap-6 items-center p-2">
                        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 w-[12rem] lg:w-[10rem]">Share</button>
                        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 w-[13rem] lg:w-[11rem]">Download Pdf</button>
                    </div>
                    <Overview text="Travel is the movement of people between relatively distant geographical locations, and can 
involve travel by foot, bicycle, automobile, train, boat, bus, airplane, or other means, with or 
without luggage, and can be one way or  round trip. Travel can also include relatively short stays 
between successive movements.
The origin of the word “travel” is most likely lost to history. The term “travel” may  originate from 
the Old French word travail, which means ‘work’. According to the  Merriam Webster dictionary, 
the first known use of the word travel was in the 14th century."/>


                {/* aqsa add your compoennts here */}
                </div>



                {/* left side */}
                <div className=" w-full lg:w-[40%]  flex justify-center items-center">
                    <DomesticForm />
                </div>

            </div>

        </div>
    )
}
export default Domestic;