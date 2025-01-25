import { GrLocation } from "react-icons/gr";
import { MdOutlinePhone } from "react-icons/md";
import { TiMail } from "react-icons/ti";
import { IoMdSend } from "react-icons/io";

const Contact = () => {

    return (
        <div className="mt-10 mb-12">
            <h3 className='text-center text-4xl font-extrabold mb-8'>Contact Me<span className="text-pink-800 font-extrabold">_</span></h3>
            <p className="text-center mb-20">I'm always open to discussing new projects,
                <br />
                creative ideas, or opportunities to be part of your vision. Feel free to reach out!</p>

            <div className="grid gap-4 md:grid-cols-2">
                {/* 1st  */}
                <div className="space-y-10 md:mt-9">
                    <div className="flex gap-4">
                        <p className="bg-gradient-to-r from-indigo-800 to-pink-800 p-3 text-2xl font-bold rounded-md text-white"><GrLocation /></p>
                        <div>
                            <p className="font-semibold">Address</p>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <p className="bg-gradient-to-r from-indigo-800 to-pink-800 p-3 text-2xl font-bold rounded-md text-white"><MdOutlinePhone /></p>
                        <div>
                            <p className="font-semibold">Phone</p>
                            <p>+88 01917493197</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <p className="bg-gradient-to-r from-indigo-800 to-pink-800 p-3 text-2xl font-bold rounded-md text-white"><TiMail /></p>
                        <div>
                            <p className="font-semibold">Email</p>
                            <p>rakibx270@gmail.com</p>
                        </div>
                    </div>
                </div>
                {/* 2nd  */}
                <div>
                    <form action="" method="get" className="">
                        <div className="relative mb-4">
                            <input
                                type="text"
                                id="name"
                                placeholder=" "
                                className="peer w-full text-pink-600 p-3 pt-6 border border-pink-800 rounded-md outline-none focus:border-gray-500"
                                required
                            />
                            <label
                                htmlFor="name"
                                className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-pink-500"
                            >
                                Name
                            </label>
                        </div>
                        <div className="relative mb-4">
                            <input
                                type="email"
                                id="email"
                                placeholder=" "
                                className="peer w-full p-3 pt-6 border text-pink-600 border-pink-800 rounded-md outline-none focus:border-gray-500"
                                required
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-pink-500"
                            >
                                Email
                            </label>
                        </div>
                        <div className="relative mb-4">
                            <textarea
                                type="text"
                                id="message"
                                placeholder=" "
                                className="peer w-full text-pink-600 p-3 pt-6 border border-pink-800 rounded-md outline-none focus:border-gray-500"
                                required
                            >
                            </textarea>
                            <label
                                htmlFor="message"
                                className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-pink-500"
                            >
                                Message
                            </label>
                        </div>

                        <button className="flex items-center justify-center gap-4 bg-gradient-to-r from-indigo-800 to-pink-800 hover:from-pink-800 hover:to-indigo-800 text-white py-2 w-full"><IoMdSend></IoMdSend> Send Message</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;