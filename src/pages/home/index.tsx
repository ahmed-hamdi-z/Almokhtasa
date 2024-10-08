// Dependencies
import { FC} from "react";
// React Router
import { Outlet } from "react-router-dom";

// Components
// const EX = lazy(() => import("./ex"));

// Pages
const Home: FC = () => {

  return (
      <div className='w-full h-full'>
       
          <div>
            {/* Add Components here */}
                Home
          </div>

          <div>
            <Outlet />
          </div>
      </div>
  );
};

export default Home;
