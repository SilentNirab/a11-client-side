const Offer = () => {
    return (
        <div>
            <div className="bg-cover bg-center" style={{ backgroundImage: 'url(https://rn53themes.net/themes/demo/the-royal-hotel/images/offer-bg.jpg)' }}>
                <div className=" w-full h-full bg-gradient-to-r from-[#f4364fa1] to-[#f2a5af0d] bg-black bg-opacity-40 py-20">
                    <div className="md:flex justify-around items-center max-w-7xl mx-auto">
                        <div className="w-96 text-center">
                            <h1 className="mb-5 text-4xl text-white font-bold mt-5">STANDARDIZED BUDGET ROOMS</h1>
                            <hr />
                            <p className="mb-5 text-6xl text-white font-bold">$99/-</p>
                        </div>
                        <div className="">
                            <div className="bg-[#f4364fe7] hover:bg-[#d8c42a] w-72 h-72 text-center border-4 border-white rounded-full">
                                <h2 className="text-white text-4xl font-bold mt-12 mb-4">Get <p className="text-6xl">70%</p> Off</h2>
                                <span className="text-white border p-2 rounded-full ">Use code: RG5481WERQ</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Offer;