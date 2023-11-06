
import Newsletter from "./Newsletter";
import Offer from "./Offer";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div className="">
            <div className="bg-[url('https://i.ibb.co/MnGkQ9d/bg-1.jpg')] bg-fixed h-[100vh]">
                <div className="flex flex-col items-center justify-center h-screen space-y-4">
                    <h1 className="text-7xl text-white text-center">Enjoy a Luxury Experience</h1>
                    <div className="">
                        <hr />
                        <h3 className="text-2xl text-white">HOTELS & RESORTS</h3>
                        <hr />
                    </div>

                </div>
            </div>
            <Offer></Offer>
            <Testimonial></Testimonial>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;