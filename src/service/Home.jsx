import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Services from "./Services";
import Breaking from "../shared/Breaking";
import ImgGallery from "../shared/ImgGallery";
import sidebarimg from '../assets/sidebar.jpg'
import FollowUs from "../shared/FollowUs";
import HappyClients from "../shared/HappyClients";


const Home = () => {
    const allData = useLoaderData()
    // console.log(data);
    return (
        <div>
            <Breaking></Breaking>
            <div className="divider"></div>
            <Banner></Banner>
            <h2 className="text-center text-5xl font-bold mt-7">Our Services</h2>
            <div className="grid gap-1 grid-cols-1 lg:grid-cols-4">
                <div className="hidden lg:block">
                    <FollowUs></FollowUs>
                    <img className="w-full h-[700px] mt-6 rounded-md" src={sidebarimg} alt="" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 col-span-1 lg:col-span-3 px-3 pt-9">
                    {
                        allData.map(data => <Services key={data.id} data={data}></Services>)
                    }
                </div>
            </div>
            <HappyClients></HappyClients>
            <ImgGallery></ImgGallery>
        </div>
    );
};

export default Home;