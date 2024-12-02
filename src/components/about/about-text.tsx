// Dependencies

import { useTranslation } from "react-i18next";

const AboutText: React.FC = () => {

    const { t } = useTranslation();

    return (
        <div className=" w-full h-full flex flex-col justify-center px-3 gap-y-6 text-[#8B8B8B] rtl:text-right font-light">
            <h1 className="text-5xl font-semibold rtl:text-right"> {t("About Us")} </h1>
            <p className="text-2xl "> {t("About Us Disc")} </p>

            <h1 className="text-5xl font-semibold rtl:text-right ">{t("our-services")}</h1>
            <ul className="text-2xl tracking-tight leading-normal">
                <li><span>{t("Diagnosis and Treatment")}</span> {t("We diagnose and treat")}</li>
                <li><span>{t("Pet Surgery")}</span>{t("We offer")}</li>
                <li><span>{t("Wellness Exams")}</span>{t("We help you")}</li>
                <li><span>{t("Other Services")}</span>{t("Our services also")}</li>
            </ul>

            <h1 className="text-5xl font-semibold rtl:text-right">{t("why choose us")}</h1>
            <ul className="text-2xl tracking-tight leading-normal">
                <li><span>{t("Qualified Veterinarians")}</span> {t("Our team")}</li>
                <li><span>{t("Latest Technology")}</span>{t("We use the latest")}</li>
                <li><span>{t("Personalized Care")}</span>{t("We treat each")}</li>
                <li><span>{t("Competitive Prices")}</span>{t("We offer our services")}</li>
            </ul>
        </div>
    )
};

export default AboutText;
