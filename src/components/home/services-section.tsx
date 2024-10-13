import React from "react";

interface ServiceCardProps {
    title: string;
    image: string;
}


const ServiceCard: React.FC<ServiceCardProps> = ({ title, image }) => {
    return (
        <div className="relative rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 w-[90%] mx-auto ">
            <img src={image} alt='' className="w-full h-auto object-cover shadow-md" />
            <div className="absolute top-7 md:left-20 left-16">
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
        <section className=" my-16">
            <div className=" text-center">
                <h2 className="text-3xl text-[#505050] font-bold mb-10 ">Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-5">
                    {services.map((service) => (
                        <ServiceCard key={service.title} title={service.title} image={service.image} />
                    ))}
                </div>
                <button className="mt-10 px-7 py-1.5 bg-[#57C8BF] text-white rounded-full hover:bg-teal-600 transition-colors">
                    See More
                </button>
            </div>
        </section>
    );
};

export default ServicesSection;
