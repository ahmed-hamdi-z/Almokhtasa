// Dependencies
import { FC, lazy, useEffect } from "react";

// Routes
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
// Languages
import i18n from "i18next";
import Cookies from "js-cookie";
import '../components/languages';

//Pages Routes
const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/about"));
const Blog = lazy(() => import("../pages/blog"));
const Contact = lazy(() => import("../pages/contact"));
const Services = lazy(() => import("../pages/services"));

// Components
const MainNavbar = lazy(() => import("../components/navbar"));
const Footer = lazy(() => import("../components/footer"));

const Layout: FC = () => {

    const lng = Cookies.get("i18next") || "ar";
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
        window.document.dir = i18n.dir();
      }, [lng, location, navigate]);
    
    return (
        <main>
            <div>
                <MainNavbar />
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <div className="overflow-hidden "> 
                <Footer />
            </div>
        </main>
    )
};

export default Layout;
