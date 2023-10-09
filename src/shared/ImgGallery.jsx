
import review from '../assets/review.jpg'
import Carousel from 'better-react-carousel'

const ImgGallery = () => {
    return (
        <div className='mt-5 mb-10'>
            <h2 className='text-center text-4xl font-bold my-4'>Our Gallery</h2>
            <Carousel cols={4} rows={1} gap={10} loop>
                <Carousel.Item>
                    <img width="100%" src={review} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={review} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={review} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={review} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={review} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={review} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={review} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={review} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={review} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={review} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={review} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={review} />
                </Carousel.Item>
                
                {/* ... */}
            </Carousel>
        </div>
    );
};

export default ImgGallery;