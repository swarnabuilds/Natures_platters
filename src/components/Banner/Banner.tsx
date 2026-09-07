 
import bannerImg from '../../assets/img/Hero Section 1.png'
const Banner = () => {
    return (
        <div className="text-center mb-9">
            <div className="max-w-2xl mx-auto py-10">
                <h2 className="text-5xl font-bold text-center mb-2">
                Freshness <span className="text-[#179800]">You Can <br></br> Count</span> On,
                Prices You’ll Love!
                </h2>
                <p className="text-center text-xl mt-3">
                Shop your daily essentials at unbeatable prices. From fresh produce to
                pantry staples, we’ve got you covered every day!
                </p>
            </div>
            <img src={bannerImg} alt="Banner" className="mx-auto max-w-[800px] md:max-h-[550px]" />
        </div>
    );
};

export default Banner;