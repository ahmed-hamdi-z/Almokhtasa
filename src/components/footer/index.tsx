// Footer.tsx

import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-footer bg-cover w-[130%] rtl:mr-[-12%] md:ml-[-18%]">
            <div className=" flex flex-col md:ltr:items-center ltr:items-start items-center ltr:mx-12 py-10 ">
                {/* Footer Wrapper */}
                <div className="text-center md:text-left">
                    <img src="/images/logo.svg" alt="Logo" className="mx-auto md:mx-0 mb-4" />
                </div>
                <div className="flex flex-col md:flex-row items-center md:gap-x-20">
                    {/* Information Columns */}
                    <div className="flex flex-row rtl:md:gap-32 md:space-x-32 ">
                        {/* First Info Block */}
                        <div className='mt-4 flex flex-col items-center  '>
                            <span className="block capitalize text-footer-text text-lg font-semibold">
                                {t("Information")}
                            </span>
                            <ul className="list-unstyled space-y-1 mt-3">
                                <li>
                                    <Link to='/about' className="text-footer-text hover:text-white block pb-2 text-sm " >{t("Who We Are!")}</Link>
                                </li>
                                <li>
                                    <Link to='/services' className="text-footer-text hover:text-white block pb-2 text-sm" >{t("Services")}</Link>
                                </li>
                                <li>
                                    <Link to='/blog' className="text-footer-text hover:text-white block pb-2 text-sm" >{t("Blog")}</Link>
                                </li>

                                <li>
                                    <Link className="text-footer-text hover:text-white block pb-2 text-sm" to="/contact">{t("Get In Touch")}</Link>
                                </li>
                            </ul>
                        </div>

                        <div className='mt-4 flex flex-col items-center justify-center'>
                            <span className="block capitalize text-footer-text text-lg font-semibold">
                                {t("Contact")}
                            </span>
                            <ul className="list-unstyled">
                                <li className="text-footer-text">

                                    <a
                                        className="text-footer-text hover:text-white text-sm flex my-3 ml-3"
                                        href="tel:0509130845" >

                                        <img src='/images/phone.svg' className="w-6 h-6 text-footer-text cursor-text" />{" "}
                                        <span className=" mx-2 text-base">0500505154</span>
                                    </a>
                                </li>
                                <li className="text-footer-text">

                                    <a
                                        className="text-footer-text hover:text-white text-sm flex my-3 ml-3"
                                        href="mailto:info@dream.sa.com">

                                        <img src='/images/email.svg' className="w-6 h-6 text-footer-text cursor-text " />
                                        <span className=" mx-10 text-base absolute">info@almokhtassa.sa</span>
                                    </a>
                                </li>
                                <li className="text-footer-text">
                                    <a
                                        className="text-footer-text hover:text-white cursor-pointer text-sm flex my-3 ml-3"
                                        href="https://maps.app.goo.gl/hLpfraJfAr8m7hp5A?g_st=com.google.maps.preview.copy">

                                        <img src='/images/location.svg' className="w-6 h-6 text-footer-text cursor-pointer" />
                                        <span className=" mx-10 text-base absolute"> {t("Riyadh-Al Nargis district")}</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="flex items-center justify-center w-full space-x-2 md:mt-8 mt-16 rtl:-mr-16 ltr:-ml-14">
                                <a href="https://www.instagram.com/mokhtassa.pet" className='rtl:ml-2' aria-label="Instagram">
                                    <img src="/images/insta.svg" className='w-10 h-10' alt="#" />
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=61566832435162" aria-label="Facebook">
                                    <img src="/images/face.svg" className='w-10 h-10' alt="#" />
                                </a>
                                <a href="https://x.com/almokhtassapet" aria-label="Twitter">
                                    <img src="/images/x.svg" className='w-10 h-10' alt="#" />
                                </a>
                                <a href="https://www.youtube.com/@AlmokhtassaPet" aria-label="YouTube">
                                    <img src="/images/youtube.svg" className='w-10 h-10' alt="#" />
                                </a>
                                <a href="https://www.tiktok.com/@almokhtassa.pet" aria-label="">
                                    <img src="/images/tiktok.svg" className='w-10 h-10' alt="#" />
                                </a>
                                <a href="https://www.snapchat.com/add/almokhtassa?invite_id=yF0GClDc&locale=en_SA%40calendar%3Dgregorian&share_id=1xYALSszQsCgamp6MIqyZw&xp_id=1&sid=9a100c96bc8f4d6cb39b5b6b7f791211" aria-label="">
                                    <img src="/images/snapchat.svg" className='w-10 h-10' alt="#" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="flex flex-col items-center md:items-start md:mt-0 mt-7">
                        <h3 className="text-footer-text text-lg font-semibold">{t("let us contact")}</h3>
                        <input
                            type="text"
                            placeholder={t("Email")}
                            className="mt-2 px-4 py-2 rounded-md w-full md:w-48 outline-none"
                        />
                        <input
                            type="text"
                            placeholder={t("Notes")}
                            className="mt-2 px-4 py-2 rounded-md w-full md:w-48 outline-none"
                        />
                        <button className="mt-4 px-6 py-2 bg-[#FB8302] text-white rounded-md ">
                            {t("Submit")}
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
