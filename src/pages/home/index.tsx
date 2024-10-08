// Dependencies
import { FC, lazy} from "react";
// React Router
import { Outlet } from "react-router-dom";

// Components
 const HomeComponents = lazy(() => import("../../components/home"));

// Pages
const Home: FC = () => {

  return (
      <div className='w-full h-full'>
          <div>
            {/* Add Components here */}
                <HomeComponents />
          </div>

          <div>
            <Outlet />
          </div>
      </div>
  );
};

export default Home;
