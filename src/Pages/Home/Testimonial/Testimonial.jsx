import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/captioned.css';
import '../Testimonial/Testimonial.css'


const AutoplaySlider = withAutoplay(AwesomeSlider);
const Testimonial = () => {
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
                     <div className="w-full flex flex-col items-center justify-center gap-8 text-white">
                            <h1 className="text-3xl text-center w-4/5">
                            This is the only place to stay in Catalina! I have stayed in the cheaper hotels and they were fine, but this is just the icing onthe cake! After spending the day bike riding and hiking to come back and enjoy a glass of wine while looking out your 
                            </h1>
                            <div className="flex items-center gap-4">
                                <div className="flex flex-col tracking-wider">
                                    <label className=" font-bold text-base">JULIA ROSE</label>
                                    <label className=" font-normal text-sm">From Los Angeles, California</label>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-center justify-center gap-8 text-white">
                            <h1 className="text-3xl text-center w-4/5">
                            This is the only place to stay in Catalina! I have stayed in the cheaper hotels and they were fine, but this is just the icing onthe cake! After spending the day bike riding and hiking to come back and enjoy a glass of wine while looking out your  
                            </h1>
                            <div className="flex items-center gap-4">
                                <div className="flex flex-col tracking-wider">
                                    <label className=" font-bold text-base">John Forbes</label>
                                    <label className=" font-normal text-sm">From Ohio, America</label>
                                </div>
                            </div>
                        </div>
                </AutoplaySlider>
            </div>
        </div>
    );
};

export default Testimonial;