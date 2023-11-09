import { useLoaderData } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider/AuthProvider";
import { useContext } from "react";
import swal from "sweetalert";
import roomBanner from '../../assets/Images/rooms-banner.jpg'

const UpdateBooking = () => {
    const roomDetails = useLoaderData();
    console.log(roomDetails);
  
    const {_id, room_name, adlts,childrens,arival,Departure, thumbnail_img, room_description } = roomDetails;
    const {user} = useContext(authContext);
    const handelUpdate = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const room_name = form.get("room_name");
        const adults = form.get("adults");
        const childrens = form.get("childrens");
        const arival = form.get("arival");
        const Departure = form.get("Departure");
        const email = user?.email;
        const booking = {room_name, adults,childrens, arival, Departure,
        thumbnail_img, email}
        
        fetch(`https://room-booking-server-eta.vercel.app/booking/${_id}`, {
            method: 'Put', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                swal( "Book successfully",{
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
                    <form onSubmit={handelUpdate} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        <select className="select select-bordered md:w-40" name="room_name" defaultValue={room_name} required>
                            <option>Luxury Room</option>
                            <option>Double Room</option>
                            <option>Family Room</option>
                            <option>Deluxe Room</option>
                            <option>Single Room</option>
                            <option>Presidential Room</option>
                        </select>

                        <select className="select select-bordered md:w-40" name="adults" defaultValue={adlts} required>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        <select className="select select-bordered md:w-40" defaultValue={childrens} name="childrens"  >
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>

                        <div className="-mt-5 md:w-40">
                            <label className="block text-white text-sm font-bold mb-2" name="" htmlFor="date">
                                Arrival Date
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" defaultValue={arival} name="arival" required />
                        </div>
                        <div className="-mt-5 md:w-40">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="date">
                                Departure Date
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" defaultValue={Departure} name="Departure" required />
                        </div>
                        <input className="w-32 text-white font-medium bg-[#a28441] px-4 py-2 rounded-md" type="submit" value="Update" />
                    </form>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-full' src={thumbnail_img} alt="Album" /></figure>
                <div className="card-body w-2/3">
                    <h2 className="card-title">{room_name}</h2>
                    <p>{room_description}</p>
                </div>
            </div>
        </div>
    );
};

export default UpdateBooking;