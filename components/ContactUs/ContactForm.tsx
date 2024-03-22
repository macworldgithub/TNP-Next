'use client'
import user from "../../public/Contactus/user (1) 1.png";
import email from "../../public/Contactus/envelope 1.png";
import msg from "../../public/Contactus/edit 1.png";
import send from "../../public/Contactus/send (1) 1.png"
import Image from "next/image";
const ContactForm = ()=>{
    return(
        <div className="md:w-[47%] w-full bg-[#F4F8F6] p-12 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
            <h1 className="text-2xl ">Fill Up The Form</h1>
            <p className="text-sm font-light">Your email address will not be published. Required fields are marked *</p>
            </div>
            <div className="flex flex-col gap-10">
            <div className="flex flex-row gap-2 border-b-[0.5px] border-gray-400">
                <Image src={user} alt="icon here.." className="w-[5%] h-[70%] mt-[2px]"/>
            <input type="text" className="decoration-none bg-transparent placeholder:text-sm placeholder:text-black " required placeholder="Your Name*"/>
            </div>
            <div className="flex flex-row gap-2 border-b-[0.5px] border-gray-400">
                <Image src={email} alt="icon here.." className="w-[5%] h-[70%] mt-[2px]"/>
            <input type="email" className="decoration-none bg-transparent placeholder:text-sm placeholder:text-black" required placeholder="Email Address*"/>
            </div>
            <div className="flex flex-row gap-2 border-b-[0.5px] border-gray-400">
                <Image src={msg} alt="icon here.." className="w-[5%] h-[15%] mt-[2px]"/>
            <textarea rows={4} cols={50} className="decoration-none bg-transparent placeholder:text-sm placeholder:text-black" required placeholder="Enter Your Messege Here*"/>
            </div>
            </div>
            <button className="flex flex-row gap-2 bg-[#00ADEE] text-white justify-center  py-2 px-2 w-[87%]  md:w-[90%] lg:w-[50%]"><Image src={send} alt="icon.." className="text-blue-900 w-[15%]"/>
            Get In Touch
            </button>

        </div>
    )
}
export default ContactForm;