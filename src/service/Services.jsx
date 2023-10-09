import { Link } from "react-router-dom";


const Services = ({ data }) => {
    const { id, image, name, description, price } = data;
    // console.log(data);
    return (
        <div className="border border-purple-700 rounded-lg p-4">
            <h2 className="text-3xl font-bold text-center">{name}</h2>
            <img className="my-6" src={image} alt="" />
            <h2>{description}</h2>
            <div className="flex justify-between items-center">
                <p className="text-xl font-semibold">Service price: {price}</p>
                <Link to={`/details/${id}`}><button className="btn">See Details</button></Link>
            </div>
        </div>
    );
};

export default Services;