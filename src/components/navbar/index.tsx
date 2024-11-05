// Dependencies
import { FC } from "react";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import {
    AnimatePresence,
    motion,
} from "framer-motion";


import { useTranslation } from "react-i18next";
import LanguagesBtn from "../languages/button";

const MainNavbar: FC = () => {
    return (
        <>
            <FlyoutNav />
        </>
    );
};

const FlyoutNav = () => {

    return (
        <nav className="fixed flex items-center w-full text-[#ffffff] bg-gradient-nav md:px-32 px-4 z-50 shadow-md shadow-[#31B8B1] opacity-95">
            <div className="flex items-center  py-1 w-full ">
                <a href="/"><img src="/images/nav-logo.png" className="w-20 h-20" /></a>
                <div className="hidden w-full md:flex md:justify-center  ">
                    <Links />
                </div>
                <MobileMenu />
            </div>
        </nav>
    );
};

const Links = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [scrollTarget, setScrollTarget] = useState<string | null>(null);
    console.log(scrollTarget);
    const handleScroll = (id: string, path?: string) => {
        const element = document.getElementById(id);

        if (element) {
            // If the section exists on the current page, scroll to it
            window.scrollTo({
                top: element.offsetTop - 100, // Adjust the offset if needed
                behavior: "smooth",
            });
        } else if (path) {
            // If the section doesn't exist on the current page, navigate to the correct page and store the target section ID
            setScrollTarget(id);
            navigate(path);
        }
    };
    return (
        <>

            <div className="flex items-center gap-10 text-xl font-monotype ">

                <button onClick={() => handleScroll("top", "/")}>
                    {t("Home")}
                </button>
                <Link to="/about" >
                    {t("Who We Are!")}
                </Link>
                <Link to='/services' >
                    {t("Services")}
                </Link>
                <Link to='/blog' >
                    {t("Blog")}
                </Link>
                <Link
                    to='/gallery' >
                    {t("Gallery")}
                </Link>
                <Link to="/contact">
                    {t("Get In Touch")}
                </Link>
            </div>
            <div className="ml-20">
                <LanguagesBtn />
            </div>
        </>
    );
};


const MobileMenu = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [scrollTarget, setScrollTarget] = useState<string | null>(null);
    console.log(scrollTarget);
    const handleScroll = (id: string, path?: string) => {
        const element = document.getElementById(id);

        if (element) {
            // If the section exists on the current page, scroll to it
            window.scrollTo({
                top: element.offsetTop - 100, // Adjust the offset if needed
                behavior: "smooth",
            });
        } else if (path) {
            // If the section doesn't exist on the current page, navigate to the correct page and store the target section ID
            setScrollTarget(id);
            navigate(path);
        }
    };
    const [open, setOpen] = useState(false);

    return (
        <div className="md:block lg:hidden flex  z-50 gap-4 w-full">
            <div className="flex flex-row-reverse items-center justify-start gap-4 mr-auto ">
                <button onClick={() => setOpen(true)} className="block text-3xl">
                    <FiMenu />
                </button>
                <div className="p-1">
                    <LanguagesBtn />
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.nav
                        initial={{ x: "100vw" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100vw" }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="fixed left-0 top-0 flex h-screen w-full flex-col bg-gradient-nav opacity-95"
                    >
                        <div
                            className="flex items-center justify-between p-6"
                            onClick={() => setOpen(false)} >

                            <div className="p-1">
                                <LanguagesBtn />
                            </div>

                            <button onClick={() => setOpen(false)}>
                                <FiX className="text-3xl text-[#000000]" />
                            </button>
                        </div>
                        <div className="h-screen mt-10">
                            <div className="flex flex-col items-center">
                                <div className="flex flex-col gap-8 text-3xl font-semibold text-center" onClick={() => setOpen(false)}>
                                    <button className="relative px-4 py-2 border-b-2  rounded-md border-[#835782]  text-[#fff]  transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        onClick={() => handleScroll("top", "/")}>
                                        {t("Home")}
                                    </button>
                                    <Link className="relative px-4 py-2 border-b-2  rounded-md border-[#835782]  text-[#fff] transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        to="/about" >
                                        {t("Who We Are!")}
                                    </Link>
                                    <Link className="relative px-4 py-2 border-b-2  rounded-md border-[#835782]  text-[#fff] transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        to='/services' >
                                        {t("Services")}
                                    </Link>
                                    <Link className="relative px-4 py-2 border-b-2  rounded-md border-[#835782]  text-[#fff] transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        to='/blog' >
                                        {t("Blog")}
                                    </Link>
                                    <Link className="relative px-4 py-2 border-b-2  rounded-md border-[#835782]  text-[#fff] transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        to='/gallery' >
                                        {t("Gallery")}
                                    </Link>
                                    <Link className="relative px-4 py-2 border-b-2  rounded-md border-[#835782]  text-[#fff] transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        to="/contact">
                                        {t("Get In Touch")}
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    );
};
export default MainNavbar;
