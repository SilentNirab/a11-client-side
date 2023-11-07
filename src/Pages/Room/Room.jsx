import { useEffect, useState } from "react";
import roomBanner from '../../assets/Images/rooms-banner.jpg'
import RoomCard from "./RoomCard";
const Room = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/rooms')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [])
    return (
        <div>
            <div className="">
                <img src={roomBanner} alt="" />
            </div>
            <div className="bg-[#2A2B33] ">
                <div className="max-w-7xl mx-auto py-5">
                <h3 className="text-white">CHECK AVAILABILITY</h3>
                </div>
            </div>

            <div className="max-w-7xl mx-auto space-y-4 py-5">
                {
                    rooms.map(room =><RoomCard key={room._id} room={room}></RoomCard>)
                }
            </div>
        </div>
    );
};

export default Room;