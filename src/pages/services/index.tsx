// Dependencies
import { FC, lazy } from "react";
// React Router
import { Outlet } from "react-router-dom";


// Components
const ServicesHero = lazy(() => import("@/components/services/services-hero"));
const ServicesCards = lazy(() => import("@/components/services/services-card"));

// Pages
const Services: FC = () => {

  return (
    <div className='w-full h-full'>

      <div className="w-full">
        <ServicesHero  />
      </div>

      <div className="w-full overflow-hidden">
        <ServicesCards  />
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Services;
