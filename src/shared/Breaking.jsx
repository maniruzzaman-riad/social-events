import Marquee from "react-fast-marquee";

const Breaking = () => {
    return (
        <div>
            <div className="flex items-center">
                <button className="btn-secondary px-3 py-1 rounded-lg text-lg font-bold text-white">EventElegancePro</button>
                <Marquee>
                    <h2 className="text-lg font-semibold">Wellcome to <span className="text-2xl font-bold text-purple-800">EventElegancePro</span>  ,Experience Seamless Social Event Management with Us! <span className="ml-3 me-48 text-blue-700">Contuct With Us to get best Service.</span></h2>
                </Marquee>
            </div>
        </div>
    );
};

export default Breaking;