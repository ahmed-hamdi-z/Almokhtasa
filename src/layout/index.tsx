// Dependencies
import { FC, lazy } from "react";

// Routes
import { Routes, Route } from "react-router-dom";

//Pages Routes
const Home = lazy(() => import("../pages/home"));

const Layout: FC = () => {

    return (
        <main >
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </main>
    )
};

export default Layout;
