

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface ServiceCardProps {
    title: string;
    image: string;
}


const ServiceCard: React.FC<ServiceCardProps> = ({ title, image }) => {
    const { t } = useTranslation();


    return (
        <div className="  transform hover:scale-105 transition-transform duration-300  ">
            <div className="">
                <img src={image} alt='' className="md:w-[38vw] w-[90%] h-auto object-cover mx-auto rounded-[35px] md:rounded-[55px]" />
            </div>
            
            <div className="absolute top-5 mx-auto w-full">
                <h3 className="text-center text-white text-[16px] md:text-3xl font-semibold">{t(title)}</h3>
            </div>
        </div>
    );
};

const ServicesSection: React.FC = () => { 
    const { t } = useTranslation();

    const services = [
        {
            title: "Mobile Veterinary Services",
            image: "/images/Mobile.png", 
        },
        {
            title: "Emergency Services",
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
            <div className=" text-center mb-3 text-[#505050]">
                <h2 className="text-3xl  font-bold mb-10 ">{t("Services")} </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 my-16 ">
                    {services.map((service) => (
                        <ServiceCard key={service.title} title={service.title} image={service.image} />
                    ))}
                </div>
                <Link to="/about" className="bg-[#57C8BF] text-white px-8 py-2.5 rounded-full shadow-md hover:bg-teal-500 transition duration-300 font-semibold">
                      {t("See More")}
                </Link>
            </div>
        </section>
    );
};

export default ServicesSection;
