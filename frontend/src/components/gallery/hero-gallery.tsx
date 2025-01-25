// Dependencies

import { useTranslation } from "react-i18next";

const GalleryHero: React.FC= () => {
    const { t } = useTranslation();

    return (
        <div className=" w-full ">
            <div className=" w-[150%] ml-[-12vh] ltr:md:ml-[-25%] rtl:mr-[-20%] md:h-screen relative bg-center bg-cover md:top-[-28vh] top-[-5vh] bg-about flex items-center justify-center mb-16">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="md:text-6xl text-5xl relative md:top-72 top-36 font-semibold text-white">{t("Gallery")}</h1>
                  <div className="relative md:top-64 top-28">
                  <img  src="/images/gallery.png" alt="#" className="md:w-[900px] w-[400px]" />
                  </div>
                </div>
            </div>
        </div> 
    )
};

export default GalleryHero;
