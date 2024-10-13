// Dependencies
import { FC } from "react";


const AboutSection: FC = () => {

    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 bg-white  ">
            {/* Left Image Section */}
            <div className="">
                <img
                    src="/images/about.png" // Replace this with your image path
                    alt="Pet Clinic"
                    className="w-96 h-auto object-cover rounded-lg scale-100 hover:scale-105"
                />
            </div>
            
            {/* Right Content Section */}
            <div className="text-center md:text-left md:max-w-xl px-5">
                <h2 className="text-2xl font-bold text-[#505050] mb-2">About Us</h2>
                <p className="text-[#505050] mb-6 text-xl font-thin">
                    At Almokhtassa Pet Clinic, we're more than just veterinarians; we're passionate animal lovers dedicated to
                    providing the highest quality care for your furry friend. Our state-of-the-art facility and experienced team
                    are committed to ensuring your pet's health and happiness.
                </p>
                <button className="bg-[#57C8BF] text-white px-7 py-1.5 rounded-full shadow-md hover:bg-teal-500 transition duration-300 font-semibold">
                    See More
                </button>
            </div>
        </div>
    )
};

export default AboutSection;
