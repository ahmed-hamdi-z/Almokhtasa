// Dependencies
import { FC, lazy } from "react";

// Routes
import { Routes, Route } from "react-router-dom";
import MainNavbar from "../components/navbar";
import Footer from "../components/footer";

//Pages Routes
const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/about"));
const Services = lazy(() => import("../pages/services"));

const Layout: FC = () => {

    return (
        <main >
            <div>
                <MainNavbar />
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
            </Routes>
            <div className="overflow-hidden "> 
                <Footer />
            </div>
        </main>
    )
};

export default Layout;
