// Dependencies
import React from "react";

import { useTranslation } from "react-i18next";

const AboutText: React.FC = () => {

    const { t } = useTranslation();

    return (
        <div className=" w-full h-full flex flex-col justify-center md:px-32 md:py-10 px-4  rtl:text-right">
            <h1 className="text-4xl font-semibold text-[#505050] rtl:text-right"> {t("About Us")} </h1>
            <p className="mt-6 text-2xl font-light"> {t("About Us Disc")} </p>
        </div>
    )
};

export default AboutText;
