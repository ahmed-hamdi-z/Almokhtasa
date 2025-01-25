import { useTranslation } from "react-i18next";

const HeroSection = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full h-[110vh] ">
            <div className="bg-blog-hero bg-cover bg-center w-[120%] h-full md:mt-[-28vh] mt-[-22vh] rtl:-mr-2 ">

                <div className="flex md:flex-row flex-col-reverse items-center justify-center w-full h-full ">
                    <div className="flex w-full items-center md:justify-center md:mt-72 mt-[-20px] ml-[-10vw]">
                        <img src="/images/hero-img-blog.png" alt="" className="md:w-[600px] w-[360px] md:ml-28 ml-16 " />
                    </div>

                    <div className="flex w-full md:items-center md:justify-start justify-center md:mt-64" >
                        <h1 className=" text-[#757575] md:text-[200px] text-8xl rtl:text-8xl font-bold md:ml-[-3vw]  z-10 "> {t("Blog")}</h1>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default HeroSection