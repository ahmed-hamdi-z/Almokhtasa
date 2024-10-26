// Dependencies
import { FC, lazy } from "react";
// React Router
import { Outlet } from "react-router-dom";
import BlogCards from "@/components/blog/blog-cards";

// Components
 const HeroSection = lazy(() => import("@/components/blog/hero-section"));

// Pages
const Blog: FC = () => {

  return (
    <div className='w-full h-full'>

      <div className="w-full h-full overflow-hidden md:mb-0 mb-[-23vh]">
        <HeroSection  />
      </div>
      <div className="w-full h-full bg-[#F1F1F1]">
        <BlogCards  />
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Blog;
