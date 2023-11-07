import { useEffect, useState } from "react";
import roomBanner from '../../assets/Images/rooms-banner.jpg'
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
            <h2>{rooms.length}</h2>
        </div>
    );
};

export default Room;