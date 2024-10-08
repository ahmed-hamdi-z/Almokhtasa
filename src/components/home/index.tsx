// Dependencies
import { FC, lazy } from "react";
// Components
const Hero = lazy(() => import("./hero"));

const HomeComponents: FC = () => {

    return (
        <div >
            <Hero />
        </div>
    )
};

export default HomeComponents;
