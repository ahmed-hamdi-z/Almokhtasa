// Dependencies
import { FC, lazy } from "react";
// React Router
import { Outlet } from "react-router-dom";

// Components
const GalleryHero = lazy(() => import("../../components/gallery/hero-gallery"));
const GalleryImg = lazy(() => import("../../components/gallery/gallery-img"));

// Pages
const Gallary: FC = () => {

  return (
    <div className='w-full h-full overflow-hidden '>

      <div className="w-full">
        <GalleryHero />
      </div>
      <div className="w-full">
        <GalleryImg />
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Gallary;
