import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Provider/AuthProvider/AuthProvider";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const MyRoom = () => {
    const { user } = useContext(authContext);
    const [bookings, setBookings] = useState([])
    const url = `https://room-booking-server-eta.vercel.app/booking?email=${user?.email}`;
    useEffect(() => {
        fetch(url,{
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url])

    const handelDelete = (id) => {

        fetch(`https://room-booking-server-eta.vercel.app/booking/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaning = bookings.filter(booking => booking._id !== id);
                setBookings(remaning); 
                if (data.acknowledged == true) {
                    swal( "Delete successfully",{
                        icon: "success",
                      });
                }
            })
    }
    return (
        <div className="py-20 min-h-screen max-w-7xl mx-auto">
            <h1 className="text-4xl text-center py-5">My Bookings</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Room Name</th>
                            <th>Arival</th>
                            <th>Departure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <tr key={booking._id}>
                                <td><img className="w-32" src={booking.thumbnail_img} alt="" /></td>
                                <td>{booking.room_name}</td>
                                <td>{booking.arival}</td>
                                <td>{booking.Departure}</td>
                                <td><Link to={`${booking._id}`}><button className="bg-green-600 hover:bg-green-700 px-2 md:px-5 py-2 text-white font-semibold text-md lg:text-lg rounded-md">Update</button></Link></td>
                                <td><button onClick={() => handelDelete(booking._id)} className="bg-red-600 hover:bg-red-700 px-2 md:px-5 py-2 text-white font-semibold text-md lg:text-lg rounded-md">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyRoom;