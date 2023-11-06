import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Headroom from "react-headroom";
import Navbar from "../Components/Navbar/Navbar";

const Root = () => {
    return (
        <div>
             <Headroom   >
                <Navbar></Navbar>
            </Headroom>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;