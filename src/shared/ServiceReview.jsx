import review from '../assets/review.jpg'

const ServiceReview = () => {
    return (
        <div>
            <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                <div className="carousel-item">
                    <img src={review} className="rounded-box w-48 h-40" />
                </div>
                <div className="carousel-item">
                    <img src={review} className="rounded-box w-48 h-40" />
                </div>
                <div className="carousel-item">
                    <img src={review} className="rounded-box w-48 h-40" />
                </div>
                <div className="carousel-item">
                    <img src={review} className="rounded-box w-48 h-40" />
                </div>
                <div className="carousel-item">
                    <img src={review} className="rounded-box w-48 h-40" />
                </div>
                <div className="carousel-item">
                    <img src={review} className="rounded-box w-48 h-40" />
                </div>
                <div className="carousel-item">
                    <img src={review} className="rounded-box w-48 h-40" />
                </div>
            </div>
        </div>
    );
};

export default ServiceReview;