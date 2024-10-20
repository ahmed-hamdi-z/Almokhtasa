// Dependencies
import React from "react";

import { useTranslation } from "react-i18next";

const AboutText: React.FC = () => {

    const { t } = useTranslation();

    return (
        <div className=" w-full h-full flex flex-col justify-center md:px-32 md:py-10 px-4">
            <h1 className="text-4xl font-semibold text-[#505050]">{t("About Us")}</h1>
            <p className="mt-6 text-2xl font-light">{t("About Us Disc")}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
            </p>
        </div>
    )
};

export default AboutText;
