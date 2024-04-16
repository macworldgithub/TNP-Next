import Image from "next/image";
import { useState } from "react";
import BannerCar from "../../../assets/offer/Group 1000003260.svg";


function Tansition() {
  const [moved, setMoved] = useState(false);

  const handleMoveButtonClick = () => {
    setMoved(!moved);
  };

  return (
    <div>
      <Image
        className={`absolute bottom-2 left-4 md:bottom-5 md:left-8 lg:bottom-6 lg:left-8 xl:bottom-8 xl:left-20 2xl:bottom-10 2xl:left-${
          moved ? "32" : "0"
        } w-full max-w-2xl transition-all duration-500`}
        src={BannerCar}
        alt="Background Image"
      />
      <button onClick={handleMoveButtonClick}>Move Image</button>
    </div>
  );
}

export default Tansition;



