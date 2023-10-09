
import Carousel from 'better-react-carousel'

const ImgGallery = () => {
    return (
        <div className='mt-5 mb-10'>
            <h2 className='text-center text-4xl font-bold my-4'>Our Gallery</h2>
            <Carousel cols={4} rows={1} gap={10} loop>
                <Carousel.Item>
                    <img className='h-full w-full object-cover' src='https://i.ibb.co/99F0fTw/outdoors-evening-ceremony-bride-with-traditional-wedding-cake.jpg' />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='h-full w-full object-cover' src='https://i.ibb.co/TvKCgN6/group-happy-mature-people-having-fun-while-toasting-with-champagne-birthday-party.jpg' />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='h-full w-full object-cover' src='https://i.ibb.co/jy8QhHh/elderly-people-celebrating-their-birthday.jpg' />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='h-full w-full object-cover' src='https://i.ibb.co/jVhjfmc/party-1.jpg' />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='h-full w-full object-cover' src='https://i.ibb.co/HDpw79K/weeding.jpg' />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='h-full w-full object-cover' src='https://i.ibb.co/KhVB2Rs/birthday.jpg' />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='h-full w-full object-cover' src='https://i.ibb.co/XWWs4BJ/engagement.jpg' />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='h-full w-full object-cover' src='https://i.ibb.co/pRHhZqS/retirement.jpg' />
                </Carousel.Item>

                <Carousel.Item>
                    <img className='h-full w-full object-cover' src='https://i.ibb.co/jVhjfmc/party-1.jpg' />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='h-full w-full object-cover' src='https://i.ibb.co/TvKCgN6/group-happy-mature-people-having-fun-while-toasting-with-champagne-birthday-party.jpg' />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='h-full w-full object-cover' src='https://i.ibb.co/99F0fTw/outdoors-evening-ceremony-bride-with-traditional-wedding-cake.jpg' />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='h-full w-full object-cover' src='https://i.ibb.co/jy8QhHh/elderly-people-celebrating-their-birthday.jpg' />
                </Carousel.Item>


                {/* ... */}
            </Carousel>
        </div>
    );
};

export default ImgGallery;