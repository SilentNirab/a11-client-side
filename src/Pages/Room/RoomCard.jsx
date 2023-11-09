import { Rating } from '@smastrom/react-rating';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RoomCard = ({ room }) => {
    const { _id, category_name,rating, price_per_night, thumbnail_img, room_description } = room;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className='w-full' src={thumbnail_img} alt="Album" /></figure>
            <div className="card-body md:w-2/3">
                <h2 className="text-2xl font-bold">{category_name}</h2>
                <h2 className="card-title">$-{price_per_night} Price Per Night</h2>
                <Rating
                    style={{ maxWidth: 120 }}
                    value={rating}
                    readOnly
                />
                <p>{room_description}</p>

                <div className="card-actions justify-end">
                    <Link to={`details/${_id}`}>
                        <button className="text-white font-medium bg-[#a28441] px-4 py-2 rounded-md">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

RoomCard.propTypes = {
    room: PropTypes.object
};

export default RoomCard;