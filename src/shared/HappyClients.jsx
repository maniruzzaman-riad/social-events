import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const HappyClients = () => {
    return (
        <div className="mt-8">
            <h2 className="text-center text-4xl font-bold mb-5">Happy Clients</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-3">
                <div data-aos="fade-down-right" className="text-center border-2 border-purple-700 rounded-lg p-7">
                    <img className="w-36 h-36 rounded-full mx-auto" src="https://i.ibb.co/b6RJzDv/review1-1.jpg" alt="" />
                    <h2 className="text-2xl font-bold">John Milton</h2>
                    <p className="font-medium my-5">Absolutely thrilled with [Wedding Event Management Service]! Flawless execution, stunning decor, and an unforgettable night. Their team made our dream wedding a reality. Highly recommend.</p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                        </div>
                </div>
                <div data-aos="zoom-in-up" className="text-center border-2 border-purple-700 rounded-lg p-7">
                    <img className="w-36 h-36 rounded-full mx-auto" src="https://i.ibb.co/sP2xr3p/review2-1.jpg" alt="" />
                    <h2 className="text-2xl font-bold">Ketty Bow</h2>
                    <p className="font-medium my-5">Exceptional service by [Birthday Event Management Service]! They transformed my vision into a magical celebration. Impeccable planning, superb execution, and unforgettable memories. Highly recommend for any special occasion.</p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                        </div>
                </div>
                <div data-aos="fade-down-left" className="text-center border-2 border-purple-700 rounded-lg p-7">
                    <img className="w-36 h-36 rounded-full mx-auto" src="https://i.ibb.co/tZTMbfL/review3-1.jpg" alt="" />
                    <h2 className="text-2xl font-bold">Abrham Ken</h2>
                    <p className="font-medium my-5">Overjoyed with [Engagement Event Management Service]! They made our engagement celebration a dream come true. Impeccable organization, beautiful decor, and a truly unforgettable evening. Highly recommend their services.</p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                </div>
            </div>
        </div>
    );
};

export default HappyClients;