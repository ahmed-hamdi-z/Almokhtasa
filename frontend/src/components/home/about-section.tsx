// Dependencies
import { FC } from "react";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AboutSection: FC = () => {

    const { t } = useTranslation();
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 bg-white  ">
            {/* Left Image Section */}
            <div className="">
                <img
                    src="/images/about.png" 
                    alt="Pet Clinic"
                    className="w-96 h-auto object-cover rounded-lg scale-100 hover:scale-105" />
            </div>
            
            {/* Right Content Section */}
            <div className="text-center md:text-left text-[#505050] md:max-w-xl px-5 rtl:text-right mb-8">
                <h2 className="text-3xl font-semibold  mb-2"> {t("About Us")}</h2>
                <p className=" mb-6 text-xl font-thin ">
                {t("About Us Disc")}
                </p>
                <Link to="/about" className="bg-[#57C8BF] text-white px-8 py-2.5 rounded-full shadow-md hover:bg-teal-500 transition duration-300 font-semibold ">
                      {t("See More")}
                </Link>
            </div>
        </div>
    )
};

export default AboutSection;
