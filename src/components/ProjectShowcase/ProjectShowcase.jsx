import { LuGithub } from "react-icons/lu";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router";


const ProjectShowcase = () => {
    return (
        <div className="mt-10">
            <h3 className='text-center text-3xl md:text-5xl font-extrabold mb-16'>Projects Showcase<span className="text-pink-800 font-extrabold">_</span></h3>

            <div className="md:flex gap-5 mb-5">
                {/* card-1  */}
                <div className="p-5 border border-pink-800 hover:border hover:border-white group flex-1">
                    <div
                        className="h-[250px]  relative transition-all duration-[1500ms] ease-in-out  w-full bg-cover flex justify-end gap-4 bg-top group-hover:bg-bottom"
                        style={{
                            backgroundImage: `url('https://i.ibb.co.com/PNBZMS1/Career-Hub-01-24-2025-07-33-PM.png')`,
                        }}
                    ></div>
                    <div>
                        <h2 className="border-b pb-3 mb-4  mt-3"><span className="text-xl font-semibold">Career Hub</span> - Applying For Job</h2>
                        <div className="flex flex-wrap gap-2 border-b pb-3">
                            <p className="border text-white border-pink-800 rounded-full px-3">React.js</p>
                            <p className="border text-white border-pink-800 rounded-full px-3">JavaScript</p>
                            <p className="border text-white border-pink-800 rounded-full px-3">Tailwind Css</p>
                            <p className="border text-white border-pink-800 rounded-full px-3">DaisyUi</p>
                        </div>

                        <div className="flex gap-3 mt-4">
                            <Link to={'https://github.com/Rakibul-Hasan270/react-career-hub'} className="w-full bg-gray-600 border hover:border-pink-800 hover:bg-gray-800 flex justify-center">
                                <button className="text-white  py-2 flex justify-center items-center gap-2">Github <LuGithub /></button>
                            </Link>

                            <Link to={'https://fancy-hamster-b63065.netlify.app/'} className="w-full bg-gray-600 border hover:border-pink-800 hover:bg-gray-800 flex justify-center">
                                <button className="text-white  py-2 flex justify-center items-center gap-2">Live View  <FaArrowUpRightFromSquare /></button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* card-2  */}
                <div className="p-5 border border-pink-800 hover:border hover:border-white group flex-1">
                    <div
                        className="h-[250px]  relative transition-all duration-[1500ms] ease-in-out  w-full bg-cover flex justify-end gap-4 bg-top group-hover:bg-bottom"
                        style={{
                            backgroundImage: `url('https://i.ibb.co.com/wNgKwD3/Book-Vibe-Home-01-24-2025-07-39-PM.png')`,
                        }}
                    ></div>
                    <div>
                        <h2 className="border-b pb-3 mb-4 mt-3"><span className="text-xl font-semibold">Books Vibe</span> - Buying books</h2>
                        <div className="flex flex-wrap gap-2 border-b pb-3">
                            <p className="border text-white border-pink-800 rounded-full px-3">React.js</p>
                            <p className="border text-white border-pink-800 rounded-full px-3">JavaScript</p>
                            <p className="border text-white border-pink-800 rounded-full px-3">Tailwind Css</p>
                            <p className="border text-white border-pink-800 rounded-full px-3">DaisyUI</p>
                        </div>

                        <div className="flex gap-3 mt-4">
                            <Link to={'https://github.com/Rakibul-Hasan270/book-vibe'} className="w-full bg-gray-600 border hover:border-pink-800 hover:bg-gray-800 flex justify-center">
                                <button className="text-white  py-2 flex justify-center items-center gap-2">Github <LuGithub /></button>
                            </Link>

                            <Link to={'https://clever-klepon-57694f.netlify.app/'} className="w-full bg-gray-600 border hover:border-pink-800 hover:bg-gray-800 flex justify-center">
                                <button className="text-white  py-2 flex justify-center items-center gap-2">Live View  <FaArrowUpRightFromSquare /></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:flex gap-5">
                {/* card-1  */}
                <div className="p-5 border border-pink-800 hover:border hover:border-white group flex-1">
                    <div
                        className="h-[250px]  relative transition-all duration-[1500ms] ease-in-out  w-full bg-cover flex justify-end gap-4 bg-top group-hover:bg-bottom"
                        style={{
                            backgroundImage: `url('https://i.ibb.co.com/KDH2M2Y/Alphabet-Clash-Pro-01-25-2025-09-53-AM.png')`,
                        }}
                    ></div>
                    <div>
                        <h2 className="border-b pb-3 mb-4  mt-3"><span className="text-xl font-semibold">Alphabet Clash Pro</span> - TypeMaster</h2>
                        <div className="flex flex-wrap gap-2 border-b pb-3">
                            <p className="border text-white border-pink-800 rounded-full px-3">JavaScript</p>
                            <p className="border text-white border-pink-800 rounded-full px-3">Tailwind Css</p>
                            <p className="border text-white border-pink-800 rounded-full px-3">HTML5</p>
                            <p className="border text-white border-pink-800 rounded-full px-3">DaisyUi</p>
                        </div>

                        <div className="flex gap-3 mt-4">
                            <Link to={'https://github.com/Rakibul-Hasan270/alpha-clash'} className="w-full bg-gray-600 border hover:border-pink-800 hover:bg-gray-800 flex justify-center">
                                <button className="text-white  py-2 flex justify-center items-center gap-2">Github <LuGithub /></button>
                            </Link>

                            <Link to={'https://loquacious-pegasus-97324b.netlify.app/'} className="w-full bg-gray-600 border hover:border-pink-800 hover:bg-gray-800 flex justify-center">
                                <button className="text-white  py-2 flex justify-center items-center gap-2">Live View  <FaArrowUpRightFromSquare /></button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* card-2  */}
                <div className="p-5 border border-pink-800 hover:border hover:border-white group flex-1">
                    <div
                        className="h-[250px]  relative transition-all duration-[1500ms] ease-in-out  w-full bg-cover flex justify-end gap-4 bg-top group-hover:bg-bottom"
                        style={{
                            backgroundImage: `url('https://i.ibb.co.com/KrVL6Bt/Retro-Forum-01-25-2025-10-21-AM.png')`,
                        }}
                    ></div>
                    <div>
                        <h2 className="border-b pb-3 mb-4 mt-3"><span className="text-xl font-semibold">Retro Forum</span> - RetroTalk</h2>
                        <div className="flex flex-wrap gap-2 border-b pb-3">
                            <p className="border text-white border-pink-800 rounded-full px-3">JavaScript</p>
                            <p className="border text-white border-pink-800 rounded-full px-3">Tailwind Css</p>
                            <p className="border text-white border-pink-800 rounded-full px-3">HTML5</p>
                            <p className="border text-white border-pink-800 rounded-full px-3">DaisyUI</p>
                        </div>

                        <div className="flex gap-3 mt-4">
                            <Link to={'https://github.com/Rakibul-Hasan270/retro_forum'} className="w-full bg-gray-600 border hover:border-pink-800 hover:bg-gray-800 flex justify-center">
                                <button className="text-white  py-2 flex justify-center items-center gap-2">Github <LuGithub /></button>
                            </Link>

                            <Link to={'https://rakibul-hasan270.github.io/retro_forum/  '} className="w-full bg-gray-600 border hover:border-pink-800 hover:bg-gray-800 flex justify-center">
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