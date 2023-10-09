

const Banner = () => {
    return (
        <div className="mt-7">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/0nJ7QJD/bannerimg.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">EventElegancePro</h1>
                        <p className="mb-5">Elevate Your Celebrations with <span className="text-2xl font-bold text-red-600">EventElegancePro.com!</span> We specialize in crafting unforgettable moments for weddings, birthdays, engagements, baby showers, and more. Our dedicated team pays meticulous attention to detail, ensuring your event is a resounding success. Trust us to bring your vision to life and make your special day truly extraordinary.</p>
                        <button className="btn btn-primary">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;