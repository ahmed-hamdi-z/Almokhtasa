import { useTranslation } from "react-i18next";

const ServicesHero = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col w-full h-[70vh] bg-black" >
            <div className="flex w-full h-full mt-[90px] bg-services-hero bg-center bg-cover bg-black opacity-80 ">
            </div>
            <div className="absolute w-full h-full">
                <div className="w-full h-full flex items-center justify-center">
                    <h1 className="text-white text-5xl font-semibold ">{t("Services")}</h1>
                </div>
            </div>
        </div>
    )
}

export default ServicesHero;