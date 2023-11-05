import Headroom from "react-headroom";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/MnGkQ9d/bg-1.jpg')] bg-fixed h-screen">
            <Headroom upTolerance  >
                <Navbar className=""></Navbar>
            </Headroom>
            <div className="flex flex-col items-center justify-center h-screen space-y-4">
                <h1 className="text-7xl text-white">Enjoy a Luxury Experience</h1>
                <div className="">
                    <hr /> 
                    <h3 className="text-2xl text-white">HOTELS & RESORTS</h3>
                    <hr />
                </div>
               
            </div>
        </div>
    );
};

export default Home;