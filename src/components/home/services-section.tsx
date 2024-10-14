import React from "react";

interface ServiceCardProps {
    title: string;
    image: string;
}


const ServiceCard: React.FC<ServiceCardProps> = ({ title, image }) => {
    return (
        <div className="  transform hover:scale-105 transition-transform duration-300  ">
            <div className="">
                <img src={image} alt='' className="md:w-[38vw] w-[90%] h-auto object-cover mx-auto " />
            </div>
            
            <div className="absolute top-7 mx-auto w-full">
                <h3 className="text-center text-white text-2xl md:text-3xl font-bold">{title}</h3>
            </div>
        </div>
    );
};

const ServicesSection: React.FC = () => {
    const services = [
        {
            title: "Mobile Veterinary Services",
            image: "/images/Veterinary.png", // replace with actual image path
        },
        {
            title: "24/7 Emergency Services",
            image: "/images/Emergency.png",
        },
        {
            title: "Specialized Veterinarians",
            image: "/images/Specialized.png",
        },
        {
            title: "Surgical Procedures",
            image: "/images/Surgical.png",
        },
    ];

    return (
        <section className=" rounded-lg overflow-hidden w-full my-16 flex items-center justify-center ">
            <div className=" text-center">
                <h2 className="text-3xl text-[#505050] font-bold mb-10 ">Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
                    {services.map((service) => (
                        <ServiceCard key={service.title} title={service.title} image={service.image} />
                    ))}
                </div>
                <button className="mt-16 px-7 py-1.5 bg-[#57C8BF] text-white rounded-full hover:bg-teal-600 transition-colors">
                    See More
                </button>
            </div>
        </section>
    );
};

export default ServicesSection;
