// Dependencies
import React from "react";

import { useTranslation } from "react-i18next";

const AboutHero: React.FC= () => {
    const { t } = useTranslation();

    return (
        <div className=" w-full ">
            <div className=" w-[150%] ml-[-15vh] ltr:md:ml-[-25%] ltr:ml-[-20%] rtl:md:mr-[-25%] rtl:mr-[-20%] md:h-screen relative bg-center bg-cover md:top-[-28vh] top-[-5vh] bg-about flex items-center justify-center mb-16">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="md:text-[150px] text-7xl relative md:top-72 top-36 font-semibold text-white">{t("About Us")}</h1>
                  <div className="relative md:top-48 top-28">
                  <img  src="/images/about-section.png" alt="#" className="md:w-[800px] w-[400px]" />
                  </div>
                </div>
            </div>
        </div> 
    )
};

export default AboutHero;
