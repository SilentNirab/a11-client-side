import { useEffect, useState } from "react";
import roomBanner from '../../assets/Images/rooms-banner.jpg'
import RoomCard from "./RoomCard";
const Room = () => {
    const [rooms, setRooms] = useState([]);
    const [price, setPrice] = useState('');
    console.log(price);
    useEffect(() => {
        fetch(`http://localhost:5000/rooms?sortField=price_per_night&sortOrder=${price}`)
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [price])
    return (
        <div>
            <div className="">
                <img src={roomBanner} alt="" />
            </div>
            <div className="bg-[#2A2B33] flex justify-around items-center py-5">
                <div className="">
                    <h3 className="text-white text-2xl">AVAILABIL ROOMS</h3>
                </div>
                <select onChange={(e) =>setPrice(e.target.value)} className="select select-bordered w-44">
                    <option disabled selected>Filter</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </select>
            </div>

            <div className="max-w-7xl mx-auto space-y-4 py-5">
                {
                    rooms.map(room => <RoomCard key={room._id} room={room}></RoomCard>)
                }
            </div>
        </div>
    );
};

export default Room;