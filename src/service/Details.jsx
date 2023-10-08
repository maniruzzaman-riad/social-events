import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const allData = useLoaderData()
    const {id} =useParams()
    const findCard = allData.find(matchData=>matchData.id == id)
    console.log(findCard);
    
    return (
        <div>
            <h2 className="text-center text-2xl font-semibold "><span className="text-4xl font-bold text-pink-700">WellCome</span> to Our <span className="text-4xl font-bold text-purple-700">{findCard.name}</span> Service</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4">
                <div className="col-span-1 lg:col-span-3">
                    <img src={findCard.image} alt="" />
                </div>
                <div>
                    <h2>why you hire me</h2>
                </div>
            </div>
        </div>
    );
};

export default Details;