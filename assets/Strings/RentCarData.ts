import iconImage1 from "../../assets/rentcar/Icon1.svg";
import iconImage2 from "../../assets/rentcar/Icon2.svg";
import iconImage3 from "../../assets/rentcar/Icon3.svg";
import iconImage4 from "../../assets/rentcar/Icon4.svg";
import calendarIcon from "../../assets/rentcar/calendarIcon.svg";
import completeIcon from "../../assets/rentcar/completeIcon.svg";
import listIcon from "../../assets/rentcar/listIcon.svg";

export const carTypes = [
  { name: "Sedan", iconImage: iconImage1 },
  { name: "SUVs", iconImage: iconImage2 },
  { name: "Luxury", iconImage: iconImage3 },
  { name: "4x4", iconImage: iconImage4 },
];

export const getCarMotivationData = [
    {
        Title: "Choose Your Car",
        Description: "Select a car using search or catalog",
        Image: listIcon
    },
    {
        Title: "Contact Your Dealer",
        Description: "After you’ve selected a car a dealer will contact you.",
        Image: calendarIcon
    },
    {
        Title: "Get Your Car",
        Description: "Here you are! Your car is book and waiting for you.",
        Image: completeIcon
    }
];
