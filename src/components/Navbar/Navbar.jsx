import img from '../../assets/logo.png';

const Navbar = () => {
    return (
        <div className="flex justify-between mt-6">
            <div className="flex items-center">
                <img className='w-8 h-12' src={img} alt="" />
                <p className='text-3xl'>akib</p>
            </div>
            <div>
                <button className='bg-gradient-to-r from-indigo-800 to-pink-800 hover:from-pink-800 hover:to-indigo-800 text-white px-4 py-2 rounded-lg'>Lets Talk</button>
            </div>
        </div>
    );
};

export default Navbar;