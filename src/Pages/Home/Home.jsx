
import { useEffect, useState } from "react";
import Newsletter from "./Newsletter";
import Offer from "./Offer";
import Testimonial from "./Testimonial/Testimonial";
import { Link } from "react-router-dom";

const Home = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/rooms')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [])
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
            <div className="bg-gray-200 py-20">
                <div className="text-center text-black space-y-5">
                    <h2 className="text-6xl">Our Rooms</h2>
                    <hr className="w-36 mx-auto border-b border-[#a28441]" />
                    <p className="text-lg text-gray-400 max-w-lg mx-auto">When you host a party or family reunion, the special celebrations let you streng then bonds with</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
                        {
                            rooms.map(room => <div key={room._id} className="card w-96 bg-base-100 shadow-xl">
                                <figure><img className="w-full" src={room.thumbnail_img} alt="Shoes" /></figure>
                                <div className="card-body hover:text-[#a28441]">
                                    <h2 className="card-title ">{room.category_name}</h2>
                                    <p className="text-left text-[#a28441]">${room.price_per_night} / Per Night</p>
                                    <div className="card-actions justify-end">

                                        <Link to={`rooms/details/${room._id}`}>
                                            <button className="text-white font-medium bg-[#a28441] px-4 py-2 rounded-md">Book Now</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>)
                        }
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