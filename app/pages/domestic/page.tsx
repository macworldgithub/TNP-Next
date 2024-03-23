import Cost from "@/components/Domestics/Cost";
import DomesticForm from "@/components/Domestics/DomesticForm";
import HeroDomestic from "@/components/Domestics/HeroDomestic";
import Highlights from "@/components/Domestics/Highlights";
import Itinerary from "@/components/Domestics/Itinerary";
import CarouselSlider from "@/components/Domestics/carousel";
import Overview from "@/components/Domestics/overview";

const Domestic = () => {
  const itineraryData = [
    {
      title:
        "Day 1 : Kathmandu to Pokhara (By flight or Bus), the city of Lakes, adventures and serenity.",
      desc: "Arrive at Tribhuwan International Airport, Kathmandu, you are welcomed by the team and then you will be transferred to your hotel. This trail goes through Ghorepani Poon Hill. Normally, the trek starts like Pokhara to Nayapul and ends like Phedi to Pokhara. While early travel tended to be slower, more dangerous, and more dominated by trade and migration, cultural and technological advances over many years have tended to mean that travel has become easier and more accessible. The evolution of technology in such diverse fields as horse tack and bullet trains has contributed to this trend.",
    },
    {
      title: "Day 2 : Drive to Nayapul and trek to Ulleri",
      desc: "While early travel tended to be slower, more dangerous, and more dominated by trade and migration, cultural and technological advances over many years have tended to mean that travel has become easier and more accessible. The evolution of technology in such diverse fields as horse tack and bullet trains has contributed to this trend.",
    },
    {
      title: "Day 3 : Trek to Ghorepani",
      desc: "The Palace of Fifty five Windows: This magnificent palace was built during the reign of King Yakshya Malla in A.D. 1427 and was subsequently remodeled by King Bhupatindra Malla in the seventeenth century. Among the brick walls with their gracious setting and sculptural design, is a balcony with Fifty five Windows, considered to be a unique masterpiece of woodcarving.",
    },
    {
      title:
        "Day 4 : Early trek to Poon Hill, Back to Ghorepani and Trek to Tadapani",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      title: "Day 5 : Tadapani to Chomrong",
      desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of  Dan decided to leave for the far World of Grammar.",
    },
    {
      title: "Day 6 : Chomrong to Dobhan (Dovan)",
      desc: "The Big Oxmox advised her not to do so because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.",
    },
  ];
  return (
    <div>
      <HeroDomestic />
      <div className="w-full lg:w-[80%] flex flex-col lg:flex-row gap-6  justify-center mx-auto my-10">
        {/* Right Side*/}
        <div className=" w-full  lg:w-[60%]  ">
          <div className="flex flex-col md:flex-row justify-between w-full items-center gap-2 my-5 md:p-3 lg:p-0">
            <h1 className="text-1xl md:text-2xl font-bold">
              {" "}
              6 Days Skardu & Bashu Valley{" "}
            </h1>

            <div className="flex flex-col justify-center items-center border border-gray-300 shadow-sm">
              <div className="w-[6rem] h-[5rem] bg-yellow-300 text-white text-3xl flex justify-center items-center">
                6
              </div>
              <div className="w-[6rem] h-[2rem] text-1xl text-black flex justify-center items-center bg-white">
                Days
              </div>
            </div>
          </div>
          <CarouselSlider />

          <div className="flex justify-end  gap-6 items-center p-2">
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 w-[12rem] lg:w-[10rem]">
              Share
            </button>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 w-[13rem] lg:w-[11rem]">
              Download Pdf
            </button>
          </div>
          <Overview
            text="Travel is the movement of people between relatively distant geographical locations, and can 
involve travel by foot, bicycle, automobile, train, boat, bus, airplane, or other means, with or 
without luggage, and can be one way or  round trip. Travel can also include relatively short stays 
between successive movements.

The origin of the word “travel” is most likely lost to history. The term “travel” may  originate from 
the Old French word travail, which means ‘work’. According to the  Merriam Webster dictionary, 
the first known use of the word travel was in the 14th century."
          />

          <Highlights
            data={[
              "Trek to the world-famous Everest Base Camp",
              "Enjoy the amazing view of the Himalayas from Kala Patthar",
              "Travel through the Sherpa villages of Namche, Khumjung, Khunde, and Dingboche",
              "Visit Tengboche the biggest and oldest monastery n the region.",
            ]}
          />
          <Itinerary data={itineraryData} />
          <Cost/>
        </div>

        {/* aqsa add your compoennts here */}

        {/* left side */}
        <div className=" w-full lg:w-[40%]  flex ">
          <DomesticForm />
        </div>
      </div>
    </div>
  );
};
export default Domestic;