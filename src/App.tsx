// Dependencies
import { FC, lazy, Suspense } from "react";

// Router
import { HashRouter as Router } from "react-router-dom";

// Main Style File
import './index.css'

// import Loading from "./components/loading";

// Layout
const Layout = lazy(()=> import( "./layout"));

const App:FC = ()=>{
  return (
      <Router>
        <Suspense fallback='loading...' >
          <Layout />
        </Suspense>
      </Router>
  )
}

export default App;
