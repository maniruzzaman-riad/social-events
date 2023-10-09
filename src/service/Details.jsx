import { useLoaderData, useParams } from "react-router-dom";
import FollowUs from "../shared/FollowUs";


const Details = () => {
    const allData = useLoaderData()
    const { id } = useParams()
    const findCard = allData.find(matchData => matchData.id == id)
    console.log(findCard);

    return (
        <div>
            <h2 className="text-center text-2xl font-semibold "><span className="text-4xl font-bold text-pink-700">WellCome</span> to Our <span className="text-4xl font-bold text-purple-700">{findCard.name}</span> Service</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 mt-8">
                <div className="col-span-1 lg:col-span-3">
                    <img src={findCard.image} alt="" />
                    <h2 className="p-4">{findCard.full_details}</h2>
                </div>
                <div className="px-5">
                    <h2 className="text-center text-2xl font-bold">Why you Choose Us ?</h2>
                    <p className="text-center font-semibold">Choose <span className="text-blue-700">EventElegancePro.com</span> for expert event management. From weddings to birthdays, engagements to baby showers, we create unforgettable moments. With meticulous attention to detail, we transform your vision into reality. Trust us to make your event shine brighter than ever.</p>
                    <div>
                        <FollowUs></FollowUs>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;