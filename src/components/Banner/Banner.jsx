import { LuArrowDownToLine } from "react-icons/lu";
import img from '../../assets/1000027735.jpg';

const Banner = () => {
    return (
        <div className="md:flex justify-between items-center mt-10 gap-4 space-y-10">
            <div className="flex-grow space-y-5">
                <h3 className="text-4xl font-bold text-center md:text-start">Im Rakibul Hasan</h3>
                <p className="text-xl md:text-3xl font-semibold text-center md:text-start">a Web Developer</p>
                <p className="md:e-[700px] text-center md:text-start">Enthusiastic Jr. Web Developer skilled in creating dynamic, complex, and interactive web applications with innovative technologies.</p>
                <button className="mx-auto  md:ml-0 flex items-center gap-2 bg-gradient-to-r from-indigo-800 to-pink-800 hover:from-pink-800 hover:to-indigo-800 text-white px-4 py-2 rounded-lg">Resume <LuArrowDownToLine /></button>
            </div>
            <div className="mx-auto rounded-full w-7/12 md:w-4/12 border-4 border-pink-800">
                <img className="rounded-full" src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;