// Dependencies
import { FC, lazy } from "react";
// React Router
import { Outlet } from "react-router-dom";
import Form from "@/components/contact/form";

// Components
const HeroSection = lazy(() => import("@/components/contact/hero"));


// Pages
const About: FC = () => {

    return (
        <div className='w-full h-full md:mb-96 mb-[120vh]'>
            <div className="overflow-hidden">
                <HeroSection />
            </div>
            <div className="w-full overflow-hidden absolute md:-bottom-96  mt-[-30vh]  " >
                <Form />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default About;
