import { useLoaderData } from "react-router-dom";
import roomBanner from '../../assets/Images/rooms-banner.jpg'
import { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import swal from "sweetalert";
import { Rating } from "@smastrom/react-rating";
const DetailsPage = () => {
    const roomDetails = useLoaderData();
    const { category_name, thumbnail_img,rating, room_full_description,price_per_night } = roomDetails;
    const { user } = useContext(authContext);
    const handelbook = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const room_name = form.get("room_name");
        const adults = form.get("adults");
        const childrens = form.get("childrens");
        const arival = form.get("arival");
        const Departure = form.get("Departure");
        const email = user?.email;
        const booking = {
            room_name, adults, childrens, arival, Departure,
            thumbnail_img, email
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    swal("Book successfully", {
                        icon: "success",
                    });
                }
            })

    }
    return (
        <div className="">
            <div className="">
                <img src={roomBanner} alt="" />
            </div>
            <div className="bg-[#2A2B33] pb-7 px-5">
                <div className="max-w-7xl mx-auto py-5">
                    <h3 className="text-white">CHECK AVAILABILITY</h3>
                </div>
                <div className="max-w-7xl mx-auto ">
                    <form onSubmit={handelbook} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        <select className="select select-bordered md:w-40" name="room_name" defaultValue={category_name} required>
                            <option>Luxury Room</option>
                            <option>Double Room</option>
                            <option>Family Room</option>
                            <option>Deluxe Room</option>
                            <option>Single Room</option>
                            <option>Presidential Room</option>
                        </select>
                        <select className="select select-bordered md:w-40" name="adults" required>
                            <option disabled selected>No of adults</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        <select className="select select-bordered md:w-40" name="childrens" required>
                            <option disabled selected>No of childrens</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>

                        <div className="-mt-5 md:w-40">
                            <label className="block text-white text-sm font-bold mb-2" name="" htmlFor="date">
                                Arrival Date
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" name="arival" required />
                        </div>
                        <div className="-mt-5 md:w-40">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="date">
                                Departure Date
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" name="Departure" required />
                        </div>
                        <input className="w-32 text-white font-medium bg-[#a28441] px-4 py-2 rounded-md" type="submit" value="Book Now" />
                    </form>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-full' src={thumbnail_img} alt="Album" /></figure>
                <div className="card-body w-2/3">
                    <h2 className="text-2xl font-bold">{category_name}</h2>
                    <h2 className="card-title">$-{price_per_night} Price Per Night</h2>
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={rating}
                        readOnly
                    />
                    <p>{room_full_description}</p>
                </div>
            </div>
        </div>

    )
};

export default DetailsPage;