// Dependencies
import { FC, lazy } from "react";
// React Router
import { Outlet } from "react-router-dom";

// Components
const AboutSection = lazy(() => import("../../components/home/about-section"));
import Hero from "../../components/home/hero";
import ServicesSection from "../../components/home/services-section";
import ChooseUs from "../../components/home/choose";
import BlogSection from "../../components/home/blog-section";
import ScrollingTestimonials from "../../components/home/feedback";


// Pages
const Home: FC = () => {

  return (
    <div className='w-full h-full'>

      <div className="w-full cursor-pointer">
        <Hero videoUrl="https://sa.3ddigital.solutions/ar/tour/2e8zfr3khb" />
      </div>

      <div className="w-full h-[50%] mt-16">
        <AboutSection />
      </div>
      <div className="w-full ">
        <ServicesSection />
      </div>
      <div className="w-full overflow-hidden">
        <ChooseUs />
      </div>
      <div className="w-full overflow-hidden">
        <BlogSection />
      </div>
      <div className="w-full h-full">
        <ScrollingTestimonials />
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
