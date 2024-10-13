
// Dependencies
import { FC, lazy } from "react";
// React Router
import { Outlet } from "react-router-dom";
import AboutText from "../../components/about/about-text";
import StuffSection from "../../components/about/stuff";

// Components
const AboutHero = lazy(() => import("../../components/about/about-hero"));


// Pages
const About: FC = () => {

  return (
    <div className='w-full h-full'>
      <div>
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
