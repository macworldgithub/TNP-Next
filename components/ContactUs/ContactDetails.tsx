import add from "../../public/Contactus/address.png";
import phone from "../../public/Contactus/phone.png";
import email from "../../public/Contactus/email.png";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";

const inter = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300"],
  style: ["normal"],
});
const ContactDetails = () => {
  const contactdata = [
    {
      icon: add,
      title: "Address line",
      desc: ["Bowery St, Abu Dhabi, NY 10013,Dubai"],
    },
    {
      icon: phone,
      title: "Phone Number",
      desc: ["+971 - 568 - 6523"],
    },
    {
      icon: email,
      title: "Mail Adress",
      desc: ["email@example.com", "info@yourdomain.com"],
    },
  ];

  return (
    <div className="w-full h-full flex flex-row lg:gap-6 flex-wrap gap-2  md:gap-4  justify-center">
      {contactdata.map((item, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 items-center justify-center sm:w-[30%] w-[90%] py-12 lg:px-8 md:px-4 px-4 bg-white border-[0.5px] border-gray-400 shadow-md shadow-gray-300"
        >
          <Image src={item?.icon} alt="icon here" className="w-[10%]" />
          <h2 className="font-semibold">{item?.title}</h2>
          <div className="flex flex-col gap-[0.5px]">
            {(item?.desc).map((des, index) => (
              <p
                key={index}
                className={`text-center text-sm text-[#4F545A] ${inter.className}`}
              >
                {des}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ContactDetails;
