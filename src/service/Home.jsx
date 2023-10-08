import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Services from "./Services";


const Home = () => {
    const allData = useLoaderData()
    // console.log(data);
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 lg:grid-cols-4">
                <div>
                    <h2>this is left side</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 col-span-1 lg:col-span-3">
                    {
                        allData.map(data => <Services key={data.id} data={data}></Services>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;