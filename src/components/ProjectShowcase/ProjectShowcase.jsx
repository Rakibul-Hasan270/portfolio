import { LuGithub } from "react-icons/lu";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router";


const ProjectShowcase = () => {
    return (
        <div className="mt-10">
            <h3 className='text-center text-4xl font-extrabold mb-8'>Projects Showcase<span className="text-pink-800 font-extrabold">_</span></h3>

            <div className="md:flex gap-5">
                {/* card-1  */}
                <div className="p-5 border border-pink-800 hover:border hover:border-white">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                    <div>
                        <h2 className="border-b pb-3 mb-4">Project Name </h2>
                        <div className="flex flex-wrap gap-2 border-b pb-3">
                            <p className="border text-white border-pink-800 rounded-full px-3">React.js</p>
                            <p className="border text-white border-pink-800 rounded-full px-3">JavaScript</p>
                            <p className="border text-white border-pink-800 rounded-full px-3">Tailwind Css</p>
                        </div>

                        <div className="flex gap-3 mt-4">
                            <Link to={'https://github.com/Rakibul-Hasan270/react-career-hub'} className="w-full bg-gray-600 border hover:border-pink-800 hover:bg-gray-800 flex justify-center">
                                <button className="text-white  py-2 flex justify-center items-center gap-2">Github <LuGithub /></button>
                            </Link>

                            <Link to={'https://bespoke-meringue-456681.netlify.app/'} className="w-full bg-gray-600 border hover:border-pink-800 hover:bg-gray-800 flex justify-center">
                                <button className="text-white  py-2 flex justify-center items-center gap-2">Live View  <FaArrowUpRightFromSquare /></button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* card-2  */}
                <div className="p-5 border border-pink-800 hover:border hover:border-white">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                    <div>
                        <h2 className="border-b pb-3 mb-4">Project Name </h2>
                        <div className="flex flex-wrap gap-2 border-b pb-3">
                            <p className="border text-white border-pink-800 rounded-full px-3">React.js</p>
                            <p className="border text-white border-pink-800 rounded-full px-3">JavaScript</p>
                            <p className="border text-white border-pink-800 rounded-full px-3">Tailwind Css</p>
                        </div>

                        <div className="flex gap-3 mt-4">
                            <Link to={'https://github.com/Rakibul-Hasan270/react-career-hub'} className="w-full bg-gray-600 border hover:border-pink-800 hover:bg-gray-800 flex justify-center">
                                <button className="text-white  py-2 flex justify-center items-center gap-2">Github <LuGithub /></button>
                            </Link>

                            <Link to={'https://bespoke-meringue-456681.netlify.app/'} className="w-full bg-gray-600 border hover:border-pink-800 hover:bg-gray-800 flex justify-center">
                                <button className="text-white  py-2 flex justify-center items-center gap-2">Live View  <FaArrowUpRightFromSquare /></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectShowcase;