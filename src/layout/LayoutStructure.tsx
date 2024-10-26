// Dependencies
import { FC, lazy, useEffect } from "react";

// React Router
import { Outlet } from "react-router-dom";

// React Bootstrap
import { Col, Row } from "react-bootstrap";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import { useLocation } from "react-router-dom";

// Components
const AboutSection = lazy(() => import("@/components/home/about-section"));
const Hero = lazy(() => import("@/components/home/hero"));
const ServicesSection = lazy(() => import("@/components/home/services-section"));
const ChooseUs = lazy(() => import("@/components/home/choose"));
const BlogSection = lazy(() => import("@/components//home/blog-section"));
const TopButton = lazy(() => import("@/components/top-btn"));
const ScrollingTestimonials = lazy(() => import("@/components/home/feedback"));
const WhatsAppIcon = lazy(() => import("@/components/whatsapp-icon"));


// Pages
const LayoutStructure: FC = () => {
  const { direction, language } = useSelector( 
    (state: RootState) => state.settings
  );
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <main className={`main-layout direction-${direction} lang-${language}`}>
        <Row className="main-content">
          <Col xs="12">
            <div className="w-full cursor-pointer overflow-hidden" id="top">
            <Hero videoUrl="https://sa.3ddigital.solutions/ar/tour/2e8zfr3khb" />
            </div>
            <Col className="w-full overflow-hidden mt-16">
            <AboutSection />
            </Col>
          </Col>
          <Col xs="12" className="overflow-hidden">
          <ServicesSection />
          </Col>
          <Col xs="12" className="overflow-hidden">
          <ChooseUs />
          </Col>
          <Col className="bg-white" xs="12">
          <BlogSection />
          </Col>
          <Col xs="12">
          <ScrollingTestimonials />
          </Col>
          <Col xs="12">
            <Outlet />
          </Col>
        </Row>
      </main>
      <WhatsAppIcon />
      <TopButton />
    </>
  );
};

export default LayoutStructure;
