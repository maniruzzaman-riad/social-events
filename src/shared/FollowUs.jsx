import { BsFacebook ,BsInstagram ,BsTwitter} from 'react-icons/bs';

const FollowUs = () => {
    return (
        <div className='border border-purple-800 p-4 rounded-lg mt-9'>
            <h2 className="text-center text-2xl font-bold mb-5">Follow Us On</h2>
            <div className='space-y-3'>
                <h2 className='flex items-center font-bold text-xl gap-3 border border-purple-700 py-3 px-10 bg-purple-700 text-white hover:text-blue-700 rounded-xl hover:bg-pink-500'><BsFacebook></BsFacebook>Facebook</h2>
                <h2 className='flex items-center font-bold text-xl gap-3 border border-purple-700 py-3 px-10 bg-purple-700 text-white hover:text-blue-700 rounded-xl hover:bg-pink-500'><BsInstagram></BsInstagram>Instagram</h2>
                <h2 className='flex items-center font-bold text-xl gap-3 border border-purple-700 py-3 px-10 bg-purple-700 text-white hover:text-blue-700 rounded-xl hover:bg-pink-500'><BsTwitter></BsTwitter>Twitter</h2>
            </div>
        </div>
    );
};

export default FollowUs;