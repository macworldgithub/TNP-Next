import { NextPage } from "next";
import MyDropdown from "./dropdown";
import { Input, DatePicker, Select } from "antd";

const { Option } = Select;

interface Props {}

const TourDetails: NextPage<Props> = ({}) => {
  const inputStyle = { width: "100%", height: "40px" };

  return (
    <div className="w-11/12 md:w-[700px] py-14 px-4 md:px-14 bg-white rounded-lg mt-4 shadow-2xl">
      <div className="bg-[#00ADEE] text-white w-28 py-1 px-2 rounded-md -mt-8 absolute -ml-4 md:-ml-[3rem] lg:-ml-28">
        Tour Details
      </div>

      <div className="flex flex-col gap-4 md:flex-row justify-between">
        <div className="w-full">
          <p className="my-2">Select your desired areas</p>
          <div className="relative">
            <MyDropdown />
          </div>
        </div>
        <div className="w-full">
          <p className="my-2">Tour Duration (Days)</p>
          <div className="relative">
            <MyDropdown />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row justify-between mt-2">
        <div className="w-full">
          <p className="my-2">Pick Up city (location)</p>
          <div className="relative">
            <MyDropdown />
          </div>
        </div>
        <div className="w-full">
          <p className="my-2">Vehicle type</p>
          <div className="relative">
            <Select style={inputStyle} placeholder="Select vehicle type">
              <Option value="car">Car</Option>
              <Option value="coach">Coach</Option>
              <Option value="train">Train</Option>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row justify-between mt-2">
        <div className="w-full">
          <p className="my-2">No. of adults</p>
          <div className="relative">
            <Input
              type="number"
              placeholder="Enter number of adults"
              style={inputStyle}
            />
          </div>
        </div>
        <div className="w-full">
          <p className="my-2">No. of kids</p>
          <div className="relative">
            <Input
              type="number"
              placeholder="Enter number of kids"
              style={inputStyle}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row justify-between mt-2">
        <div className="w-full">
          <p className="my-2">Hotel Type</p>
          <div className="relative">
            <Select style={inputStyle} placeholder="Select hotel type">
              <Option value="luxury">Luxury</Option>
              <Option value="normal">Normal</Option>
            </Select>
          </div>
        </div>
        <div className="w-full">
          <p className="my-2">Rooms</p>
          <div className="relative">
            <Input
              type="number"
              placeholder="Enter number of rooms"
              style={inputStyle}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row justify-between mt-2">
        <div className="w-full">
          <p className="my-2">Package type</p>
          <div className="relative">
            <Input
              type="number"
              placeholder="Enter package type ID"
              style={inputStyle}
            />
          </div>
        </div>
        <div className="w-full">
          <p className="my-2">Additional features</p>
          <div className="relative">
            <div className="relative">
              <Select
                style={inputStyle}
                placeholder="Select Additional Feature"
              >
                <Option value="Food">Food</Option>
                <Option value="Luggage">luggage</Option>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row justify-between mt-2">
        <div className="w-full">
          <p className="my-2">Tour you want to (but little changes)</p>
          <div className="relative">
            <MyDropdown />
          </div>
        </div>
        <div className="w-full">
          <p className="my-2">When would you like to go?</p>
          <div className="relative">
            <DatePicker style={inputStyle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
