import Image from "next/image";
import check from "../../public/domestic/check.png";
import cancel from "../../public/domestic/Cancel.png"
const Cost = () => {
  const includeCost = [
    "Pick-up or Drop-off service from and to Airport(in our own vehicle)",
    "Transportation to and from!!",
    "Food all along the trip(Breakfast, Lunch, Dinner and a cup of coffee or tea) and accommodations during the trip in hotels with family environment",
    "Transportation, food, accommodation and insurance of Guide during the trip",
    "Down jacket, all-season sleeping bag, duffel bag and trekking map(in case if you don’t have your",
    "First Aid Medical Kit(Your guide will carry the Medical Kit but we also advise to bring yourself for your own use, as far as possible)",
    "All the required permits and paperwork",
  ];

  const costExclude = [
    "International Airfare",
    "Visa Charges",
    "Hotel Expenses(In Kathmandu, some packages do include hotel expenses)",
    "Your travel and medical insurance",
    "Personal Expenses such as shopping, bar bills, hot shower, telephone, laundry, titbits etc",
    "Food and accommodations in Kathmandu",
    "Services not mentioned or not promised by the agent/agency",
    "Emergency expenses such as expenses on chartered helicopter.",
  ];
  return (
    <div className="flex flex-col gap-6 mt-4 p-6 lg:p-0 ">
      <p className="text-2xl font-bold">Cost</p>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <p className="text-2xl">The Cost Includes</p>
          <div className="flex flex-col gap-2">
            {includeCost.map((item, index) => (
              <div className="flex flex-row gap-4">
                <Image
                  src={check}
                  alt="checkbox.."
                  className="h-4 w-4 mt-[4px]"
                />
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-2xl ">The Cost Excludes</p>
            <div className="flex flex-col gap-2">
                {costExclude.map((item , index)=>(
                    <div className="flex flex-row gap-4">
                        <Image src={cancel} alt="cancel icon.." className="h-4 w-4 mt-[4px]"/>
                        <p>{item}</p>

                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cost;
