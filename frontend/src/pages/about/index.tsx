// Dependencies
import { FC, lazy } from "react";
// React Router
import { Outlet } from "react-router-dom";

// Components
const AboutHero = lazy(() => import("@/components/about/about-hero"));
const AboutText = lazy(() => import("@/components/about/about-text"));
const StuffSection = lazy(() => import("@/components/about/stuff"));

// Pages
const About: FC = () => {

  return (
    <div className='w-full h-full'>
      <div className="overflow-hidden">
        <AboutHero />
      </div>
      <div>
        <AboutText />
      </div>
      <div className="overflow-hidden">
        <StuffSection />
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default About;
