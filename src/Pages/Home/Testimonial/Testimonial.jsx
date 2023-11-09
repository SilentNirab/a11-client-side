import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/captioned.css';
import '../Testimonial/Testimonial.css'
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const AutoplaySlider = withAutoplay(AwesomeSlider);
const Testimonial = () => {

    const [testimonials, setTestimonils] = useState([]);
    useEffect(() => {
        fetch('https://room-booking-server-eta.vercel.app/testimonials')
            .then(res => res.json())
            .then(data => setTestimonils(data))
    }, [])

    return (
        <div className=" h-fit bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(https://rn53themes.net/themes/demo/the-royal-hotel/images/slider/4.jpg)' }}>
            <div className="hero-overlay bg-black bg-opacity-80"></div>
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <AutoplaySlider
                    className='h-96'
                    play={true}
                    bullets={false}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={6000}
                >
                    {
                        testimonials.map(testimonial => <div key={testimonial._id}>
                            <div className="w-full flex flex-col items-center justify-center gap-8 text-white">
                                <h1 className="text-3xl text-center w-4/5">
                                    {testimonial.user_comments}
                                </h1>
                                <div className="flex items-center gap-4">
                                    <div className="flex flex-col tracking-wider">
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={testimonial.rating}
                                            readOnly
                                        />
                                        <label className=" font-bold text-base">{testimonial.user_name}</label>
                                        <label className=" font-normal text-sm">{testimonial.user_from}</label>
                                    </div>
                                </div>
                            </div>

                        </div>)
                    }
                </AutoplaySlider>
            </div>
        </div>
    );
};

export default Testimonial;