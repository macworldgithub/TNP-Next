import { NextPage } from "next";

interface Props {}

const Payment: NextPage<Props> = ({}) => {
  return (
    <div className="w-11/12 md:w-[700px] px-12 py-14 mt-10 md:mt-4 bg-white rounded-lg shadow-2xl">
      <div className=" bg-[#00ADEE] text-white w-32 py-1 px-2 rounded-md -mt-12 absolute -ml-12 md:-ml-[3rem] lg:-ml-28">
        Total Charges
      </div>
      <div className=" flex flex-col text-center justify-center">
        <p className="font-semibold text-md md:text-lg mb-4">
          Thank you for create your own trip!
        </p>
        <p className=" font-bold md:text-xl">Your Own Trip Charges 3000AED </p>
      </div>
    </div>
  );
};

export default Payment;
