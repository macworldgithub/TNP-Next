import { Descriptions } from "antd";
import { NextPage } from "next";

interface Props {
  Title: string;
  Description: string;
}

const RentBannerHeader: NextPage<Props> = ({Description,Title}) => {
  return (
    <div className="flex justify-center py-4 flex-col items-center">
      <p className="text-[#23262D] font-semibold text-3xl py-2">{Title}</p>
      <p className="text-[#8D8E93] w-[750px] text-center py-2">
        {Description}
      </p>
    </div>
  );
};

export default RentBannerHeader;
