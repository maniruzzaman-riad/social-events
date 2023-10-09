import Marquee from "react-fast-marquee";
import moment from 'moment';

const Breaking = () => {
    return (
        <div>
            <div className="flex">
                <button className="btn">EventElegancePro</button>
                <Marquee>
                <h2 className="text-lg font-semibold">Wellcome to <span className="text-2xl font-bold text-purple-800">EventElegancePro</span>  ,Experience Seamless Social Event Management with Us! <span className="ml-3 me-48 text-blue-700">Contuct With Us to get best Service.</span></h2>
            </Marquee>
            </div>
            <p className="text-lg font-bold">{moment().format('MMMM Do YYYY')}</p>
            {/* <p>{moment().format('h:mm:ss a')}</p> */}
        </div>
    );
};

export default Breaking;