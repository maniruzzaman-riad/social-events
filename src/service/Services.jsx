import { Link } from "react-router-dom";


const Services = ({ data }) => {
    const { id, image, name, description } = data;
    console.log(data);
    return (
        <div>
            <h2 className="text-3xl font-bold">{name}</h2>
            <img src={image} alt="" />
            <h2>{description}</h2>
            <Link to={`/details/${id}`}><button className="btn">See Details</button></Link>
        </div>
    );
};

export default Services;