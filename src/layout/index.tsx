// Dependencies
import { FC, lazy, useEffect } from "react";

// Routes
import { Route, Routes } from "react-router-dom";

import i18n from "i18next";
import Cookies from "js-cookie";

// Config
import { CONFIG } from "@/utils/config";
import Footer from "@/components/footer";
import MainNavbar from "@/components/navbar";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import '@/components/languages/index'

//Pages Routes
const LayoutStructure = lazy(() => import("./LayoutStructure"));
const Contact = lazy(() => import("@/pages/contact"));
const Services = lazy(() => import("@/pages/services"));
const Details = lazy(() => import("@/pages/blog-details"));
const NotFound = lazy(() => import("@/pages/not-found"));
const About = lazy(() => import("@/pages/about"));
const Blog = lazy(() => import("@/pages/blog"));
const WhatsAppIcon = lazy(() => import("@/components/whatsapp-icon"));


const Layout: FC = () => {
  const { direction, language } = useSelector(
    (state: RootState) => state.settings
  );

  const lng = Cookies.get("i18next") || "en";

  useEffect(() => {
    window.document.dir = i18n.dir();

  }, [lng]);
  return (

    <main className={`direction-${direction} lang-${language}`}>
      <div>
        <MainNavbar />
      </div>
      <Routes>
        <Route path={CONFIG.root_path} element={<LayoutStructure />} />
        <Route path={CONFIG.contact_path} element={<Contact />} />
        <Route path={CONFIG.services_path} element={<Services />} />
        <Route path={CONFIG.blog_details_path} element={<Details />} />
        <Route path={CONFIG.about_path} element={<About />} />
        <Route path={CONFIG.blog_path} element={<Blog />} />
        <Route path="*" Component={NotFound} />
      </Routes>
      <div className="overflow-hidden">
        <WhatsAppIcon />
        <Footer />
      </div>
    </main>
  )
};

export default Layout;
