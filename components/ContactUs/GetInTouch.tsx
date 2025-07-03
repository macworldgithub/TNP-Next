import Image from "next/image";
import contactImg from "../../assets/contact/contactimg.jpg";

const GetInTouch = () => {
  return (
    <div className="md:w-[47%] w-full flex flex-col gap-4 py-12">
      <h1 className="text-2xl font-semibold">Get In Touch</h1>
      <p className="text-sm font-light text-justify">
        Tours Dubai is a young and exciting Destination management company based in Dubai. The company is recognized for professionalism, impressive operational infrastructure, personalized service and creative itineraries which enable us to provide clients with the most memorable experience.
      </p>
      <div className="w-full h-96 relative"> {/* Increased height here */}
        <Image
          src={contactImg}
          alt="Contact"
          fill
          className="object-contain rounded" // Show full image without cropping
        />
      </div>
    </div>
  );
};

export default GetInTouch;
