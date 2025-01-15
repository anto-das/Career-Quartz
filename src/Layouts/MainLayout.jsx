import { Outlet } from "react-router-dom";
import Footer from "../Pages/shared/Footer";
import Navbar from "../Pages/shared/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto">
              <Outlet></Outlet>
            </div>
          <Footer></Footer>
        </div>
    );
};

export default MainLayout;