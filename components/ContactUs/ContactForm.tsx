"use client";
import { useState } from "react";
import Image from "next/image";
import user from "../../public/Contactus/user (1) 1.png";
import emailIcon from "../../public/Contactus/envelope 1.png";
import msg from "../../public/Contactus/edit 1.png";
import send from "../../public/Contactus/send (1) 1.svg";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Show thank you message
    setShowMessage(true);

    // Reset form fields
    setFormData({ name: "", email: "", message: "" });

    // Hide message after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div className="md:w-[47%] w-full bg-[#F4F8F6] p-12 flex flex-col gap-8">
      {showMessage ? (
        <div className="text-green-600 text-lg font-semibold">
          Thanks for contacting us! We will get in touch with you shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl">Fill Up The Form</h1>
            {/* <p className="text-sm font-light">
              Your email address will not be published. Required fields are marked *
            </p> */}
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-row gap-2 border-b-[0.5px] border-gray-400">
              <Image src={user} alt="user" className="lg:w-[5%] md:w-[7%] w-[9%] mt-[5px]" />
              <input
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent border-0 placeholder:text-sm placeholder:text-black w-full"
                placeholder="Your Name*"
              />
            </div>
            <div className="flex flex-row gap-2 border-b-[0.5px] border-gray-400">
              <Image src={emailIcon} alt="email" className="lg:w-[5%] md:w-[7%] w-[9%] mt-[5px]" />
              <input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent border-0 placeholder:text-sm placeholder:text-black w-full"
                placeholder="Email Address*"
              />
            </div>
            <div className="flex flex-row gap-2 border-b-[0.5px] border-gray-400">
              <Image src={msg} alt="message" className="lg:w-[5%] md:w-[6%] w-[15%] h-[15%] mt-[6px]" />
              <textarea
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="bg-transparent border-0 placeholder:text-sm placeholder:text-black w-full"
                placeholder="Enter Your Message Here*"
              />
            </div>
          </div>
          <button
            type="submit"
            className="flex flex-row gap-2 bg-[#00ADEE] text-white justify-center py-2 px-2 w-[87%] md:w-[70%] lg:w-[45%] xl:w-[40%]"
          >
          
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
