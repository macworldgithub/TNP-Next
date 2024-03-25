import TempImage from "../../../public/home/Rectangle 19368.png";
import Icon from "../../../public/gallery/Group.png";
import Image from "next/image";


const Gallery = () => {
    return (
        <div className="flex my-20 justify-center">
            <div className="flex flex-col items-center">
                <h1 className="bg-blue-500">Gallery</h1>

                <div className="flex w-4/5 h-80 lg:h-full" >
                    <div className="flex flex-col">
                        <div className="h-40 w-full py-2 px-5 relative">
                            <Image src={TempImage} className="h-full rounded-lg w-full" alt="gallery" />
                            <div className="h-full w-full py-2 px-5 z-10 top-0 left-0 absolute">
                                <div className="h-full w-full bg-[rgba(0,0,0,0.5)] justify-center items-center flex rounded-lg opacity-2 z-10">
                                    <div className="h-full w-full flex justify-center items-center hover:opacity-100 opacity-0 cursor-pointer">
                                        <div className="bg-primary h-16 w-16 cursor-pointer flex rounded-full justify-center items-center">
                                            <Image src={Icon} className="h-4 w-4" alt="gallery" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-80 py-2 w-full px-5 relative">
                            <Image src={TempImage} className="w-full h-full rounded-lg" alt="gallery" />
                            <div className="h-full w-full py-2 px-5 z-10 top-0 left-0 absolute">
                                <div className="h-full w-full bg-[rgba(0,0,0,0.5)] justify-center items-center flex rounded-lg opacity-2 z-10">
                                    <div className="h-full w-full flex justify-center items-center hover:opacity-100 opacity-0 cursor-pointer">
                                        <div className="bg-primary h-16 w-16 cursor-pointer flex rounded-full justify-center items-center">
                                            <Image src={Icon} className="h-4 w-4" alt="gallery" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col">
                        <div className="h-60 py-2 relative w-full">
                            <Image src={TempImage} className="w-full h-full rounded-lg" alt="gallery" />
                            <div className="h-full w-full py-2 z-10 top-0 left-0 absolute">
                                <div className="h-full w-full bg-[rgba(0,0,0,0.5)] justify-center items-center flex rounded-lg opacity-2 z-10">
                                    <div className="h-full w-full flex justify-center items-center hover:opacity-100 opacity-0 cursor-pointer">
                                        <div className="bg-primary h-16 w-16 cursor-pointer flex rounded-full justify-center items-center">
                                            <Image src={Icon} className="h-4 w-4" alt="gallery" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-60 py-2  relative w-full">
                            <Image src={TempImage} className="w-full h-full rounded-lg" alt="gallery" />
                            <div className="h-full w-full py-2 z-10 top-0 left-0 absolute">
                                <div className="h-full w-full bg-[rgba(0,0,0,0.5)] justify-center items-center flex rounded-lg opacity-2 z-10">
                                    <div className="h-full w-full flex justify-center items-center hover:opacity-100 opacity-0 cursor-pointer">
                                        <div className="bg-primary h-16 w-16 cursor-pointer flex rounded-full justify-center items-center">
                                            <Image src={Icon} className="h-4 w-4" alt="gallery" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="h-80 py-2 px-5  relative w-full">
                            <Image src={TempImage} className="w-full h-full rounded-lg" alt="gallery" />
                            <div className="h-full w-full py-2 px-5 z-10 top-0 left-0 absolute">
                                <div className="h-full w-full bg-[rgba(0,0,0,0.5)] justify-center items-center flex rounded-lg opacity-2 z-10">
                                    <div className="h-full w-full flex justify-center items-center hover:opacity-100 opacity-0 cursor-pointer">
                                        <div className="bg-primary h-16 w-16 cursor-pointer flex rounded-full justify-center items-center">
                                            <Image src={Icon} className="h-4 w-4" alt="gallery" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-40 py-2 px-5 relative w-full">
                            <Image src={TempImage} className="w-full h-full rounded-lg" alt="gallery" />
                            <div className="h-full w-full py-2 px-5 z-10 top-0 left-0 absolute">
                                <div className="h-full w-full bg-[rgba(0,0,0,0.5)] justify-center items-center flex rounded-lg opacity-2 z-10">
                                    <div className="h-full w-full flex justify-center items-center hover:opacity-100 opacity-0 cursor-pointer">
                                        <div className="bg-primary h-16 w-16 cursor-pointer flex rounded-full justify-center items-center">
                                            <Image src={Icon} className="h-4 w-4" alt="gallery" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Gallery;

