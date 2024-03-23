import HeroBanner from "@/components/Common/HeroBanner";
import { NextPage } from "next";
import BannerImage from "../../../assets/carrent/hero_image.png";
import SearchbarAndFilters from "@/components/RentCar/SearchbarAndFilters";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div>
      <HeroBanner
        UpcommingImage={BannerImage}
        Heading="Welcome to Car Rental"
        Subheading=""
      />
      <div className="flex justify-center relative h-0">
        <div className="absolute z-10 bottom-[-50px]">
          <SearchbarAndFilters />
        </div>
      </div>

    </div>
  );
};

export default Page;
