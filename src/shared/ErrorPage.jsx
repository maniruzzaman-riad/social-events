import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center mt-10">
            <h2 className="text-6xl font-bold">404</h2>
            <h2 className="text-2xl font-semibold mt-5 mb-10">No Data Found</h2>
            <Link to="/"><button className="btn">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;